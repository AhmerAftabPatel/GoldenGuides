import React, { Component } from "react";
import { isAuthenticated } from "../auth";
import { Redirect, Link } from "react-router-dom";
import { read } from "./apiUser";
import Default from "./Default.png";
import DeleteUser from "./DeleteUser";
import FollowProfileButton from "./FollowProfileButton";
import ProfileTabs from "./ProfileTabs";
import { listByUser } from "../post/apiPost";
class Profile extends Component {
  constructor() {
    super();
    this.state = {
      user: { following: [], followers: [] },
      redirectToSignin: false,
      following: false,
      error: "",
      posts: []
    };
  }
  // check follow
  checkFollow = user => {
    const jwt = isAuthenticated();
    const match = user.followers.find(follower => {
      // one id has many other ids (followers) and vice versa
      return follower._id === jwt.user._id;
    });
    return match;
  };

  clickFollowButton = callApi => {
    const userId = isAuthenticated().user._id;
    const token = isAuthenticated().token;

    callApi(userId, token, this.state.user._id)
      .then(data => {
        console.log(data);
        this.setState({ user: data, following: !this.state.following });
      })
      .catch(err => this.setState({ error: err.response }));
  };

  init = userId => {
    const token = isAuthenticated().token;
    read(userId, token)
      .then(data => {
        listByUser(userId, token).then(res => {
          this.setState({ posts: res });
        });
        let following = this.checkFollow(data.data);
        this.setState({ user: data.data, following });
      })
      .catch(error => {
        console.error(error.response);
        this.setState({ redirectToSignin: true });
      });
  };
  componentDidMount() {
    const userId = this.props.match.params.userId;
    this.init(userId);
  }

  componentWillReceiveProps(props) {
    const userId = props.match.params.userId;
    this.init(userId);
  }

  render() {
    const { redirectToSignin, posts, user } = this.state;
    if (redirectToSignin) return <Redirect to="/login" />;

    const photoUrl = user._id ? `/api/user/photo/${user._id}` : Default;

    return (
      <div className="m-4">
        <div class="container">
          <div class="main-body">
            <nav aria-label="breadcrumb" class="main-breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  User Profile
                </li>
              </ol>
            </nav>

            <div class="row gutters-sm">
              <div class="col-md-4 mb-3">
                <div class="card">
                  <div class="card-body">
                    <div class="d-flex flex-column align-items-center text-center">
                      <img
                        src={photoUrl}
                        onError={i => {
                          i.target.src = `${Default}`;
                        }}
                        alt={user.name}
                        class="rounded-circle"
                        width="150"
                      />
                      <div class="mt-3">
                        <h4>{user.name}</h4>
                        <p class="text-secondary mb-1">A Golden Blogger</p>
                        {`Joined ${new Date(user.created).toDateString()}`}
                        <p class="text-muted font-size-sm">{user.about}</p>
                        <div class="row">
                          {isAuthenticated().user &&
                          isAuthenticated().user._id === user._id ? (
                            <div className="d-inline-block">
                              <Link
                                className="btn btn-raised btn-info mr-5"
                                to={`/create/post`}
                              >
                                Create Post
                              </Link>

                              <Link
                                className="btn btn-raised btn-success mr-5"
                                to={`/profile/edit/${user._id}`}
                              >
                                Edit Profile
                              </Link>
                              {/* <DeleteUser userId={user._id} /> */}
                            </div>
                          ) : (
                            <FollowProfileButton
                              following={this.state.following}
                              onButtonClick={this.clickFollowButton}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-8">
                <div class="card mb-3">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-sm-3">
                        <h6 class="mb-0">Full Name</h6>
                      </div>
                      <div class="col-sm-9 text-secondary">{user.name}</div>
                    </div>
                    <hr />
                    <div class="row">
                      <div class="col-sm-3">
                        <h6 class="mb-0">Email</h6>
                      </div>
                      <div class="col-sm-9 text-secondary">{user.email}</div>
                    </div>
                    <hr />
                    <div class="row">
                      <div class="col-sm-3">
                        <h6 class="mb-0">Phone</h6>
                      </div>
                      <div class="col-sm-9 text-secondary">
                        {user.phone_number}
                      </div>
                    </div>
                    <hr />
                    <div class="row">
                      <div class="col-sm-3">
                        <h6 class="mb-0">About</h6>
                      </div>
                      <div class="col-sm-9 text-secondary">{user.about}</div>
                    </div>
                    <hr />
                  </div>
                </div>
                <ProfileTabs
                  posts={posts}
                  followers={this.state.user.followers}
                  following={this.state.user.following}
                />
              </div>
            </div>
          </div>
          {isAuthenticated().user && isAuthenticated().user.role === "admin" && (
            <div className="card mt-5">
              <div className="card-body">
                <h5 className="card-title">Admin</h5>
                <p className="mb-2 text-danger">Edit/Delete as an Admin</p>
                <Link
                  className="btn btn-raised btn-success mr-5"
                  to={`/profile/edit/${user._id}`}
                >
                  Edit Profile
                </Link>
                <DeleteUser userId={user._id} />
              </div>
            </div>
          )}
        </div>
        {/* <div className="container">
        <h2 className="mt-5 mb-5">Profile</h2>
        <div className="row">
          <div className="col-md-4">
            <img
              style={{ height: "200px", width: "auto" }}
              className="img-thumbnail"
              src={photoUrl}
              onError={(i) => {
                i.target.src = `${Default}`;
              }}
              alt={user.name}
            />
          </div>

          <div className="col-md-8">
            <div className="lead mt-2">
              <p>Hello {user.name}</p>
              <p>Email: {user.email}</p>
              <p>{`Joined ${new Date(user.created).toDateString()}`}</p>
            </div>

            {isAuthenticated().user &&
            isAuthenticated().user._id === user._id ? (
              <div className="d-inline-block">
                <Link
                  className="btn btn-raised btn-info mr-5"
                  to={`/create/post`}
                >
                  Create Post
                </Link>

                <Link
                  className="btn btn-raised btn-success mr-5"
                  to={`/profile/edit/${user._id}`}
                >
                  Edit Profile
                </Link>
                <DeleteUser userId={user._id} />
              </div>
            ) : (
              <FollowProfileButton
                following={this.state.following}
                onButtonClick={this.clickFollowButton}
              />
            )}
          </div>
          <hr />
        </div>
        <div className="row">
          <div className="col md-12 mt-5 mb-5">
            <hr />
            <p className="lead">{user.about}</p>
            <hr />
            <ProfileTabs
              posts={posts}
              followers={this.state.user.followers}
              following={this.state.user.following}
            />
          </div>
        </div>
        <div>
          {isAuthenticated().user && isAuthenticated().user.role === "admin" && (
            <div className="card mt-5">
              <div className="card-body">
                <h5 className="card-title">Admin</h5>
                <p className="mb-2 text-danger">Edit/Delete as an Admin</p>
                <Link
                  className="btn btn-raised btn-success mr-5"
                  to={`/profile/edit/${user._id}`}
                >
                  Edit Profile
                </Link>
                <DeleteUser userId={user._id} />
              </div>
            </div>
          )}
        </div>
      </div> */}
      </div>
    );
  }
}

export default Profile;

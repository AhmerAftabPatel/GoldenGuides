import React, { Component } from "react";
import { list, pageList } from "./apiPost";

import CustomCard from "../components/CustomCard";
import { Card } from "semantic-ui-react";
class Allpost extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      page: 1,
      loading: false,
    };
  }
  componentDidMount() {
    this.setState({ loading: true });
    this.loadPosts(this.state.page);
    list()
      .then((data) => {
        //console.log(data)
        this.setState({ posts: data.post, loading: false });
      })
      .catch((err) => console.log(err.response));
  }
  loadMore = (number) => {
    this.setState({ page: this.state.page + number });
    this.loadPosts(this.state.page + number);
  };

  loadLess = (number) => {
    this.setState({ page: this.state.page - number });
    this.loadPosts(this.state.page - number);
  };

  loadPosts = (page) => {
    pageList(page).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        console.log(data.post);
        this.setState({ posts: data.post });
      }
    });
  };

  renderPosts = (posts) => {
    return (
      <Card.Group stackable itemsPerRow = {4}>
        {posts.map((post, i) => {
          const posterId = post.postedBy ? `/user/${post.postedBy._id}` : "";
          const posterName = post.postedBy ? post.postedBy.name : " Unknown";

          return (
            <CustomCard history ={this.props.history} i={i} post ={post} posterId ={posterId} posterName={posterName}/>
          );
        })}
      </Card.Group>
    );
  };
  render() {
    const { posts, loading, page } = this.state;
    if (loading) {
      return <h2>Loading...</h2>;
    }
    return (
      <div className="container">
        <h2 className="mt-5 mb-5">
          {!posts.length ? "No more posts!" : "Recent Posts"}
        </h2>

        {this.renderPosts(posts)}
        {/* {page > 1 ? (
          <button
            className="btn btn-raised btn-warning mr-5 mt-5 mb-5"
            onClick={() => this.loadLess(1)}
          >
            Previous ({this.state.page - 1})
          </button>
        ) : (
          ""
        )}

        {posts.length ? (
          <button
            className="btn btn-raised btn-success mt-5 mb-5"
            onClick={() => this.loadMore(1)}
          >
            Next ({page + 1})
          </button>
        ) : (
          ""
        )} */}
      </div>
    );
  }
}

export default Allpost;

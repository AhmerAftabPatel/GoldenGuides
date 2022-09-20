import React from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Card, Icon, Image } from "semantic-ui-react";
import { API } from "../constants";

/**
 * @author
 * @function CustomCard
 **/

const CustomCard = ({ i, post }) => {
  return (
    <Fragment>
      <Card key={i} style={{ height: "350px" }}>
        <Image
          style={{
            height: "200px",
            width: "100%",
            backgroundColor: "#0E2F56"
          }}
          src={`${API}/api/post/photo/${post._id}`}
          wrapped
          ui={false}
        />
        <Card.Content>
          <Card.Header>{post.title.substring(0, 20)}</Card.Header>
          <Card.Meta>
            <span className="date">
              {new Date(post.created).toDateString()}
            </span>
          </Card.Meta>
          <Card.Description>
          <p
              className="card-text"
              dangerouslySetInnerHTML={{
                __html: post.body ? post.body.substring(0, 200) + "..." : ""
              }}
            ></p>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
        <Link
              to={`/post/${post._id}`}
            >
          <p>
            <Icon name="arrow right" />
            Read more
          </p>
          </Link>
        </Card.Content>
      </Card>
      {/* <div className="col-md-4 mb-2" key={i}>
        <div className="card h-100">
          <div className="card-body">
            <img
              src={`/api/post/photo/${post._id}`}
              alt={post.title}
              onError={i => (i.target.src = `${Logo}`)}
              className="img-fluid mb-3"
              style={{
                height: "200px",
                width: "100%",
                backgroundColor: "#0E2F56"
              }}
            />
            <h5 className="card-title">{post.title}</h5>
            <p
              className="card-text"
              dangerouslySetInnerHTML={{
                __html: post.body ? post.body.substring(0, 200) + "..." : ""
              }}
            ></p>

            <br />
            <p className="font-italic mark">
              Posted by <Link to={`${posterId}`}>{posterName} </Link>
              on {new Date(post.created).toDateString()}
            </p>
            <Link
              to={`/post/${post._id}`}
              className="btn btn-raised btn-primary btn-sm"
            >
              Read more
            </Link>
          </div>
        </div>
      </div> */}
    </Fragment>
  );
};

export default CustomCard;

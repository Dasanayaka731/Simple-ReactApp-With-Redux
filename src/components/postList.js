import React from "react";
import { connect } from "react-redux";
import { selectPost } from "../actions/PostAction";
import { bindActionCreators } from "redux";

function PostList({ allPost, selectPost }) {
  if (!allPost) {
    return <h4 className="mt-4">Click the Button First!</h4>;
  }
  return (
    <div className=" text-center">
      <h3>Post List</h3>
      <ul className=" list-unstyled focus-ring" style={{ cursor: "pointer" }}>
        {allPost.map((post) => (
          <li
            className=" mt-3 border p-2 rounded"
            key={post.id}
            onClick={() => selectPost(post)}
          >
            Post {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    allPost: state.allPost,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ selectPost }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(PostList);

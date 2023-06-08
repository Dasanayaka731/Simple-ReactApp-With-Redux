import React from "react";
import { fetchPosts } from "../actions/PostAction";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
function ButtonComponent(props) {
  return (
    <div>
      <button className="btn btn-primary" onClick={() => props.fetchPosts()}>
        Click to Load Post
      </button>
    </div>
  );
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPosts: fetchPosts }, dispatch);
}

export default connect(null, matchDispatchToProps)(ButtonComponent);

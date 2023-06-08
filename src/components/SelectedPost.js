import React from "react";
import { connect } from "react-redux";

function SelectedPost(props) {
  const { selectedPost } = props;

  if (!selectedPost) {
    return <h4 className="mt-3">No Post Selected</h4>;
  }

  return (
    <div className=" border text-center rounded">
      <h5 className=" text-decoration-underline">Single Post</h5>
      <div>
        <ul className=" p-3">
          <li className=" list-unstyled">{selectedPost.dis}</li>
          {/* Add other properties as needed */}
        </ul>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    selectedPost: state.selectedPost,
  };
}

export default connect(mapStateToProps)(SelectedPost);

import React from "react";

import "./CSS/Post.css";

import Avatar from "@material-ui/core/Avatar";

function Post() {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt="{username}"
          src="/static/images/avatar/1.jpg"
        />
        <h3>Username</h3>
      </div>

      <img
        className="post__image"
        src="https://media.makeameme.org/created/CODE-MISTAKES-.jpg"
        alt=""
      />

      <h4 className="post__text">
        <strong>kimeualexis: </strong>Let's do this
      </h4>
    </div>
  );
}

export default Post;

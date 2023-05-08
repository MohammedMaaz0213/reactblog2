import React from "react";
import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        src="https://cdn.pixabay.com/photo/2012/08/27/14/19/mountains-55067__340.png"
        alt=""
        className="postImg"
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet.</span>
        <hr />
        <div className="postDate">1 hour ago</div>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nostrum
        consequatur quibusdam repellendus, animi perferendis magni veniam in
        reprehenderit dolorum., animi perferendis magni veniam in reprehenderit
        dolorum., animi perferendis magni veniam in reprehenderit dolorum.,
        animi perferendis magni veniam in reprehenderit dolorum., animi
        perferendis magni veniam in reprehenderit dolorum., animi perferendis
        magni veniam in reprehenderit dolorum.
      </p>
    </div>
  );
}

import React from "react";
import "./singlePost.css";
export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.unsplash.com/photo-1612441804231-77a36b284856?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bW91bnRhaW4lMjBsYW5kc2NhcGV8ZW58MHx8MHx8&w=1000&q=80"
          alt=""
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit.
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i class="singlePostIcon fa-sharp fa-solid fa-xmark"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Maaz</b>
          </span>
          <span className="singlePostDate"> 1 hr ago </span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
          error, id, animi fugit dignissimos necessitatibus neque dicta dolor in
          tempora suscipit. Voluptatibus, fuga aperiam quod deserunt porro
          suscipit facilis dolor, adipisci consectetur nisi ducimus
          necessitatibus distinctio saepe quos iste repellat fugit, blanditiis
          facere harum accusamus architecto voluptas tenetur vitae? Quibusdam
          necessitatibus itaque alias nesciunt inventore. Animi, vel culpa
          dolore saepe sit corporis ipsum tenetur ratione accusantium. Laborum
          praesentium vel illum, eaque sequi tenetur nam maxime error, vitae
          ipsa nihil cupiditate quasi laudantium natus reprehenderit amet
          delectus unde reiciendis! Obcaecati recusandae error dolor officiis ex
          molestiae iure nisi? Deleniti itaque quaerat, et dolor totam quod esse
          temporibus, quia, est cumque voluptates vero obcaecati consequuntur
          eum ab saepe mollitia corporis quibusdam fugiat. error, id, animi
          fugit dignissimos necessitatibus neque dicta dolor in tempora
          suscipit. Voluptatibus, fuga aperiam quod deserunt porro suscipit
          facilis dolor, adipisci consectetur nisi ducimus necessitatibus
          distinctio saepe quos iste repellat fugit, blanditiis facere harum
          accusamus architecto voluptas tenetur vitae? Quibusdam necessitatibus
          itaque alias nesciunt inventore. Animi, vel culpa dolore saepe sit
          corporis ipsum tenetur ratione accusantium. Laborum praesentium vel
          illum, eaque sequi tenetur nam maxime error, vitae ipsa nihil
          cupiditate quasi laudantium natus reprehenderit amet delectus unde
          reiciendis! Obcaecati recusandae error dolor officiis ex molestiae
          iure nisi? Deleniti itaque quaerat, et dolor totam quod esse
          temporibus, quia, est cumque voluptates vero obcaecati consequuntur
          eum ab saepe mollitia corporis quibusdam fugiat. error, id, animi
          fugit dignissimos necessitatibus neque dicta dolor in tempora
          suscipit. Voluptatibus, fuga aperiam quod deserunt porro suscipit
          facilis dolor, adipisci consectetur nisi ducimus necessitatibus
          distinctio saepe quos iste repellat fugit, blanditiis facere harum
          accusamus architecto voluptas tenetur vitae? Quibusdam necessitatibus
          itaque alias nesciunt inventore. Animi, vel culpa dolore saepe sit
          corporis ipsum tenetur ratione accusantium. Laborum praesentium vel
          illum, eaque sequi tenetur nam maxime error, vitae ipsa nihil
          cupiditate quasi laudantium natus reprehenderit amet delectus unde
          reiciendis! Obcaecati recusandae error dolor officiis ex molestiae
          iure nisi? Deleniti itaque quaerat, et dolor totam quod esse
          temporibus, quia, est cumque voluptates vero obcaecati consequuntur
          eum ab saepe mollitia corporis quibusdam fugiat.
        </p>
      </div>
    </div>
  );
}

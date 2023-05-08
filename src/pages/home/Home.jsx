import React, { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/Posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";
import axios from "axios";

export default function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/api/posts`).then((response) =>
      response.json().then((postInfo) => postInfo)
    );
  }, []);

  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </>
  );
}

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function BlogAll() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.posts);
      });
  }, []);
  console.log(posts);
  return (
    <>
      <h1>Trang Tin Tức</h1>
      <ul>
        {posts.map((item) => (
          <li key={item.id}>
            <Link to={"/blog/" + item.id}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default BlogAll;

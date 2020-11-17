import React from "react";
import { Spring } from "react-spring/renderprops";
import img1 from "../../../assests/blogs/aichatbot.PNG";
import Classes from "./Blog.module.css";

export default function Blog() {
  const blogs = [
    {
      id: 1,
      img: img1,
      alt: "AI-BOT-WITH-NODEJS",
      topic: "AI-BOT-WITH-NODEJS",
      link:
        "https://medium.com/swlh/building-an-ai-chat-bot-with-node-js-and-web-speech-api-93710b25114a?source=friends_link&sk=d040ce0ec7c3a77cd0a6f12445504485",
    },
  ];
  return (
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={{ delay: 500, duration: 500 }}
    >
      {(props) => (
        <div style={props} className={Classes.blog_content}>
          <div className={Classes.blogs}>
            <h2>Blogs</h2>
            <span>My Blogs</span>
          </div>
          <div className={Classes.content}>
            {blogs.map((blog) => {
              return (
                <div key={blog.id} className={Classes.box}>
                  <span className={Classes.topic}>
                    <span>{blog.topic}</span>
                  </span>
                  <img src={blog.img} alt={blog.alt} />
                  <a href={blog.link}>
                    <button className={Classes.blog_link}>View</button>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </Spring>
  );
}

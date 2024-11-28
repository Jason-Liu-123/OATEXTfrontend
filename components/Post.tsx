import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PostPage: React.FC = () => {
  const [post, setPost] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    alert(`Post submitted: ${post}`);
    setPost("");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Post Page</h1>
      <textarea
        value={post}
        onChange={(e) => setPost(e.target.value)}
        placeholder="Share your thought..."
        rows={5}
        style={{ width: "80%", marginBottom: "10px" }}
      ></textarea>
      <br />

      <button onClick={handleSubmit} style={{ marginRight: "10px" }}>
        Submit Post
      </button>

      <button onClick={() => navigate("/")} style={{ marginTop: "20px" }}>
        Back to Main Page
      </button>

    </div>
  );
};

export default PostPage;

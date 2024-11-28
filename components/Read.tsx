import React from "react";
import { useNavigate } from "react-router-dom";

const ReadPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Read Page</h1>
      <p>
        This is where readers can read text. You can add dynamic content here in the future!
      </p>
      <button onClick={() => navigate("/")} style={{ marginTop: "20px" }}>
        Back to Main Page
      </button>
    </div>
  );
};

export default ReadPage;

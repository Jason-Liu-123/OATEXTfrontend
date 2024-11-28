import React from "react";
import { useNavigate } from "react-router-dom";
import images from "../img/images";
import Line from "../assets/Line";
import Rectangle from "../assets/Rectangle";

const MainPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Header Section */}
      <header
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          src={images.logo}
          alt="Logo"
          style={{
            height: "50px",
            marginRight: "10px",
          }}
        />
        <h1 style={{ margin: 0 }}>OATEXT</h1>
      </header>

      {/* Lines */}
      <Line width="80%" height="2px" color="#000" margin="70px auto" />
      <Line width="80%" height="2px" color="#000" margin="650px auto" />

      {/* Scrollable Rectangle */}
      <div
        style={{
          position: "absolute", // Center the rectangle
          top: "48%",
          left: "40%",
          transform: "translate(-50%, -50%)", // Perfect centering
          width: "900px", // Outer rectangle width
          height: "600px", // Outer rectangle height
          backgroundColor: "rgba(255, 255, 255, 1.0)", // Light gray background
          overflowY: "auto", 
          overflowX: "hidden",
          padding: "10px",
          zIndex: 2, // Ensure it appears above other elements
        }}
      >
        {Array.from({ length: 20 }).map((_, index) => (
          <Rectangle
            key={index}
            width="100%"
            height="200px"
            backgroundColor={`rgba(255, 255, 255, 1.0)`}
            border="0px solid #ddd"
            borderRadius="5px"
            hasBottomLine={true}
          >
            <p style={{ margin: 0, color: "#000" }}>Author {index + 1}</p>
          </Rectangle>
          
        ))}
      </div>

      {/* Buttons Section */}
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          width: "80%",
        }}
      >
        {/* Main Button */}
        <div
          style={{
            display: "inline-block",
            cursor: "pointer",
            borderRadius: "10px",
            overflow: "hidden",
            width: "65px",
            height: "65px",
          }}
        >
          <img
            src={images.MainS}
            alt="Library"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "fill",
            }}
          />
        </div>

        {/* Library Button */}
        <div
          onClick={() => navigate("/library")}
          style={{
            display: "inline-block",
            cursor: "pointer",
            borderRadius: "10px",
            overflow: "hidden",
            width: "65px",
            height: "65px",
          }}
        >
          <img
            src={images.LibraryU}
            alt="Library"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "fill",
            }}
          />
        </div>

        {/* Post Button */}
        <div
          onClick={() => navigate("/post")}
          style={{
            display: "inline-block",
            cursor: "pointer",
            borderRadius: "10px",
            overflow: "hidden",
            width: "65px",
            height: "65px",
          }}
        >
          <img
            src={images.Post}
            alt="Post"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "fill",
            }}
          />
        </div>

        {/* Me Button */}
        <div
          onClick={() => navigate("/me")}
          style={{
            display: "inline-block",
            cursor: "pointer",
            borderRadius: "10px",
            overflow: "hidden",
            width: "65px",
            height: "65px",
          }}
        >
          <img
            src={images.MeU}
            alt="Me"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "fill",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default MainPage;

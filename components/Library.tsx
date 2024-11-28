import React from "react";
import { useNavigate } from "react-router-dom";
import images from "../img/images";
import Line from "../assets/Line";

const LibraryPage: React.FC = () => {
  const navigate = useNavigate();

  // Shared Button Style
  const imageButtonStyle = {
    display: "inline-block",
    cursor: "pointer",
    borderRadius: "10px",
    overflow: "hidden",
    width: "65px",
    height: "65px",
  };

  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
      }}
    >

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

      {/*BG image*/}
      <img
        src={images.oat}
        alt="Decorative"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      />

      <Line width="80%" height="2px" color="#000" margin="70px auto" />
      <Line width="80%" height="2px" color="#000" margin="650px auto" />
      

      {/*Buttons*/}
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

        <div
          onClick={() => navigate("/")}
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
            src={images.MainU}
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
            src={images.LibraryS}
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

export default LibraryPage;

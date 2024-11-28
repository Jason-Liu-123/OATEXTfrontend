import React from "react";

interface LineProps {
  width?: string; // Width of the line (default: "100%")
  height?: string; // Height of the line (default: "2px")
  color?: string; // Color of the line (default: "#ccc")
  margin?: string; // Margin around the line (default: "10px 0")
  orientation?: "horizontal" | "vertical"; // Orientation of the line (default: "horizontal")
}

const Line: React.FC<LineProps> = ({
  width = "100%",
  height = "2px",
  color = "#ccc",
  margin = "10px 0",
  orientation = "horizontal",
}) => {
  const isHorizontal = orientation === "horizontal";

  return (
    <div
      style={{
        width: isHorizontal ? width : height, // Horizontal: Use width; Vertical: Use height
        height: isHorizontal ? height : width, // Horizontal: Use height; Vertical: Use width
        backgroundColor: color, // Set the color of the line
        margin, // Set the margin
      }}
    ></div>
  );
};

export default Line;

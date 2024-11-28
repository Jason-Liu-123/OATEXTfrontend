import React from "react";

interface RectangleProps {
  width: string;
  height: string;
  backgroundColor?: string;
  border?: string;
  borderRadius?: string;
  hasBottomLine?: boolean;
  children?: React.ReactNode;
}

const Rectangle: React.FC<RectangleProps> = ({
  width,
  height,
  backgroundColor = "rgba(255, 255, 255, 0.8)",
  border = "1px solid #ccc",
  borderRadius = "5px",
  hasBottomLine = false,
  children,
}) => {
  return (
    <div
      style={{
        width,
        height,
        backgroundColor,
        border,
        borderRadius,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "10px",
        boxSizing: "border-box",
        position: "relative", // Add relative positioning
      }}
    >
      {children}
      {/* Bottom Line */}
      {hasBottomLine && (
        <div
          style={{
            width: "100%",
            height: "2px",
            backgroundColor: "#000000", // Line color
            position: "absolute", // Position relative to this Rectangle
            bottom: 0, // Position at the bottom
            left: 0, // Span full width
          }}
        ></div>
      )}
    </div>
  );
};

export default Rectangle;

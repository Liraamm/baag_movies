import React from "react";

const NotFoundPage = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <img
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
        src="https://media.istockphoto.com/id/1142986365/vector/error-with-glitch-effect-on-screen-error-404-page-not-found-flat-design-modern-vector.jpg?s=612x612&w=0&k=20&c=E0Y1GZsaRrEk-a2eW49WKCjRFd9SS1MitZ6Vly1HAs8="
        alt=""
      />
    </div>
  );
};

export default NotFoundPage;

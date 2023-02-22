import React from "react";

const Avatar = ({ src, alt, width, height }) => (
  <img
    src={src}
    alt={alt}
    style={{ width: `${width}px`, height: `${height}px`, borderRadius: "50%" }}
  />
);

export default Avatar;

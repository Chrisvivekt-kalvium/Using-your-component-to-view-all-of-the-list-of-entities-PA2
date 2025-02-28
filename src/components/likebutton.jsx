import { useState } from "react";

function likeButton({ isLiked }) {
  const [liked, setLiked] = useState(isLiked);

  return (
    <button
      onClick={() => setLiked(!liked)}
      style={{
        backgroundColor: liked ? "red" : "gray",
        color: "white",
        padding: "8px 12px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      {liked ? "Liked " : "Like "}
    </button>
  );
}

export default likeButton;
import LikeButton from "./likeButton";

function postCard({ profileImage, username, content, isLiked }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        borderRadius: "10px",
        padding: "15px",
        margin: "10px",
        width: "300px",
        height: "180px",
        boxShadow: "2px 2px 10px rgb(109, 109, 109)",
        backgroundColor: "rgb(82, 82, 82)",
        gap: "10px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
        <img
          src={profileImage}
          alt="Profile"
          style={{ width: "40px", height: "40px", borderRadius: "50%", marginRight: "10px" }}
        />
        <strong>{username}</strong>
      </div>
      <p>{content}</p>
      <LikeButton isLiked={isLiked} />
    </div>
  );
}

export default postCard;
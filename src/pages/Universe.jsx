import myImage from "../assets/images/universe.jpg";

function ImagePage() {
  return (
    <div className="section">
      <h2 className="section-title">Universe in a Box</h2>

      <img
        src={myImage}
        alt="Project"
        style={{
          maxWidth: "100%",
          borderRadius: "10px",
          marginTop: "1rem"
        }}
      />
    </div>
  );
}

export default ImagePage;
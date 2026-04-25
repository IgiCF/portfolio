import myGif from "../assets/images/mii.gif";

function Home() {
  return (
    <div className="section">
      <div className="home-content">
        
        <div className="home-text">
          <h1>Hi, I’m Isaac</h1>
          <p>I study Digital Media at the University of Central Florida. I enjoy creating art and also singing.</p>
        </div>

        <div className="home-image">
          <img src={myGif} alt="mii" />
        </div>

      </div>
    </div>
  );
}

export default Home;
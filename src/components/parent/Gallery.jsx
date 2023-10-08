import Header from "../child/header/Header.jsx";
// import First from "../child/gallery/First.jsx";
import Second from "../child/gallery/Second.jsx";
import Footer from "../child/footer/Footer.jsx";

import "../child/gallery/Style.css";
const Gallery = () => {
  return (
    <div className="App_gallery">
      {/* <First /> */}
			<Header />
      <Second />
			<Footer />
    </div>
  );
};

export default Gallery;

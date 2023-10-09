import Navigation from "../child/navigation_bar/Navigation_Bar.jsx"
import Second from "../child/gallery/Second.jsx";
import Footer from "../child/footer/Footer.jsx";

import "../child/gallery/Style.css";
const Gallery = () => {
  return (
    <div className="App_gallery">
      {/* <First /> */}
			<Navigation />
      <Second />
			<Footer />
    </div>
  );
};

export default Gallery;

import Header from "../child/header/Header.jsx";
import First from "../child/intro/First.jsx";
import Second from "../child/intro/Second.jsx";
import Third from "../child/intro/Third.jsx";
import Fourth from "../child/intro/Fourth.jsx";
import Five from "../child/intro/Five.jsx";
import Six from "../child/intro/Six.jsx";
import Footer from "../child/footer/Footer.jsx"
const Intro = () => {
  return (
    <div>
			<Header/>
      <First/>
      <Second/>
      <Third/>
      <Fourth/>
      <Five/>
      <Six/>
			<Footer/>
    </div>
  );
};

export default Intro;

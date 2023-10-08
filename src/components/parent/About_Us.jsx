import First from "../child/about_us/1st.jsx";
import Second from "../child/about_us/2nd.jsx";
import Third from "../child/about_us/3rd.jsx";
import Footer from "../child/footer/Footer.jsx";
import Header from "../child/header/Header.jsx";

import "../child/about_us/Style.css"

const AboutUs = () => {
  return (
    <div>
			<Header/>
      <First />
      <Second />
      <Third />
			<Footer/>
    </div>
  );
};

export default AboutUs;
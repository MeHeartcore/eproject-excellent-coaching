


import Second from "../child/about_us/2nd.jsx";
import Third from "../child/about_us/3rd.jsx";
import Footer from "../child/footer/Footer.jsx";
import NavigationBar from "../child/navigation_bar/Navigation_Bar.jsx"

import "../child/about_us/Style.css"

const AboutUs = () => {
	return (
		<div>
			<NavigationBar />
			<div id="about-us-customize">
				<h1>BURN YOURSELF ON MOMENTS</h1>
			</div>
			<div className="second-container">
				<Second />
			</div>
			<Third />
			<Footer />
		</div>
	);
};

export default AboutUs;
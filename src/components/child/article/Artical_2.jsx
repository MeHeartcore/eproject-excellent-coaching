import { Container } from "react-bootstrap"
import "./Artical.css"
import Artical2 from "../../../assets/images/img-blog/yoga.jpg"
import Navigation from "../navigation_bar/Navigation_Bar.jsx"
import Footer from "../footer/Footer.jsx"

function Artical_2() {
    return (
			
        <div>
					<Navigation/>
            <Container className="artical-all-1">
                <div className="img1">
                    <img className="img1-1" src={Artical2} alt="" />
                </div>
                <div>
                    <h1>The Importance Of Morning Yoga For Skin And Hair Health</h1>
                </div>
                <div className="artical-text-1">
                    <p>
                        <h3>1.The Importance Of Morning Yoga For Skin And Hair Health</h3>
                        Morning yoga poses stimulate blood circulation throughout the body, including the face and scalp. This enhanced blood flow delivers vital nutrients and oxygen to the skin cells and hair follicles, promoting their health and nourishment.

                        <h3>2. Detoxification</h3>
                        Yoga poses combined with deep breathing techniques help eliminate toxins from the body. By removing toxins, your skin becomes clearer, and your hair follicles are better able to grow and regenerate.
                        <h3>Stress Reduction</h3>
                        Stress is a common culprit behind skin and hair problems. Morning yoga helps calm the mind, reduce stress levels, and balance hormone production. This can lead to improved skin tone, reduced acne breakouts, and healthier hair growth.
                        <h3>Improved Sleep Quality</h3>
                        Regular morning yoga can help regulate your sleep patterns, ensuring you get a restful night sleep. Quality sleep is essential for repairing skin cells and promoting healthy hair growth.
                    </p>
                </div>
            </Container>
						<Footer/>
        </div>
    )
}

export default Artical_2

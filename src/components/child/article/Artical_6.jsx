import { Container } from "react-bootstrap"
import "./Artical.css"

import Navigation from "../navigation_bar/Navigation_Bar.jsx"
import Footer from "../footer/Footer.jsx"
import Artical6 from "../../../assets/images/img-blog/The Beginner is Guide to Weight Lifting.jpg"
function Artical_6() {
    return (
        <div>
					<Navigation/>
            <Container className="artical-all-1">
                <div className="img1">
                    <img className="img1-1" src={Artical6} alt="" />
                </div>
                <div>
                    <h1>The Beginner is Guide to Weight Lifting.</h1>
                </div>
                <div className="artical-text-1">
                    <p>
                        Whether your goal is to build muscle mass or achieve a fitter, more toned body, lifting weights can help you get there.
                    </p>
                    <br></br>
                    <br></br>
                    Weight training, also known as resistance or strength training, builds lean, stronger muscles, strengthens your bones and joints, and can help keep your metabolism in a healthy state — meaning you’ll burn more calories even when you’re resting.
                    <br></br>
                    <br></br>
                    And the benefits of lifting weights aren’t just for young people. Weight training as we age can help fight the loss of muscle mass and mobility, as well as improve psychological well-being.
                    <br></br>
                    <br></br>
                    So even if you’ve never done any kind of weight training before — it’s never too late to start!
                    <br></br>
                    <br></br>
                    What’s more, you don’t even need to belong to a gym. You can simply use your body weight for many exercises or use free weights, resistance bands, or other home fitness equipment to get results
                    <br></br>
                    <br></br>
                    This article will walk you through how to get started with weight training and provide suggested exercises and training advice for beginners.
                    <h3>What do you need to start weight training?</h3>
                    If you’ve never lifted weights before, consider starting out with the help of a certified personal trainer. They’ll be able to teach you the proper form for specific exercises and set up a strength training program tailored to your needs.
                    <br></br>
                    <br></br>
                    Many gyms or fitness centers offer introductory training sessions at little or no cost, or they have trainers available if you have questions. Additionally, there are many personal trainers who train clients online, through video platforms.
                    <br></br>
                    <br></br>
                    While most gyms have a combination of resistance machines and free weights, such as dumbbells and barbells, you can also get a comprehensive weight training workout at home with basic equipment.
                    <h3>Equipment options</h3>
                    You don’t necessarily need weights to build lean muscle mass and tone your body. As an example, for some strength training exercises, like pushups or lunges, you only need your body weight to provide resistance.
                    <br></br>
                    <br></br>
                    You can expand your at-home workout options with dumbbells. A beginner’s set of adjustable weight dumbbells starts at about $50, but the price increases as you add more weight.
                    <br></br>
                    <br></br>
                    Kettlebells, which are weighted balls with handles, are another popular option. Many kettlebell exercises work several muscle groups at once, which makes them effective for a full-body workout, especially if you’re short on time.
                    <br></br>
                    <br></br>
                    Resistance bands are also a helpful addition to your workout equipment. These color-coded elastic bands provide varying levels of resistance when pulled and stretched.
                    <br></br>
                    <br></br>
                    A set of resistance bands can be purchased for $10 to $60. Because they’re light and portable, you can take them with you when you travel.


                </div>
            </Container>
						<Footer/>
        </div>
    )
}

export default Artical_6

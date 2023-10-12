import { Container } from "react-bootstrap"
import artical1 from "../../../assets/images/img-blog/Benefits of joining.jpg"

import Navigation from "../navigation_bar/Navigation_Bar.jsx"
import Footer from "../footer/Footer.jsx"

import "./Artical.css"


function Artical_1() {
    return (
        <div>
						<Navigation/>
            <Container className="artical-all-1">
                <div className="img1" >
                    <img className="img1-1" src={artical1} alt="" />
                </div>
                <div>
                    <h1>
                        Benefits of joining a gym - 20 reasons to sign up
                    </h1>
                </div>

                <div className="artical-text-1">
                    <p>
                        <h3>1. Improved health</h3>

                        Let’s start with the obvious. When you regularly attend a gym and are smashing the cardio and weights, you’re definitely going to see an improvement in your overall health and wellbeing.
                        <br></br>
                        <br></br>
                        This includes a stronger, healthier heart and set of lungs and improved muscle strength – great if you want to live longe
                        <br></br>
                        <br></br>
                        Working out regularly can also reduce your risk of injury and illness as well as preventing osteoporosis (bone weakness/loss).
                        <br></br>
                        <br></br>
                        Your efforts may also lower your risk of heart disease, high blood pressure, high cholesterol, and diabetes (type II).
                        <br></br>
                        <br></br>
                        Additionally, lifting weights regularly can be a more effective way to lose weight than only doing cardio such as running, cycling, or swimming
                        <br></br>
                        <br></br>
                        There are three main reasons for this.
                        <br></br>
                        <br></br>
                        Your metabolism stays higher for longer after a weights session
                        Muscle regeneration. Your body uses calories to rebuild your muscles after a weights session (when your muscles ache)
                        BMR. Once you have stronger muscles, you use more calories to feed them
                        <br></br>
                        <h3>2. Equipment and expert knowledge</h3>
                        Most gyms are going to be full of everything you’ll ever need for your workouts. From rowing machines to saunas, treadmills to free weights, whatever fitness goals you want to achieve you’ll find the equipment to get you there at the gym
                        <br></br>
                        <br></br>
                        Additionally, there should always be a qualified instructor in your gym to help you use the machines and exercise correctly. Priceless when you’re just starting out.
                        <br></br>
                        <br></br>
                        Regardless of the equipment and space you have at home, you’re going to struggle to compete with the resources and expertise of any gym.
                        <br></br>
                        <h3>3. Classes & community</h3>
                        Then, of course, there are the classes and a community of people all with the same intentions as you. Getting fit
                        <br></br>
                        <br></br>
                        Spinning, Yoga, Crossfit, you name it…
                        <br></br>
                        <br></br>
                        Most gyms offer loads of classes these days at different times of the day to suit your needs. They can be hugely motivating and help you move closer to your health goals more quickly.
                        <br></br>
                        <br></br>
                        As adults with jobs and kids, it’s often difficult to expand our social circle outside of the usual places; work, school, the local pub
                        <br></br>
                        <br></br>
                        However, hitting the gym regularly will allow you to make friends with a variety of different people with similar health goals to you. Having friends to meet and work out with can be one of the most motivating factors in reaching your health goals.

                    </p>
                </div>

            </Container>
					<Footer/>
        </div>
    )
}

export default Artical_1

import './Style.css';
import news5 from '../../../assets/images/content_of_news/news5.jpg';


import { Container, Row, Col } from 'react-bootstrap';

import Navigation from "../navigation_bar/Navigation_Bar.jsx"
import Footer from "../footer/Footer.jsx"

const News5 = () => {
    return (
        <Container fluid className='gx-0'>
					<Row className='gx-0'>
						<Col>
							<Navigation /> 
						</Col>
					</Row>
					<Row className='gx-0'>
						<Col>
							<div className='content'>
									<div className='content-inner'>
											<div className='img'>
													<img src={news5} alt="img" />
											</div>
											<h1>Beth Van Hove sheds the pounds and gains a world record.</h1>
											<br></br>
											<p>
											Beth Van Hove is fairly easy to spot in the weight lifting area of the sprawling Wilson’s Fitness facility on Forum Boulevard. She’s 54, so many of the patrons are half her age, and they’re predominantly male. And of all those pumping, lifting, and curling on a busy Monday night, she’s the only woman standing on the dead lift platform.
													<br></br>
													<br></br>
													<h2>Intense Focus: Beth is Powerful Lifts with Precision and Determination</h2>
													Beth’s focus is intense as she mentally rehearses the lift she is about to attempt. She stoops, grasps the bar bell with a flat back and eyes ahead, and, after a pause, she lifts with fierce effort. Her brow furrows as she stands, the bar bell resting at her thighs. She exhales forcefully, and then reverses the series to carefully bring the weight back to the floor. She completes 10 reps, her focus never breaking.
													<br></br>
													<br></br>
													Beth also believes that daily meal tracking and scheduling workouts on your calendar can help keep you accountable, and mixing up your routine can help avoid boredom and plateaus. But more than anything, she encourages people to just get up and get moving.
													<br></br>
													<br></br>
													<h2>Support and Pride: Bet is Dynamic Warm-up and the Unwavering Support of Her Husband Greg </h2>
													“Right now, she’s warming up with 135 pounds,” says Danny Wade. Danny, a personal trainer and powerlifter in his 20s, has been Beth’s trainer for the last two years. “She’s trying to get the blood flowing.”
													<br></br>
													<br></br>
													Beth’s husband, Greg, strides over, sweaty from his own workout, to watch and help Danny move weights on and off the barbell. He seems at home in this helping capacity and knows just what to do. His pride in Beth’s powerlifting ability is evident.
													<br />
													<br />
													<h2>From Training to Triumph: Beth is Powerlifting Journey and Record-Breaking Achievements</h2>
													Danny gradually increases the amount of weight on the barbell to 235 pounds while Beth decreases her reps to one or two. This more closely resembles a round of competition in powerlifting, a sport in which the athlete attempts to lift as much weight as possible in three exercises: squat, bench press, and dead lift.
													<br></br><br></br>Beth got into the sport in March 2014 and entered her first competition just four months later, where she placed in her age and weight class. She currently holds multiple records in all three events in the American Drug Free Powerlifting Federation, including a world record she set in 2017 for deadlifting 254.1 pounds.
							
											</p>
									</div>
							</div>
						</Col>
					</Row>
					<Row className='gx-0'>
						<Col>
							<Footer /> 
						</Col>
					</Row>
				</Container>
    )
}

export default News5
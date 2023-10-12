import './Style.css';
import news6 from '../../../assets/images/content_of_news/news6.png';

import { Container, Row, Col } from 'react-bootstrap';

import Navigation from "../navigation_bar/Navigation_Bar.jsx"
import Footer from "../footer/Footer.jsx"

const News5 = () => {
    return (
        <Container fluid className='gx-0'>
					<Row className='gx-0'>
						<Col>
							<Navigation/>
						</Col>
					</Row>
					<Row className='gx-0'>
						<Col>
							<div className='content'>
									<div className='content-inner'>
											<div className='img'>
													<img src={news6} alt="img" />
											</div>
											<h1>FIGHTCAMP RELEASES 4 NEW WORKOUT COLLECTIONS.</h1>
											<br></br>
											<p>
											FightCamp launches 4 NEW workout collections: Strength, Conditioning, Recovery & Stretch. More content to get you (and keep you) in fighting shape!
													<br></br>
													<br></br>
													<h2>Strength</h2>
													Description: Bodyweight strength workouts to build muscle and power.
													<br></br>
													<br></br>
													Benefits: Strength training workouts not only are important for building muscle and tone, but also increase the range of motion and mobility of your joints. An added benefit of strength training is that it also helps protect you from injury.
													<br></br>
													<br></br>
													<h2>Conditioning</h2>
													Description: Cardio-based workouts to build speed, endurance, and stamina.
													<br></br>
													<br></br>
													Benefits: Conditioning workouts help with endurance, flexibility, and overall athletic performance. They help with developing more speed, balance, and coordination in addition to enhancing your overall training.
													<br></br>
													<br></br>
													<h2>Recovery</h2>
													Description: Dedicated sessions for your off days to help your body recover to perform at its peak.
													<br></br>
													<br></br>
													Benefits: Recovery workouts are essential for any athlete is training. They allow your muscles and body time to rest and rebuild so you can return to your training stronger.
													<br></br>
													<br></br>
													<h2>Post-Workout Stretch</h2>
													Description: Stretching sessions to increase flexibility.
													<br></br>
													<br></br>
													Benefits: Pre- and especially post-workout stretching is great for mobility and flexibility performance. Following your workout, focus on stretching the muscles you just trained to keep the range of motion in your joints and prevent them from becoming tight.
													<br></br>
													<br></br>
							
							
											</p>
									</div>
							</div>
						</Col>
					</Row>
					<Row className='gx-0'>
						<Col>
							<Footer/>
						</Col>
					</Row>
				</Container>
    )
}

export default News5
import './Style.css';
import news1 from '../../../assets/images/content_of_news/news1.jpg';

import { Container, Row, Col } from 'react-bootstrap';

import Navigation from "../navigation_bar/Navigation_Bar.jsx"
import Footer from "../footer/Footer.jsx"

const News1 = () => {
    return (
        <div>
					<Container fluid className="gx-0">
						<Row className="gx-0">
							<Col><Navigation/></Col>
							</Row>
            <Row className='gx-0'>
							<Col className='content'>
								<div className='content-inner'>
										<div className='img'>
												<img src={news1} alt="img" />
										</div>
										<h1>“Nothing Can Stop Me” Arnold Schwarzenegger ‘Pumped’ Up To Train Post-Elbow Surgery</h1>
										<br></br>
										<p>
												As one of the greatest bodybuilders to ever grace the Mr. Olympia stage, Schwarzenegger is accustomed to facing adversity. In the golden era, Schwarzenegger’s combination of aesthetics, mass, and stature set him apart from his peers. He racked up a total of seven Mr. Olympia titles before ending his career. In that time, he got the better of legends of bodybuilding like Sergio Oliva, Frank Zane, and Franco Columbu.
												<br></br>
												<br></br>
												<h2>Arnold Schwarzenegger Gives Statement on Surgery, Bodybuilding Community React to His Workout </h2>
												 While he’s made time for government and acting roles, Schwarzenegger’s dedication to fitness is what drives him today. In addition to hosting the annual Arnold Sports Festival, Schwarzenegger runs and publishes a daily newsletter/podcast called Arnold’s Pump Club, a community he has created from the ground up that focuses on health, wellness, and longevity.
												 <br></br>
												 <br></br>
												<h2>“Comebacks are a part of life. I was pumped to get back into the gym after my little elbow surgery.”</h2>
												In early September, it was revealed by TMZ that Schwarzenegger had undergone nerve surgery on his elbow. With a little over a week to heal privately, the bodybuilding legend is now back at Gold’s Gym Venice testing his strength despite still recovering from the operation.
												<br />
												<br />
												<h2>“No Surgery could keep us from the gym bro…Yeah buddy” </h2>
												This wasn’t The Terminator star’s first health update of 2023. In early September, Schwarzenegger revealed a previously unseen video that documented his remarkable recovery from a life-threatening third open-heart surgery.
								
												<br></br><br></br>The “Austrian Oak” explained that doctors made a mistake and punctured a hole in his heart wall, which caused internal bleeding. Over time and with the help of his friends, Schwarzenegger made a full recovery.
												<br></br><br></br>Pushing through the pain, Arnold Schwarzenegger performed reps on the overhead press machine before commenting on his current recovery timeline.
												<br></br><br></br>Suffice it to say, Schwarzenegger understands how to overcome tragic health scares, so his recent elbow surgery was a walk in the park. At 76 years old, the acting icon remains one of the most talked about names in bodybuilding and continues to inspire fans and competitors alike.
										</p>
								</div>
							</Col>
						</Row>
						<Row className='gx-0'><Col><Footer/></Col></Row>
						</Container>
        </div>
    )
}

export default News1
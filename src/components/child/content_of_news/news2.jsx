import './Style.css';
import news2 from '../../../assets/images/content_of_news/news2.jpg';



import Navigation from "../navigation_bar/Navigation_Bar.jsx"
import Footer from "../footer/Footer.jsx"
import { Container, Row, Col } from 'react-bootstrap';

const News2 = () => {
    return (
        <Container className='gx-0' fluid>
					<Row className='gx-0'>
						<Col><Navigation/></Col>
					</Row>
					<Row className='gx-0'>
						<Col>
							<div className='content'>
									<div className='content-inner'>
											<div className='img'>
													<img src={news2} alt="img" />
											</div>
											<h1>
													COME PRACTICE
													NOT
													BEING PERFECT
													WITH US</h1>
											<br></br>
											<p>
													Harmony Studios opened our doors in Lake county over 15 years ago. Since then, we have had thousands of NEW students like you walk through our doors. Our studio features two spaces, Zen room (non-heated) and Radiant room, solely for hot yoga.
													<br></br>
													<br></br>
													<h2>Harmony Studios Offers Hot Yoga and Non-Heated Classes</h2>
													Yoga is a 5,000-year-old scientific system designed to empower health, happiness and a greater sense of self. The word yoga means “union,” implying the oneness of mind, body and spirit. Not a religion, yoga supports and enhances all backgrounds.
													Through various postures and breathing, you align your body structure, strengthen and lengthen your muscles, relax your mind and oxygenate your blood to improve circulation, promote flexibility and release tension.
													<br></br>
													<br></br>
													<h2>Get started today by taking advantage of one of our new student specials! </h2>
													We offer over 60 classes, 7 days a week from the hours of 6AM to 730PM. We also offer over 20 livestream classes per week, in addition to workshops, pop ups, outdoor yoga and retreats.
													<br />
													<br />
													<h2> I love the atmosphere of this studio - it calms me down every time I walk through the front door! Everyone is so welcoming and super nice, and all the instructors are very good and helpful!</h2>
													Like anything, starting a new practice can be intimidating. However, Harmony Yoga Studios and its instructors are always available to help you begin your practice and modify your poses.
													<br></br><br></br>Yoga practice benefits all, including pregnant women, children, youth and adults of all ages and abilities.
							
											</p>
									</div>
							</div>
						</Col>
					</Row>
					<Row className='gx-0'>
						<Col><Footer/></Col>
					</Row>
				</Container>
    )
}

export default News2
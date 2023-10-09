import {
	Container,
	Row,
	Col,
	Button
} from "react-bootstrap"

import Navigation from "../child/navigation_bar/Navigation_Bar.jsx"
import Footer from "../child/footer/Footer.jsx"

import Cycling from "../../assets/images/class_course/cycling.png"
import Gym from "../../assets/images/class_course/gym.png"
import Yoga from "../../assets/images/class_course/yoga.png"
import Zumba from "../../assets/images/class_course/zumba.png"
import Demo from "../../assets/images/gallery/11.jpg"


import "../child/class_course/Class.css"
import { Link } from "react-router-dom"

function Class() {
	return (
		<div className="class-container">
			<Container fluid className="gx-0">
				<Row className="gx-0">
					<Col>
						<div>
							<Navigation />
						</div>
					</Col>
				</Row>
				<Row className="gx-0">
					<Col id="class-intro-image">
						<div>
							<h1>WELCOME TO OUR CLASSES</h1>
						</div>
					</Col>
				</Row>
				<Row className="gx-0">
					<Col className="insert-space">
					</Col>
				</Row>
				<Row className="gx-0">
					<Col id="interested-course">
						{/* <h1>INTERESTED COURSE</h1> */}
						<div id="interested-course-intro">
							<h2>Enthusiasm</h2>
							<div>
								<p>
								With the large participation of students, we always aim for simple, effective exercises with enthusiastic guidance from coaches.
								</p>
								<p>
								As time passes, students pay special attention to each course that they are most interested in and enjoy today:
								</p>
							</div>
						</div>
						<div id="interested-course-list">
							<div className="interested-course-content">
								<div>
									<h3>
										<div>C</div>
										<div>Y</div>
										<div>C</div>
										<div>L</div>
										<div>I</div>
										<div>N</div>
										<div>G</div>
									</h3>
									<div>
										<img src={Cycling} alt="cycling" />
										<div><Button
											as={Link}
											to="/cycling"
											className="interested-course-button">Join now</Button></div>
									</div>
								</div>
								<div>
									<h3>
										<div>G</div>
										<div>Y</div>
										<div>M</div>
									</h3>
									<div>
										<img src={Gym} alt="gym" />
										<div><Button
											as={Link}
											to="/gym"
											className="interested-course-button">Join now</Button></div>
									</div>
								</div>
							</div>

							<div className="interested-course-content">
								<div>
									<h3>
										<div>Y</div>
										<div>O</div>
										<div>G</div>
										<div>A</div>
									</h3>
									<div>
										<img src={Yoga} alt="yoga" />
										<div><Button
											as={Link}
											to="/yoga"
											className="interested-course-button">Join now</Button></div>
									</div>
								</div>
								<div>
									<h3>
										<div>Z</div>
										<div>U</div>
										<div>M</div>
										<div>B</div>
										<div>A</div>
									</h3>
									<div>
										<img src={Zumba} alt="zumba" />
										<div><Button
											as={Link}
											to="/zumba"
											className="interested-course-button">Join now</Button></div>
									</div>
								</div>
							</div>
						</div>
					</Col>
				</Row>
				<Row className="gx-0">
					<Col className="insert-space">
					</Col>
				</Row>
				<Row className="gx-0">
					<Col id="course-list">
						<div id="course-list-heading">
							<h2>All Courses</h2>
						</div>
						<div id="course-list-content">
							<div>
								<img src={Demo} alt="demo" />
								<Button as={Link}
											to="/gym" className="course-button">GYM</Button>
								<p>Members: 50+</p>
							</div>
							<div>
								<img src={Demo} alt="demo" />
								<Button as={Link}
											to="/yoga" className="course-button">YOGA</Button>
								<p>Members: 60+</p>
							</div>
							<div>
								<img src={Demo} alt="demo" />
								<Button as={Link}
											to="/zumba" className="course-button">ZUMBA</Button>
								<p>Members: 20+</p>
							</div>
							<div>
								<img src={Demo} alt="demo" />
								<Button as={Link}
											to="/cycling" className="course-button">CYCLING</Button>
								<p>Members: 30+</p>
							</div>
							<div>
								<img src={Demo} alt="demo" />
								<Button as={Link}
											to="/hiit" className="course-button">HIIT</Button>
								<p>Members: 20+</p>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
			<Footer/>
		</div>
	)
}

export default Class
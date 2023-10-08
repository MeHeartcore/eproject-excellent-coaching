import Header from "../child/header/Header"
import Footer from "../child/footer/Footer"
import {
	Container,
	Row,
	Col,
	Button
} from "react-bootstrap"
import {Link, Routes, Route} from "react-router-dom"
import Course from "./Course.jsx"

import Yoga from "../../assets/images/blog/blog3.jpg"
import Zumba from "../../assets/images/blog/blog4.jpg"
import Gym from "../../assets/images/blog/blog6.png"

import "../child/class_course/Class.css"

function Class() {
	return (
		<div className="class-container">
			<Routes>
				<Route path="/course" element={<Course/>}/>
			</Routes>

			<Header />
			<Container fluid className="gx-0">
				<Row className="gx-0">
					<Col className="interested-class">
						<div>
							<h1>OUR INTERESTED CLASSES</h1>
						</div>
						<div className="list">
							<div>
								<img src={Yoga} alt="yoga" />
								<div>
									<h3>YOGA</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
									<Button className="button-course"
										as={Link}
										to="/course">Join us</Button>
								</div>
							</div>

							<div>
								<img src={Zumba} alt="zumba" />
								<div>
									<h3>ZUMBA</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
									<Button className="button-course">Join us</Button>
								</div>
							</div>

							<div>
								<img src={Gym} alt="gym" />
								<div>
									<h3>GYM</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
									<Button className="button-course">Join us</Button>
								</div>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
			<Footer />
		</div>
	)
}

export default Class
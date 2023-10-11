import { Container, Row, Col, Form } from "react-bootstrap"
import Navigation from "../child/navigation_bar/Navigation_Bar.jsx"
import Footer from "../child/footer/Footer.jsx"
import { Route, BrowserRouter } from "react-router-dom"
import "./Demo.css"

function Join() {
	function joinCourse() {
		alert("Thank you for joining our course!")
	}

	return (
		

		<div className="join-container">
			{/* <BrowserRouter>
				<Route path="join" element={<Join/>}/>
			</BrowserRouter> */}
			<Container fluid className="gx-0">
				<Row className="gx-0">
					<Col>
						<Navigation />
					</Col>
				</Row>
				<Row className="gx-0">
					<Col className="form-join">
						<div className="form-join-container">
							<Form className="form-join-wrapper">
								<div className="form-join-personal">
									<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
										<Form.Label>Your name</Form.Label>
										<Form.Control type="text" placeholder="Enter your name..." />
									</Form.Group>
									<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
										<Form.Label>Phone</Form.Label>
										<Form.Control type="tel" placeholder="Enter your phone..." />
									</Form.Group>
									<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
										<Form.Label>Email</Form.Label>
										<Form.Control type="email" placeholder="Enter your email..." />
									</Form.Group>
									<div>
										<input type="radio" name="" id="" />
										<label htmlFor="">Male</label>
										<br />
										<input type="radio" name="" id="" />
										<label htmlFor="">Female</label>
									</div>
									<div>
										<br />
										<label htmlFor="">Select course:</label>
										<br />
										<select name="" id="">
											<option value="Gym">Gym</option>
											<option value="Yoga">Yoga</option>
											<option value="Zumba">Zumba</option>
											<option value="Hiit">Hiit</option>
											<option value="Cycling">Cycling</option>
										</select>
									</div>
									<div>
										<br />
										<label htmlFor="">Select room:</label>
										<br />
										<select name="" id="">
											<option value="addr1">218 Produce Row, San Antonio, Texas, US</option>
											<option value="addr2">200 E Main St, Humble, Texas, US</option>
											<option value="addr1">213 Produce Row, San Antonio, Texas, US</option>
											<option value="addr2">199 E Main St, Humble, Texas, US</option>
											<option value="addr1">33 Andrea, San Antonio, Texas, US</option>
											<option value="addr2">345 E Main St, Ellos, Texas, US</option>
										</select>
									</div>
									<div>
										<br />
										<input className="register-button" type="submit" value="Register" onClick={joinCourse}/>
									</div>
								</div>
							</Form>
						</div>
					</Col>
				</Row>
				<Row className="gx-0">
					<Col>
						<Footer />
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default Join
import { Container, Row, Col } from "react-bootstrap"
import Navigation from "../child/navigation_bar/Navigation_Bar.jsx"
import Footer from "../child/footer/Footer.jsx"

import FormBackground from "../../assets/images/about_us/history-banner.jpg"

import { useState } from "react"

import "../child/Join_Style.css"

function Join() {
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [phone, setPhone] = useState("")
	const [course, setCourse] = useState("")

	function handleName(event) {
		setName(event.target.value)
	}

	function handleEmail(event) {
		setEmail(event.target.value)
	}

	function handlePhone(event) {
		setPhone(event.target.value)
	}

	function handleCourse() {
		var a = document.getElementById("form-join-select").value
		setCourse(a)

		if (course == "yoga")
			alert("HELL YEAH");
	}

	function handleSubmit(event) {
		event.preventDefault()

		if (name == "ABC")
			alert("YES");

		setName("")
		setEmail("")
		setPhone("")
	}

	return (
		<div className="join-container">
			<Container fluid className="gx-0">
				<Row className="gx-0">
					<Col>
						<Navigation />
					</Col>
				</Row>
				<Row className="gx-0">
					<Col className="join-heading">
						<h1>JOIN OUR COURSE</h1>
					</Col>
				</Row>
				<Row className="gx-0">
					<Col className="form-join-wrapper">
						<div className="form-join-content">
							<form action="" onSubmit={handleSubmit}>
								<div className="form-join-input">
									<div className="form-join-personal">
										<div className="personal">
											<div>
												<label className="form-join-label" htmlFor="">Your Name</label>
												<br />
												<input type="text" name="" id="" value={name} onChange={handleName} required
												placeholder="Enter your name..."/>
												{/* <p>ERROR</p> */}
											</div>
											<div>
												<label className="form-join-label" htmlFor="">Email</label>
												<br />
												<input type="email" name="" id="" value={email} onChange={handleEmail} required
												placeholder="Enter your email..."/>
											</div>
											<div>
												<label className="form-join-label" htmlFor="">Phone</label>
												<br />
												<input type="tel" name="" id="" value={phone} onChange={handlePhone} required
												placeholder="Enter your phone..."/>
											</div>
										</div>
										<div className="gender">
											<div>
												<div>
													<input type="radio" name="" id="" />
													<label className="form-join-label" htmlFor="">Male</label>
												</div>
												<div>
													<input type="radio" name="" id="" />
													<label className="form-join-label" htmlFor="">Female</label>
												</div>
												<div>
													<input type="radio" name="" id="" checked/>
													<label className="form-join-label" htmlFor="">Other</label>
												</div>
											</div>
										</div>
									</div>
									<div className="form-join-course">
										<div className="ABC">
											<div>
												<label className="form-join-label" htmlFor="">Select Course</label>
												<select name="" id="form-join-select" onChange={handleCourse}>
													<option value="yoga" >Yoga</option>
													<option value="gym">Gym</option>
													<option value="zumba">Zumba</option>
													<option value="cycling">Cycling</option>
													<option value="hiit">Hiit</option>
												</select>
											</div>
										</div>
										<div className="XYZ">
											<div>
												<label className="form-join-label" htmlFor="">Select Address</label>
												<select name="" id="">
													<option value="addr1">218 Produce Row, San Antonio, Texas, US</option>
													<option value="addr2">200 E Main St, Humble, Texas, US</option>
													<option value="addr1">213 Produce Row, San Antonio, Texas, US</option>
													<option value="addr2">199 E Main St, Humble, Texas, US</option>
													<option value="addr1">33 Andrea, San Antonio, Texas, US</option>
													<option value="addr2">345 E Main St, Ellos, Texas, US</option>
												</select>
											</div>
										</div>
									</div>
									<div className="form-join-submit">
										<input type="submit" value="Register" />
									</div>
								</div>
							</form>
						</div>
					</Col>
				</Row>
				<Row className="gx-0">
					<Col className="form-background">
						<img src={FormBackground} alt="" />
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
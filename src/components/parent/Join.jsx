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
	const nameRegex = /^[a-zA-Z ]+$/
	const emailRegex = /^(\w{5,7})+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/
	const phoneRegex = /^\d{10,11}$/
	// const [course, setCourse] = useState("")

	function handleName(event) {
		setName(event.target.value)
	}

	function handleEmail(event) {
		setEmail(event.target.value)
	}

	function handlePhone(event) {
		setPhone(event.target.value)
	}

	function handleSubmit(event) {
		event.preventDefault()

		if (!nameRegex.test(name)) {
			document.getElementById("error-name").style.display = "block"
			document.getElementById("error-name").style.color = "red"
			// document.getElementById("error-name").style.display = "none"
			document.getElementById("error-email").style.display = "none"
			document.getElementById("error-phone").style.display = "none"
		}
		else if (!emailRegex.test(email)) {
			document.getElementById("error-email").style.display = "block"
			document.getElementById("error-email").style.color = "red"
			document.getElementById("error-name").style.display = "none"
			// document.getElementById("error-email").style.display = "none"
			document.getElementById("error-phone").style.display = "none"
		}
		else if (!phoneRegex.test(phone)) {
			document.getElementById("error-phone").style.display = "block"
			document.getElementById("error-phone").style.color = "red"
			document.getElementById("error-name").style.display = "none"
			document.getElementById("error-email").style.display = "none"
			// document.getElementById("error-phone").style.display = "none"
		}
		else {
			alert("Thank you for joining us!")
			setName("")
			setEmail("")
			setPhone("")
			document.getElementById("error-name").style.display = "none"
			document.getElementById("error-email").style.display = "none"
			document.getElementById("error-phone").style.display = "none"
		}
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
													<input type="radio" name="abc" id="abc"/>
													<label className="form-join-label" htmlFor="abc">Male</label>
												</div>
												<div>
													<input type="radio" name="xyz" id="xyz"/>
													<label className="form-join-label" htmlFor="xyz">Female</label>
												</div>
												<div>
													<input type="radio" name="qqq" id="qqq"/>
													<label className="form-join-label" htmlFor="qqq">Other</label>
												</div>
											</div>
										</div>
									</div>
									<div className="form-join-course">
										<div className="ABC">
											<div>
												<label className="form-join-label" htmlFor="">Select Course</label>
												<select name="" id="form-join-select">
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
									<p id="error-name">Invaild Name</p>
									<p id="error-email">Invaild Email</p>
									<p id="error-phone">Invaild Phone: 10 - 11 digits</p>
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
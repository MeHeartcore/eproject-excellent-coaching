import { Container, Row, Col, Button } from "react-bootstrap"

import NavigationBar from "../child/navigation_bar/Navigation_Bar.jsx"
import CourseData from "../../data/course.json"
import Footer from "../child/footer/Footer"

import DownloadData from "../../assets/files/information.pdf"
import CourseImage from "../../assets/images/blog/blog4.png"
import CoachImage from "../../assets/images/intro/tr1.png"


import "../child/class_course/Course.css"

import { Link } from "react-router-dom"

function Zumba() {
	return (
		<div className="course-container">
			<Container fluid className="gx-0">
				<Row className="gx-0">
					<Col>
						<div>
							<NavigationBar />
						</div>
					</Col>
				</Row>
				<Row className="gx-0">
					<Col className="course-intro-image">
						<div>
							<h1>WELCOME TO OUR COURSE</h1>
						</div>
					</Col>
				</Row>
				<Row className="gx-0">
					<Col className="course-information">
						<div className="course-name-heading">
							<h1>{CourseData[2].className}</h1>
						</div>
						<div className="course-detail">
							<div className="course-image">
								<img src={CourseImage} alt="course" />
							</div>
							<div className="course-description">
								<div className="course-description-A">{CourseData[2].courseList[0].courseName}</div>
								<div className="course-description-B">There are currently {CourseData[2].courseList[0].packagesAvailable} packages:</div>
								<div className="package-wrapper">
									<div>
										<div>
											<span className="package-heading">For {CourseData[2].courseList[0].packageList[0].packageName}</span>
											<br />
											{CourseData[2].courseList[0].packageList[0].price} $
											<br />
											{CourseData[2].courseList[0].packageList[0].duration} month
										</div>
										<div>
											<span className="package-heading">For {CourseData[2].courseList[0].packageList[1].packageName}</span>
											<br />
											{CourseData[2].courseList[0].packageList[1].price} $
											<br />
											{CourseData[2].courseList[0].packageList[1].duration} month
										</div>
										{/* <div>
											<span className="package-heading">For {CourseData[0].courseList[0].packageList[2].packageName}</span>
											<br />
											{CourseData[0].courseList[0].packageList[2].price} $
											<br />
											{CourseData[0].courseList[0].packageList[2].duration} month
										</div> */}
									</div>
									<div className="download-wrapper">
										<Button
											className="download-button"
											as={Link}
											to={DownloadData}
											download="information-course"
											target="_blank"
											rel="noreferrer">Download</Button>
									</div>
								</div>
							</div>
						</div>
					</Col>
				</Row>
				<Row className="gx-0">
					<Col className="trainer-wrapper">
						<div className="trainer-information">
							<h3>Meet our outstanding trainers</h3>
							<div>
								<span className="trainer-intro">{CourseData[2].coachList[0].coachName}</span>
								<br />
								<span className="trainer-detail">With {CourseData[2].coachList[0].yearsOfExperience} years of experience</span>
								<br />
								<span className="trainer-detail">{CourseData[2].coachList[0].describeAchievements}</span>
							</div>
						</div>
						<div className="trainer-image">
							<img src={CoachImage} alt="coach" />
						</div>
					</Col>
				</Row>
				<Row className="gx-0">
					<Col className="available-wrapper">
						<div className="available-room">
							<br />
							<label htmlFor="">Available room:</label>
							<br />
							<select name="" id="">
								<option value="addr1">218 Produce Row, San Antonio, Texas, US</option>
								<option value="addr2">200 E Main St, Humble, Texas, US</option>
								<option value="addr1">213 Produce Row, San Antonio, Texas, US</option>
								<option value="addr2">199 E Main St, Humble, Texas, US</option>
								<option value="addr1">33 Andrea, San Antonio, Texas, US</option>
								<option value="addr2">345 E Main St, Ellos, Texas, US</option>
							</select>
							<br />
							<br/>
							<Button
								as={Link} to="/join" className="join-now-button">Join now</Button>
						</div>
					</Col>
				</Row>
			</Container>
			<Footer />
		</div>
	)
}

export default Zumba
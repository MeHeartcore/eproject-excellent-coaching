import { Button } from "react-bootstrap"

import Header from "../child/header/Header"
import CourseData from "../../data/course.json"
import Footer from "../child/footer/Footer"

import DownloadData from "../../assets/files/text.txt"

import "../child/class_course/Course.css"
import { Link } from "react-router-dom"
// import { Link } from "react-router-dom"

function Course() {
	

	return (
		<div className="course-container">
			<Header />
			<h1>{CourseData[0].className}</h1>
			<div>
				<div><img src={CourseData[0].imageCourse} alt="course" /></div>
				<div>
					<div>{CourseData[0].courseList[0].courseName}</div>
					<div>{CourseData[0].courseList[0].packagesAvailable}</div>
					<div className="package-wrapper">
						<div>
							For {CourseData[0].courseList[0].packageList[0].packageName}
							<br />
							{CourseData[0].courseList[0].packageList[0].price} $
							<br />
							{CourseData[0].courseList[0].packageList[0].duration} month
						</div>
						<div>
							For {CourseData[0].courseList[0].packageList[1].packageName}
							<br />
							{CourseData[0].courseList[0].packageList[1].price} $
							<br />
							{CourseData[0].courseList[0].packageList[1].duration} month
						</div>
					</div>
					<Button
						as={Link}
						to={DownloadData}
						download="text"
						target="_blank"
						rel="noreferrer">Learn more</Button>
				</div>
			</div>
			<div className="trainer-wrapper">
				<div>
					Meet our outstanding trainers
					<br />
					{CourseData[0].coachList[0].coachName}
					<br />
					{CourseData[0].coachList[0].yearsOfExperience}
					<br />
					{CourseData[0].coachList[0].describeAchievements}
				</div>
				<img src={CourseData[0].imageCoach} alt="coach" />
			</div>
			<Footer />
		</div>
	)
}

export default Course
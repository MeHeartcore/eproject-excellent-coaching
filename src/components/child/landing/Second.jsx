import Card from "react-bootstrap/Card";
import "./Style.css";
import Gyms from "../../../assets/images/blog/news5.png";
import Yoga from "../../../assets/images/about_us/yoga.jpg"
import Zumba from "../../../assets/images/about_us/zumba.jpg"

import { Link } from "react-router-dom";


function Second() {
	return (
		<div className="intro2-all" >
			<div >
				<h2 className="intro-text">WHO WE ARE ?</h2>
			</div>
			<div>
				<h2 className="intro-text2">WE ARE EXCELENT COACHING</h2>
			</div>
			<div className="text">
				<p className="intro-text3">
					Largest health brand in Vietnam, Excellent Coaching is built to
					bring happiness and fulfilling moments to you in life by providing
					services to develop physical health and nutrition. and holistic
					spirit
				</p>
			</div>

			<div className="intro2-cardtext">
				<div>
					<Card style={{ width: "20rem" }} className="Card">
						<Card.Img variant="top" src={Gyms} />
						<Card.Body className="fix-card-body">
							<Card.Title className="card-name">GYM</Card.Title>
							<Card.Text className="fix-card-text">
								Combining aerobic exercise with other kinds of exercises like strength training with weights
								and stretching keeps muscles, ligaments, joints, and tendons healthy, flexible, and strong.
								One also gets good posture when muscles are well-formed.
							</Card.Text>
							<div className="button">
								<Link to="/gym">Read More <i className="fa-solid fa-arrow-right"></i></Link>
							</div>
						</Card.Body>
					</Card>
				</div>
				<div>
					<Card style={{ width: "20rem" }} className="Card">
						<Card.Img variant="top" src={Yoga} />
						<Card.Body className="fix-card-body">
							<Card.Title className="card-name" >YOGA</Card.Title>
							<Card.Text className="fix-card-text">
								Yoga offers physical and mental health benefits for people of all ages.
								And, if you’re going through an illness, recovering from surgery or living with a chronic
								condition, yoga can become an integral part of your treatment and potentially hasten healing. 
							</Card.Text>
							<div className="button">
								<Link to="/yoga">Read More <i className="fa-solid fa-arrow-right"></i></Link>
							</div>
						</Card.Body>
					</Card>
				</div>
				<div>
					<Card style={{ width: "20rem" }} className="Card">
						<Card.Img variant="top" src={Zumba} />
						<Card.Body className="fix-card-body">
							<Card.Title className="card-name" >Zumba</Card.Title>
							<Card.Text className="fix-card-text">
								It’s fun. The more you enjoy your exercise routine, the more likely you are to stick with it.
								Many people say they have so much fun dancing that they forget they are actually exercising.
								Zumba is a powerful exercise with more calorie burn.
							</Card.Text>
							<div className="button">
								<Link to="/zumba">Read More <i className="fa-solid fa-arrow-right"></i></Link>
							</div>
						</Card.Body>
					</Card>
				</div>
			</div>
		</div>

	)
}

export default Second

import Card from "react-bootstrap/Card";
import "./Style.css";
import Gyms from "../../../assets/images/blog/blog7.png";

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
					largest health brand in Vietnam, Excellent Coaching is built to
					bring happiness and fulfilling moments to you in life by providing
					services to develop physical health and nutrition. and holistic
					spirit
				</p>
			</div>

			<div className="intro2-cardtext">
				<div>
					<Card style={{ width: "20rem" }} className="Card">
						<Card.Img variant="top" src={Gyms} />
						<Card.Body>
							<Card.Title className="card-name">Gyms</Card.Title>
							<Card.Text>
								Gym training is a transformative experience that strengthens
								the body, boosts energy levels, enhances overall fitness, and
								instills discipline, helping individuals reach their health
								and wellness goals
							</Card.Text>
							<div className="button">
								Read More <i className="fa-solid fa-arrow-right"></i>
							</div>
						</Card.Body>
					</Card>

				</div>
				<div>
					<Card style={{ width: "20rem" }} className="Card">
						<Card.Img variant="top" src={Gyms} />
						<Card.Body>
							<Card.Title className="card-name" >Gyms</Card.Title>
							<Card.Text>
								Gym training is a transformative experience that strengthens
								the body, boosts energy levels, enhances overall fitness, and
								instills discipline, helping individuals reach their health
								and wellness goals
							</Card.Text>
							<div className="button">
								Read More <i className="fa-solid fa-arrow-right"></i>
							</div>
						</Card.Body>
					</Card>
				</div>
				<div>
					<Card style={{ width: "20rem" }} className="Card">
						<Card.Img variant="top" src={Gyms} />
						<Card.Body>
							<Card.Title className="card-name" >Gyms</Card.Title>
							<Card.Text>
								Gym training is a transformative experience that strengthens
								the body, boosts energy levels, enhances overall fitness, and
								instills discipline, helping individuals reach their health
								and wellness goals
							</Card.Text>
							<div className="button">
								Read More <i className="fa-solid fa-arrow-right"></i>
							</div>
						</Card.Body>
					</Card>

				</div>
			</div>
		</div>

	)
}

export default Second

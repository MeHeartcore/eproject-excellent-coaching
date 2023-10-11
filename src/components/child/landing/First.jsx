import "./Style.css"
import Before from "../../../assets/images/header/result.jpg"

import { Button } from "react-bootstrap";

import { Link } from "react-router-dom";
// import { Button } from "react-bootstrap";
function First() {
	return (
		<div className="intro4-box">
			<div>
				<img className="before" src={Before} alt="" />
			</div>
			<div className="intro4-before">
				<div >
					<div></div>
					<h1 className="intro3-h1"> Built to Bring Best Results </h1>
				</div>
				<div>
					<p className="intro3-text">Embarking on a gym journey can lead to remarkable self-transformation. As you commit to regular workouts,
						youll witness positive changes in your physique, confidence, discipline, and overall well-being, unlocking the potential to become a better version of yourself</p>
				</div>
				<div>
					{/* <Form>

						<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
							<Form.Control type="email" placeholder="Enter your email..." />
						</Form.Group>
					</Form> */}
					<Button
						as={Link}
						to="join"
						className="join-button">
						Join now
					</Button>
				</div>
			</div>
		</div>
	)
}

export default First;

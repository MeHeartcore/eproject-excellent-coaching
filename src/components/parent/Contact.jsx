import Footer from "../child/footer/Footer.jsx"
import Map from "../child/contact/Map.jsx"
import FormContact from "../child/contact/Form.jsx"
import NavigationBar from "../child/navigation_bar/Navigation_Bar.jsx";

import { Container, Row, Col } from "react-bootstrap"

import "../child/contact/Style.css"

function Contact() {
	return (
		<div>
			<NavigationBar />
			<Container fluid className="gx-0">
				<Row className="gx-0">
					<Col id="contact-heading">
						<div>CONTACT US</div>
					</Col>
				</Row>
				<Row className="gx-0">
					<Col>
						<div>
							<FormContact />
						</div>
					</Col>
				</Row>
				<Row className="gx-0">
					<Col>
						<div><Map /></div>
					</Col>
				</Row>
			</Container>
			<Footer />
		</div>
	)
}

export default Contact
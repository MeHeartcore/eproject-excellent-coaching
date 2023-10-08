import Header from "../child/header/Header.jsx"
import Footer from "../child/footer/Footer.jsx"
import Map from "../child/contact/Map.jsx"
import FormContact from "../child/contact/Form.jsx"

import { Container, Row, Col } from "react-bootstrap"

function Contact() {
	return (
		<div>
			<Header />
			<Container fluid className="gx-0">
				<Row className="gx-0">
					<Col>
						<div>Contact</div>
						<FormContact/>
					</Col>
					<Col>
						<Map />
					</Col>
				</Row>
			</Container>
			<Footer />
		</div>
	)
}

export default Contact
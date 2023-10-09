import { Container, Row, Col } from "react-bootstrap"
import Carousel from 'react-bootstrap/Carousel';

import NavigationBar from "../navigation_bar/Navigation_Bar.jsx"
import SlideshowImage from "../../../assets/images/header/header_intro.jpg"
import New from "../../../assets/images/header/new.jpg"
import Last from "../../../assets/images/header/last.jpg"

import "./Header_Style.css"
import { Link } from "react-router-dom";

function Header() {
	return (
		<div className="header-container">
			<Container fluid className="gx-0">
				<Row className="gx-0">
					<Col>
						<div><NavigationBar /></div>
					</Col>
				</Row>
				<Row className="gx-0">
					<Col>
						<Carousel interval={null}>
							<Carousel.Item as={Link} to="/class">
								<img
									className="d-block w-100"
									src={SlideshowImage}
									alt="slideshow" />
								<Carousel.Caption className="caption">
									<h3>Experience With Us</h3>
									<p>Train a strong, durable body</p>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item as={Link} to="/class">
								<img
									className="d-block w-100"
									src={New}
									alt="slideshow" />
								<Carousel.Caption className="caption">
									<h3>Great Courses</h3>
									<p>Train a strong, durable body</p>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item as={Link} to="/class">
								<img
									className="d-block w-100"
									src={Last}
									alt="slideshow" />
								<Carousel.Caption className="caption">
									<h3>Always Go Together</h3>
							
										<p>
										Train a strong, durable body
										</p>
								
								</Carousel.Caption>
							</Carousel.Item>
						</Carousel>

					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default Header
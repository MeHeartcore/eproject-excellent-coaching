import {Container, Row, Col} from "react-bootstrap"
import {Link} from "react-router-dom"

import BrandLogo1 from "../../../assets/images/footer/puma_logo.png"
import BrandLogo2 from "../../../assets/images/footer/adidas_logo.png"
import BrandLogo3 from "../../../assets/images/footer/allmax_logo.png"
import Logo from "../../../assets/images/header/logo_edited.png"
import SocialNetworkLogo from "../../../assets/images/footer/facebook_icon_1.png"

import "./Footer_Style.css"

function Footer() {
	return (
		<div className="footer-container">
			<Container fluid className="gx-0">
				<Row className="gx-0">
					<Col id="brand-logo-wrapper">
						<div>
							<img src={BrandLogo1} alt="brand-logo-1"/>
						</div>
						<div>
							<img src={BrandLogo2} alt="brand-logo-2"/>
						</div>
						<div>
							<img src={BrandLogo3} alt="brand-logo-3"/>
						</div>
					</Col>
				</Row>
				<Row className="gx-0">
					<Col id="outtro-wrapper">
						<div id="outtro-logo">
							<img src={Logo} alt="logo"/>
						</div>
						<div id="outtro-content">
							<div id="information-group">
								<div>
									<Link to="/tos">Terms of Service</Link>
									<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
									<Link to="/privacy">Privacy Policy</Link>
								</div>
								<div>
									<img src={SocialNetworkLogo} alt="social-network-logo"/>
									<img src={SocialNetworkLogo} alt="social-network-logo"/>
									<img src={SocialNetworkLogo} alt="social-network-logo"/>
								</div>
							</div>
							<div id="copyright">
								© 2023 All Rights Reserved.
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default Footer
import {
	Navbar,
	Nav
} from "react-bootstrap"
import {Link} from "react-router-dom"

import Logo from "../../../assets/images/header/logo_edited.png"

import "./Navigation_Bar_Style.css"

function NavigationBar() {
	return (
		<div className="navigation-bar-container">
			{/* < expand="lg" className="navigation-bar-wrapper"> */}
			<Navbar className="navigation-bar-wrapper">
				<div>
					<Navbar.Brand
						as={Link}
						to="/"
					>
						<img src={Logo} alt="logo" />
					</Navbar.Brand>
				</div>
				<div>
					<Navbar.Collapse id="navigation-bar-collapse">
						<Nav className="navigation-bar-content">
							<div>
								<Nav.Link
									as={Link}
									to="/intro"
								>
									INTRO
								</Nav.Link>
							</div>
							<div className="hover-link">
								<Nav.Link
									as={Link}
									to="/class"
								>
									CLASSES
								</Nav.Link>
								<div className="hover-content">
									<Nav.Link
										as={Link}
										to="/course"
									>
										COURSE 1
									</Nav.Link>
									<Nav.Link>COURSE 2</Nav.Link>
									<Nav.Link>COURSE 3</Nav.Link>
								</div>
							</div>
							<div className="hover-link">
								<Nav.Link
									as={Link}
									to="/about-us"
								>
									ABOUT US
								</Nav.Link>
								<div className="hover-content">
									<Nav.Link
										as={Link}
										to="/gallery"
									>
										GALLERY
									</Nav.Link>
									<Nav.Link
										as={Link}
										to="/blog"
									>
										BLOG
									</Nav.Link>
								</div>
							</div>
							<div>
								<Nav.Link
									as={Link}
									to="/contact"
								>
									CONTACT
								</Nav.Link>
							</div>
						</Nav>
					</Navbar.Collapse>
				</div>
				{/* <div><Navbar.Toggle aria-controls="basic-navbar-nav" /></div> */}
			</Navbar>
		</div>
	)
}

export default NavigationBar
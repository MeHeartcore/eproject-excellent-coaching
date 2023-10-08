import {Container, Row, Col} from "react-bootstrap"

import NavigationBar from "../navigation_bar/Navigation_Bar.jsx"

import "./Header_Style.css"

function Header() {
	return (
		<div className="header-container">
			<Container fluid className="gx-0">
				<Row className="gx-0">
					<Col>
						<div>
							<NavigationBar/>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default Header
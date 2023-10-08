import {
	Container,
	Row,
	Col
} from "react-bootstrap"

import Header from "../../child/header/Header.jsx"
import Footer from "../../child/footer/Footer.jsx"

function Privacy() {
	return (
		<div>
			<Header/>
			<Container className="all">
				<Row>
					<Col>
						<div >
							<div className="privacy-h1" > PRIVACY POLICY</div>

							<div>At Fitness Company Excellent Coaching, we are committed to protecting the privacy and confidentiality of our customers personal information. This Privacy Policy outlines how we collect,
								use, and safeguard your data when you interact with our services
							</div>
						</div>

						<div>
							<div>
								<h2>Information Collection </h2>
							</div>
							<div>
								We may collect personal information, including but not limited to, your name, contact details, payment information, and fitness goals.
								This information is collected when you sign up for our services, participate in surveys, or engage with our website or mobile applications.
							</div>
						</div>

						<div>
							<div>
								<h2>Information Use</h2>
							</div>
							<div>
								We use your personal information to provide and improve our services, personalize your experience, process payments, communicate with you, and offer relevant promotions.
								We may also analyze anonymized data to enhance our offerings and develop new features.
							</div>
						</div>

						<div>
							<div>
								<h2>Security</h2>
							</div>
							<div className="sercurity">
								We implement industry-standard security measures to protect your personal information from unauthorized access, use, or disclosure.
								However, please note that no method of transmission over the internet or electronic storage is completely secure.
							</div>

							<div>
								While we use encryption to protect sensitive information transmitted online, we also protect your information offline. Only employees who need the information to perform a specific job (for example, billing or customer service) are granted access to personally identifiable information.
								The computers/servers in which we store personally identifiable information are kept in a secure environment.
							</div>
						</div>

						<div>
							<div>
								<h2>Third-Party Disclosure</h2>
							</div>
							<div>
								We do not sell, trade, or transfer your personal information to third parties without your consent,
								except for trusted service providers who assist us in delivering our services
							</div>
						</div>

						<div>
							<div>
								<h2>Retention</h2>
							</div>
							<div>
								We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy,
								unless a longer retention period is required by law.
							</div>
						</div>
						<div>
							<div>
								<h2>Links</h2>
							</div>
							<div>
								This Website may contain links to other sites. Please be aware that we are not responsible for the content or privacy practices of such other sites. We encourage our users
								to be aware when they leave our site and to read the privacy statements of any other site that collects personally identifiable information.
							</div>
						</div>
						<div className="by-using">
							By using our services, you consent to the collection, use, and storage of your personal
							information as outlined in this Privacy Policy. We may update this policy periodically, and any changes will be posted on our website.
						</div>
					</Col>
				</Row>
			</Container>
			<Footer/>
		</div>
	)
}

export default Privacy
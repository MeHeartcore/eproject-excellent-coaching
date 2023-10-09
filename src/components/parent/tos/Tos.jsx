import {Container} from "react-bootstrap"

import Navigation from "../../child/navigation_bar/Navigation_Bar.jsx"
import Footer from "../../child/footer/Footer.jsx"

import "./Tos_Style.css"

function Tos() {
	return (
		<div>
			<Navigation/>
			<div>
				<Container >
					<div className="all-tos">
						<div>
							<h2>TERMS AND CONDITIONS</h2>
						</div>
						<div> <hr /> </div>
						<div>
							Please read these Terms and Conditions  carefully before using our gym services. This Agreement sets forth the legal binding
							terms and conditions for your use of the gym facilities, equipment, and services provided by Excellent Coaching
						</div>

						<div>
							<div>
								<h1>GENERAL TERMS AND CONDITIONS</h1>
							</div>
							<div>
								<span className="member">  1. Membership:</span> By registering as a member or using our gym facilities,
								you agree to comply with the rules and regulations set forth by the gym. You must be at least 18 years old or have parental consent to participate.
							</div>
							<div>
								<span className="member"> 2. Liability: </span>You acknowledge that participating in exercise and using exercise equipment carries inherent risks. You agree to accept full responsibility for any injuries, damages or losses incurred during your
								use of the gym. Excellent Coaching and its staff shall not be held responsible for any such incidents.
							</div>
							<div>
								<span className="member">3. Membership Fees: </span>Membership fees are outlined in the membership agreement. Payment is made periodically according to the provisions of the contract.
								Failure to make timely payments may result in suspension or termination of your membership.
							</div>
							<div>
								<span className="member">4. Cancellations and Refunds: </span>Membership cancellations must be requested in writing, in accordance with the cancellation policy
								outlined in the membership agreement. Refunds can be made according to our refund policy.
							</div>
							<div>
								<span className="member">5. Intellectual Property: </span> All intellectual property rights, including trademarks and copyrighted
								materials, relating to Excellent Coaching are owned by the gym.
								You may not use, copy or distribute any of these materials without prior written consent
							</div>
							<div>
								<span className="member">6. Termination: </span>Excellent Coaching may terminate your membership or access to the gym facilities if you violate any provision of this Agreement or
								participate in any any conduct deemed detrimental to the safety and welfare of other members or employees.
							</div>
							<div>
								<span className="member">7. Governing Law: </span>This Agreement shall be governed by and construed in accordance with the laws of [Jurisdiction]. Any dispute arising out of this Agreement
								shall be subject to the exclusive jurisdiction of the courts located in [Jurisdiction]
							</div>
							<div>
								<span className="member">8. </span>
							</div>


						</div>
						<div>
							<div>
								<h1>FOR MEMBERS</h1>
							</div>
							<div>Excellent Coaching implements member rules and regulations to ensure the safest and most enjoyable experience for all members. We reserve
								the right to terminate your membership immediately and without refund for any violation of the following rules:</div>
							<div>
								<span className="member">1. </span>Engaging in fraudulent activities using app account information to access Excellent Coaching.
							</div>
							<div>
								<span className="member">2. </span>Using external personal trainers or conducting business services
								within Excellent Coaching premises, such as providing guidance to others without working out
							</div>
							<div>
								<span className="member">4. </span>Unauthorized photography or filming of other members or branches.
							</div>
							<div>
								<span className="member">5. </span> Failing to return equipment to its original position after use.
							</div>
							<div>
								<span className="member">6. </span>Intentionally dropping or throwing weights on the floor
								(including the free weight area), causing excessive noise and endangering others.
							</div>
							<div>
								<span className="member">7. </span> Intentionally dropping or throwing weights on the floor (including the free weight area), causing excessive noise and endangering others.
								Leaving personal belongings in lockers when not present in the gym (Excellent Coaching regularly collects unattended items and donates them to charitable organizations).
							</div>
							<div>
								<span className="member">8. </span>Not adhering to appropriate workout attire and footwear (e.g., excessively revealing tank tops, denim, bare feet, slippers, boots, or being shirtless). Bringing unnecessary bags or items while working out.
								Excellent Coaching reserves the right to deny entry to customers without proper sports shoes or appropriate attire.
							</div>
							<div>
								<span className="member">9. </span> Engaging in disruptive or harmful behavior towards oneself and others.
							</div>
							<div>
								<span className="member">10. </span>Failing to comply with the parking area regulations.
							</div>
							<div>
								<span className="member">11. </span>Improper disposal of trash and failure to maintain general cleanliness.
							</div>
							<div>
								<span className="member">12. </span>Consumption of alcohol, beer, tobacco, and other prohibited substances at Excellent Coaching.
							</div>
							<div>
								<span className="member">13. </span>Engaging in illegal activities at Excellent Coaching.
							</div>
							<div>
								<span className="member">14. </span>Sleeping within the gym premises, including restrooms.
								Using and scattering food within the gym area.
							</div>
							<div>
								<span className="member">15. </span>Theft, gambling, verbal abuse, or physical assault towards others within the gym premises.
							</div>
						</div>
					</div>
				</Container>
			</div>
			<Footer/>
		</div>
	)
}

export default Tos
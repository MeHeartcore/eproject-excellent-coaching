import { Form } from "react-bootstrap"

function FormContact() {
	return (
		<div className="form-contact-container">
			<Form className="form-contact-wrapper">
				<div className="form-contact-personal">
					<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
						<Form.Label>Your name</Form.Label>
						<Form.Control type="text" placeholder="Enter your name..." />
					</Form.Group>
					<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
						<Form.Label>Phone</Form.Label>
						<Form.Control type="tel" placeholder="Enter your phone..." />
					</Form.Group>
					<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
						<Form.Label>Email</Form.Label>
						<Form.Control type="email" placeholder="Enter your email..." />
					</Form.Group>
				</div>
				<div className="form-contact-comment">
					<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
						<Form.Label>Address</Form.Label>
						<Form.Control type="text" placeholder="Enter your address..." />
					</Form.Group>
					<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
						<Form.Label>Comment</Form.Label>
						<Form.Control className="comment-area" as="textarea" rows={3} placeholder="Add some comment here..." />
					</Form.Group>
				</div>
			</Form>
		</div>
	)
}

export default FormContact
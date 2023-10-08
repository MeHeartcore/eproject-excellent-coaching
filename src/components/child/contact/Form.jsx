import { Form } from "react-bootstrap"

function FormContact() {
	return (
		<div>
			<Form>
				<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
					<Form.Label>Your name</Form.Label>
					<Form.Control type="text"/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
					<Form.Label>Phone</Form.Label>
					<Form.Control type="tel"/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
					<Form.Label>Email</Form.Label>
					<Form.Control type="email"/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
					<Form.Label>Comment</Form.Label>
					<Form.Control as="textarea" rows={3} placeholder="Add some comment here..."/>
				</Form.Group>
			</Form>
		</div>
	)
}

export default FormContact
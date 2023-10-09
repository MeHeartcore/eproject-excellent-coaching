import './Style.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Intro5 = () => {
    return (
        <div className='hero5'>
            <div className='hero-inner5'>
            <div className='order'>
                <h1>YOUR VALUES ARE RECEIVED!</h1>
                <Button as={Link}
											to="/class" variant="outline-light">Book A Class</Button>{' '}
                </div>
                <br></br>

                <Row xs={1} md={3} className="g-4">
                    <Col>
                        <Card>
                            <div className='card-img'>
                            <Card.Body>
                                <Card.Title><i className="fa-regular fa-newspaper"></i>&nbsp;Trained by certified trainers</Card.Title>
                                <Card.Text>
                                <i className="fa-regular fa-circle-check"></i>&nbsp;Motivation and accountability.
                                    <br></br>
                                    <i className="fa-regular fa-circle-check"></i>&nbsp;Goal planning.
                                    <br></br>
                                    <i className="fa-regular fa-circle-check"></i>&nbsp;Pre-planned workouts.
                                    <br></br>
                                    <i className="fa-regular fa-circle-check"></i>&nbsp;Advice and expertise.
                                    <br></br>
                                </Card.Text>
                            </Card.Body>
                            </div>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                        <div className='card-img'>
                            <Card.Body>
                                <Card.Title><i className="fa-solid fa-apple-whole"></i>&nbsp;Nutrition & Diet</Card.Title>
                                <Card.Text>
                                <i className="fa-regular fa-circle-check"></i>&nbsp;A balanced and diverse diet provides the body with essential nutrients to maintain good health. You should include various food groups such as fruits, vegetables, grains, meat and fish, dairy products, and healthy sources of fats.
                                </Card.Text>
                            </Card.Body>
                        </div>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                        <div className='card-img'>
                            <Card.Body>
                                <Card.Title><i className="fa-solid fa-person"></i>&nbsp;Physical & Mental development</Card.Title>
                                <Card.Text>
                                <i className="fa-regular fa-circle-check"></i>&nbsp;Physical and mental development both hold significant value. Physical development enhances health and physical abilities, while mental development improves thinking, reasoning, and overall mental well-being.
                                </Card.Text>
                            </Card.Body>
                        </div>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Intro5;
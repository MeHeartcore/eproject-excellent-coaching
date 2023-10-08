import './Style.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import img1 from '../../../assets/images/intro/10y.jpg';
import img2 from '../../../assets/images/intro/happy_cus.jpg';
import img3 from '../../../assets/images/intro/mxh.jpg';
import img4 from '../../../assets/images/intro/exp.jpg';

const Intro6 = () => {
    return (
        <div className='hero6'>
            <div className='hero-inner6'>
                <h1>Achievements We Got</h1>
                <br></br>

                <Row xs={4} md={4} className="g-4">
                    <Col>
                        <Card>
                        <Card.Img variant="top" src={img1} />
                            <Card.Body>
                                <Card.Title><p>10+ Year of Experience</p></Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                        <Card.Img variant="top" src={img2} />
                            <Card.Body>
                                <Card.Title><p>1000 + Happy Clients</p></Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                        <Card.Img variant="top" src={img3} />
                            <Card.Body>
                                <Card.Title><p>Over 15.000 Followers</p></Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                        <Card.Img variant="top" src={img4} />
                            <Card.Body>
                                <Card.Title><p>50+ Expert Trainers</p></Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Intro6;
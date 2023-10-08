import '../blog/Style.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// Articles
import Blog1 from '../../../assets/images/blog/blog2.jpg';
import Blog2 from '../../../assets/images/blog/blog3.jpg';
import Blog3 from '../../../assets/images/blog/blog4.jpg';
import Blog4 from '../../../assets/images/blog/blog5.png';
import Blog5 from '../../../assets/images/blog/blog6.png';
import Blog6 from '../../../assets/images/blog/blog7.png';

// Content Creator img
import cr1 from '../../../assets/images/blog/blog8.png';
import cr2 from '../../../assets/images/blog/blog9.png';
import cr3 from '../../../assets/images/blog/blog10.png';
import cr4 from '../../../assets/images/blog/blog11.png';
import cr5 from '../../../assets/images/blog/blog12.png';
import cr6 from '../../../assets/images/blog/blog13.png';

const Blog = () => {
    return (
        <div className='blog1'>
            <div className='blog-inner1'>
                <h1>BLOG</h1>
                <h2>ALL THE BEST FOR YOU!</h2>
                <br></br>
                <Row xs={1} md={3} className="g-5">
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={Blog1} />
                            <Card.Body>
                                <Card.Title><h3>Benefits of joining a gym - 20 reasons to sign up</h3></Card.Title>
                                <Card.Text>
                                </Card.Text>
                            </Card.Body>
                            <div className="card-footer">
                                <img src={cr1} alt="" />
                                <div className="card-footer-content">
                                    <h6>Floyid Miles</h6>
                                    <h4>Release date: October 07, 2023</h4>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={Blog2} />
                            <Card.Body>
                                <Card.Title><h3>Morning yoga poses for boosting skin and hair health</h3></Card.Title>
                                <Card.Text>
                                </Card.Text>
                            </Card.Body>
                            <div className="card-footer">
                                <img src={cr2} alt="" />
                                <div className="card-footer-content">
                                    <h6>Benjamin Gray</h6>
                                    <h4>Release date: October 08, 2023</h4>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                        <Card.Img variant="top" src={Blog3} />
                            <Card.Body>
                                <Card.Title><h3>How Zumba and Dancing Can Boost Your Overall Mood!</h3></Card.Title>
                                <Card.Text>
                                </Card.Text>
                            </Card.Body>
                            <div className="card-footer">
                                <img src={cr3} alt="" />
                                <div className="card-footer-content">
                                    <h6>David Ferguson</h6>
                                    <h4>Release date: October 09, 2023</h4>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col>
                    <Card>
                        <Card.Img variant="top" src={Blog4} />
                            <Card.Body>
                                <Card.Title><h3>Simple Condition for all Around Fitness.</h3></Card.Title>
                                <Card.Text>
                                </Card.Text>
                            </Card.Body>
                            <div className="card-footer">
                                <img src={cr4} alt="" />
                                <div className="card-footer-content">
                                    <h6>William Wilkins</h6>
                                    <h4>Release date: October 10, 2023</h4>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col>
                    <Card>
                        <Card.Img variant="top" src={Blog5} />
                            <Card.Body>
                                <Card.Title><h3>Simple Condition for all Around Fitness.</h3></Card.Title>
                                <Card.Text>
                                </Card.Text>
                            </Card.Body>
                            <div className="card-footer">
                                <img src={cr5} alt="" />
                                <div className="card-footer-content">
                                    <h6>Floyid Miles</h6>
                                    <h4>Release date: October 11, 2023</h4>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                        <Card.Img variant="top" src={Blog6} />
                            <Card.Body>
                                <Card.Title><h3>The Beginner is Guide to Weight Lifting.</h3></Card.Title>
                                <Card.Text>
                                </Card.Text>
                            </Card.Body>
                            <div className="card-footer">
                                <img src={cr6} alt="" />
                                <div className="card-footer-content">
                                    <h6>Bernadette</h6>
                                    <h4>Release date: October 12, 2023</h4>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    )
};

export default Blog;

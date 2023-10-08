import '../blog/Style.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// Articles
import news1 from '../../../assets/images/blog/new1.png';
import news2 from '../../../assets/images/blog/new3.png';
import news3 from '../../../assets/images/blog/new2.png';
import news4 from '../../../assets/images/blog/sexynews1.png';
import news5 from '../../../assets/images/blog/news5.png';
import news6 from '../../../assets/images/blog/news6.png';

const Blog_2 = () => {
    return (
        <div className='blog1'>
            <div className='blog-inner1'>
                <h1>Breaking News</h1>
                <h2>Get It First!</h2>
                <br></br>
                <Row xs={1} md={3} className="g-5">
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={news1} />
                            <Card.Body>
                                <Card.Title><h3>“Nothing can stop me”</h3></Card.Title>
                                <Card.Text>
                                    <p>Perfect your poses with a zen Vinyasa session. Arnold Schwarzenegger is back at the gym working out, following his recent surgery</p>
                                </Card.Text>
                            </Card.Body>
                            <div className='card-footer1'>
                            <small className="text-muted"><p>Last updated 3 mins ago</p></small>
                            </div>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={news2} />
                            <Card.Body>
                                <Card.Title><h3>Class review</h3></Card.Title>
                                <Card.Text>
                                    <p>Home of our Gentle Yin, Basic Vinyasa, Restorative and many other classes - our non-heated studio is jam-packed with tons of options for all levels.</p>
                                </Card.Text>
                            </Card.Body>
                            <div className='card-footer1'>
                            <small className="text-muted"><p>Last updated 4 mins ago</p></small>
                            </div>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                        <Card.Img variant="top" src={news3} />
                            <Card.Body>
                                <Card.Title><h3>Bipasha takes on Zumba to stay fit:</h3></Card.Title>
                                <Card.Text>
                                    <p>“It is not only about physical transformation. The workout actually makes you smile”, says fitness enthusiast Bipasha Basu.</p>
                                </Card.Text>
                            </Card.Body>
                            <div className='card-footer1'>
                            <small className="text-muted"><p>Last updated 5 mins ago</p></small>
                            </div>
                        </Card>
                    </Col>
                    <Col>
                    <Card>
                        <Card.Img variant="top" src={news4} />
                            <Card.Body>
                                <Card.Title><h3>Nia Sharma’s Sexy Dance In White Outfit Breaks The Internet Again</h3></Card.Title>
                                <Card.Text>
                                    <p>Nia Sharma flaunts an incredible waistline in her new video on Instagram that is now going viral.</p>
                                </Card.Text>
                            </Card.Body>
                            <div className='card-footer1'>
                            <small className="text-muted"><p>Last updated 6 mins ago</p></small>
                            </div>
                        </Card>
                    </Col>
                    <Col>
                    <Card>
                        <Card.Img variant="top" src={news5} />
                            <Card.Body>
                                <Card.Title><h3>Transformations: From Couch Potato to Powerlifter</h3></Card.Title>
                                <Card.Text>
                                    <p>Beth Van Hove sheds the pounds and gains a world record.</p>
                                </Card.Text>
                            </Card.Body>
                            <div className='card-footer1'>
                            <small className="text-muted"><p>Last updated 7 mins ago</p></small>
                            </div>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                        <Card.Img variant="top" src={news6} />
                            <Card.Body>
                                <Card.Title><h3>FIGHTCAMP RELEASES 4 NEW WORKOUT COLLECTIONS:</h3></Card.Title>
                                <Card.Text>
                                    <p>Strength, Conditioning, Recovery & Stretch. More content to get you (and keep you) in fighting shape!</p>
                                </Card.Text>
                            </Card.Body>
                            <div className='card-footer1'>
                            <small className="text-muted"><p>Last updated 8 mins ago</p></small>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    )
};

export default Blog_2;

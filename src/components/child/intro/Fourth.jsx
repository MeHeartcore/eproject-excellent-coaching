import './Style.css';
import intro1 from '../../../assets/images/intro/intro1.jpg';
import intro2 from '../../../assets/images/intro/intro2.jpg';
import intro3 from '../../../assets/images/intro/intro3.jpeg';
import intro4 from '../../../assets/images/intro/intro4.jpg';
import intro5 from '../../../assets/images/intro/intro5.jpg';
import intro6 from '../../../assets/images/intro/intro6.jpeg';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

const Intro4 = () => {
    return (
        <div className='hero4'>
            <div className='hero-inner4'>
                <h1>OUR VALUES</h1>
                <br></br>
                <div className='content4'>
                    <span><i className="fa-regular fa-circle-check"></i> &nbsp;Professionalism and knowledge:</span> 
                    <p>We have a team of trainers who are professional and knowledgeable about fitness and sports. They will help you build a workout program that suits your personal goals and support you along the way.</p>
                    <br></br>
                    <br></br>
                    <span><i className="fa-regular fa-circle-check"></i> &nbsp; Good facilities:</span> 
                    <p>We invest in high-quality workout equipment and modern facilities to ensure you have a comfortable and safe workout environment.</p>
                    <br></br>
                    <br></br>
                    <span><i className="fa-regular fa-circle-check"> </i> &nbsp; Variety of classes:</span> 
                    <p>We offer a Variety of classes: We offer a variety of classes such as aerobics, yoga, swimming, boxing, zumba and more. This gives you choice and flexibility in finding a workout method that suits your preferences and goals.</p>
                    <br></br>
                    <br></br>
                    <span><i className="fa-regular fa-circle-check"> </i> &nbsp; Supportive community:</span> 
                    <p>Hitting the gym is not just about working out, it is also an opportunity to meet and connect with people with similar interests and goals. We create a supportive community where you can share experiences, get motivated and make new relationships.</p>
                    <br></br>
                    <br></br>
                    <span><i className="fa-regular fa-circle-check"> </i> &nbsp; Health and feeling good:</span>
                    <p>Hitting the gym regularly can improve your overall health, including muscle strength, flexibility, endurance and stamina. It also helps reduce stress, improve mood and feels good to the body and mind.</p>
                </div>
                <div className='aboutus_img'>
                    <Container>
                        <Row>
                            <Col xs={6} md={4}>
                            <br></br>
                                <Image src={intro1}  rounded />
                            </Col>
                            <Col xs={6} md={4}>
                                <br></br>
                                <Image src={intro2}  rounded />
                            </Col>
                            <Col xs={6} md={4}>
                            <br></br>
                                <Image src={intro3}  rounded />
                            </Col>
                            <Col xs={6} md={4}>
                            <br></br>
                                <Image src={intro4}  rounded />
                            </Col>
                            <Col xs={6} md={4}>
                            <br></br>
                                <Image src={intro5}  rounded />
                            </Col>
                            <Col xs={6} md={4}>
                            <br></br>
                                <Image src={intro6}  rounded />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    )
}

export default Intro4
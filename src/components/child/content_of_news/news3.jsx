import './Style.css';
import news3 from '../../../assets/images/content_of_news/news3.jpg';

import { Container, Row, Col } from 'react-bootstrap';

import Navigation from "../navigation_bar/Navigation_Bar.jsx"
import Footer from "../footer/Footer.jsx"

const News3 = () => {
	return (
		<div>
			<Container fluid className='gx-0'>
				<Row>
					<Col>
					<Navigation/>
				</Col>
			</Row>
			<Row className='gx-0'>
				<Col>
					<div className='content'>
						<div className='content-inner'>
							<div className='img'>
								<img src={news3} alt="img" />
							</div>
							<h1>Actress and fitness enthusiast Bipasha Basu says Zumba is her new-found secret to staying fit and that she has never felt so passionate about working out.</h1>
							<br></br>
							<p>I simply love the Zumba programme. I was first attracted to it when I heard its contagious music and rhythms and decided to take a class with renowned Zumba master trainer Sucheta Pal.
								<br></br>
								<br></br>
								<h2>I have never felt this passionate about fitness</h2>
								I was first attracted to it when I heard its contagious music and rhythms and decided to take a class with renowned Zumba master trainer Sucheta Pal.
								<br></br>
								<br></br>
								<h2>Master Trainer Pal said: Bipasha brings high energy to everything she does!</h2>
								It was so exciting to have the pleasure to train her and I know she will join me in making Zumba a lifestyle for millions of Indians who love and follow her fitness regimen everyday.
								<br />
								<br />
								<h2> Actress and fitness enthusiast Bipasha Basu says Zumba is her newfound secret to staying fit and that she has never felt so passionate about working out.</h2>
								I simply love the Zumba programme. I was first attracted to it when I heard its contagious music and rhythms and decided to take a class with renowned Zumba master trainer Sucheta Pal. I was hooked. I have never felt this passionate about fitness.
								<br></br><br></br>It’s all about feeling the music, enjoying the moves and allowing it to inspire you to be fitter and healthier,” Bipasha said in a statement. She feels the dance-based exercise routine also gives an emotional boost.

							</p>
						</div>
					</div>
				</Col>
			</Row>
			<Row className='gx-0'>
				<Col><Footer/></Col>
			</Row>
		</Container>
				</div >
    )
}

export default News3
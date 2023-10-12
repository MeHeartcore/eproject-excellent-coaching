import './Style.css';
import news4 from '../../../assets/images/content_of_news/news4.jpg';

import { Container, Row, Col } from 'react-bootstrap';

import Navigation from "../navigation_bar/Navigation_Bar.jsx"
import Footer from "../footer/Footer.jsx"

const News4 = () => {
    return (
        <Container fluid className='gx-0'>
					<Row className='gx-0'>
						<Col>
							<Navigation/>
						</Col>
					</Row>
					<Row className='gx-0'>
						<Col>
							<div className='content'>
									<div className='content-inner'>
											<div className='img'>
													<img src={news4} alt="img" />
											</div>
											<h1>
											Hot! Nia Sharma Sets Internet On Fire In Bold White Dress At Birthday Bash, Check Out Her Latest Look</h1>
											<br></br>
											<p>
											Nia Sharma celebrated her birthday with her good friends Amrin, Arjun Bijlani and his wife Neha Swami.
													<br></br>
													<br></br>
													<h2>New Delhi: Jamai Raja fame Nia Sharma is known to be one of the hottest celebrities in the entertainment industry.</h2>
													She is known for her bold avatar and hot fashion sense. Her pipping hot looks often set the internet on fire and leave her fans gushing. On September 17, the Naagin actress hosted a birthday bash and invited some of her close friends to celebrate the occasion.
													<br></br>
													<br></br>
													Nia arrived at the party with good friends Amrin, Arjun Bijlani, and his wife Neha Swami. While most of the guests at the party were dressed up in black, the birthday girl arrived in a stylish white dress. As she made her way to the venue, she left viewers begging for mercy. A video shared by paparazzi showed Nia in a white plunging neckline dress with a halter neck. She had her hair tied in a neat bun and accessorized her look with a blue bag.
													<br></br>
													<br></br>
													<h2>Check out her latest look from her birthday bash: </h2>
													A few weeks back, Nia jetted off to California with her mother Usha for a mini-vacation. The actress made sure to keep her fans updated by regularly dropping photos and videos from her exotic holiday. A few days back, she hit the headlines after she shared a sizzling look of her in a racy white monokini. The actress was also seen riding a cycle as she turned up the heat in a stylish pink monokini. Take a look at her post below:
													<br />
													<br />
													<h2>Nia Sharma’s Sexy Dance in White Outfit Breaks The Internet Again – Video Goes Viral</h2>
													Nia Sharma’s Instagram profile is filled with videos that speak volumes of her immense confidence. The actor is totally unapologetic about her sexuality and wears boldness on her sleeves.
													<br></br><br></br>Nia’s fans showered her with love and commented with fire emojis on her post. One social media user wrote, “man Her hotness👏🔥🔥🔥🔥”, while another wrote, “mam u dance sooooooo welllll🔥🔥🔥🔥” (sic).
							
											</p>
									</div>
							</div>
						</Col>
					</Row>
					<Row className='gx-0'>
						<Col>
							<Footer/>
						</Col>
					</Row>
				</Container>
    )
}

export default News4
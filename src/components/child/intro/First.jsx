import './Style.css';
import AboutImg2 from '../../../assets/images/intro/TRAINING.jpg';
import Image from 'react-bootstrap/Image';

const Intro1 = () => {
	return (
		<div className='hero2'>
			<div className='hero-inner2'>
				<h1>Welcome</h1>
				<h2>SOME REASONS WHY CHOOSE US?</h2>
				<br></br>
				<p>
					<i className="fa-regular fa-circle-check"></i> &nbsp;OVER 140+ EXPERT COACHS
					<br></br>
					<br></br>
					<i className="fa-regular fa-circle-check"></i> &nbsp;TRAIN SMARTER AND FASTER THAN BEFORE
					<br></br>
					<br></br>
					<i className="fa-regular fa-circle-check"></i> &nbsp;One FREE PROGRAM FOR NEW MEMBER
					<br></br>
					<br></br>
					<i className="fa-regular fa-circle-check"></i> &nbsp;RELIABLE PARTNERS
				</p>
				<div className='aboutus_img'>
				<Image src={AboutImg2} fluid />;
				</div>
			</div>
		</div>
	)
}

export default Intro1
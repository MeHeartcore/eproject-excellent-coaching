import './Style.css';
import AboutImg2 from '../../../assets/images/intro/bg1.jpg';

const Intro2 = () => {
	return (
		<div className='hero2'>
			<div className='hero-inner2'>
				<h1>OUR GYM</h1>
				<br></br>
				<p>
					What started out as a single gym filled with custom made equipment has grown into a global brand on the cutting edge of fitness.
					Excellent Coaching aims to give its members the very best: from modern equipment to a clean and welcoming atmosphere with an expert staff.
					Amenities vary by location but often include superior strength equipment, top of the line cardio machines, group fitness classes such as indoor cycling, yoga, kickboxing, boot camp and more.
				</p>
				<div className='aboutus_img'>
					<img src={AboutImg2} alt="intro2" />
				</div>
			</div>
		</div>
	)
}

export default Intro2
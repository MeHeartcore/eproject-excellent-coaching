import './Style.css';
import AboutImg3 from '../../../assets/images/intro/bg.png';

const Intro3 = () => {
	return (
		<div className='hero3'>
			<div className='hero-inner3'>
				<h1>OUR MISSON</h1>
				<br></br>
				<p>Our team of personal trainers and fitness professionals are ready to assist you in reaching your training goals, whether you’re just getting started and need some guidance or if you’re an experienced gym goer who wants to take it to the next level. We are your ultimate fitness destination.</p>
				<div className='aboutus_img'>
					<img src={AboutImg3} alt="intro2" />
				</div>
			</div>
		</div>
	)
}

export default Intro3
import backgroundImage from '../../../assets/images/about_us/gym.jpg';

import "./Style.css"

const Hero = () => {
  const divStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <div className='hero' style={divStyle}>
      <div className='hero-inner'>
        <h1>Transform Your Body, Unleash Your Potential!</h1>
        <p>
          That is our signature slogan at Excellent Coaching. Here, we are not
          simply a gym, but a place for you to explore and develop your body to
          its maximum potential.
        </p>
      </div>
    </div>
  );
};

export default Hero;
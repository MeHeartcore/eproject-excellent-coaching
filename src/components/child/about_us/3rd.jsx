import backgroundImage1 from '../../../assets/images/about_us/history-banner.jpg';

import "./Style.css"

const Third = () => {
  const divStyle = {
    backgroundImage: `url(${backgroundImage1})`,
  };

  return (
    <div className='third' style={divStyle}>
      <div className='third-inner'>
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

export default Third;
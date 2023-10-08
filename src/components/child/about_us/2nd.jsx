import AboutImg from '../../../assets/images/about_us/about_img.jpg';
import AboutImg2 from '../../../assets/images/about_us/yoga.jpg';
import AboutImg3 from '../../../assets/images/about_us/zumba.jpg';
// import './AboutUS.modul.css';
import "./Style.css"

const Aboutus = () => {
    return (
      <div className='aboutus container'>
          <div className='aboutus_img'>
              <img src={AboutImg} alt="about us" />
              <img src={AboutImg2} alt="about us" />
              <img src={AboutImg3} alt="about us" />
          </div>    
          
          <div className='aboutus_content'>
              <h1>OUR ORIGIN STORY</h1>
              <h2>A Legacy of Strength</h2>

              <br></br>
              <br></br>

                <h2>2010s</h2> <h3>| A Rich Legacy</h3>
                    <p>Excellent Coaching continued to grow, with a culture formed by the Muscle Beach lifestyle. Joe Gold passed away in 2009, leaving behind a rich legacy of fitness excellence. His innovations and his values continue to drive the brand today.</p>

              <br></br>
              <br></br>
                
                <h2>2015s</h2><h3>| Seriously Fun Fitness</h3>
                    <p>The Cammilleri family acquired the Excellent Coaching brand and set their sights on bringing seriously fun fitness to all corners of the globe. Excellent Coaching has grown to more than 10 locations across six continents and continues to expand. With over 5 years of knowledge and experience, we’re poised to remain a powerful leader in the fitness world!</p>

              <br></br>
              <br></br>
                
                <h2>2020</h2><h3>| The Future is Now</h3>
                    <p>After emerging from a global pandemic stronger than ever, Excellent Coaching holds their first Annual Convention in over 3 years, outlining its plans for the future.  Focused on setting new trends, with the launch of two new gym models, the innovative Studio X and a lifestyle apparel line, World Gym has positioned itself to build the next generation of legends for the next 10 years and beyond. While our journey continues, your pathway to achieve legendary greatness begins right here, right now. Just click the button above to get started.</p> 
  
          </div>
      </div>
    )
  }
  
  export default Aboutus
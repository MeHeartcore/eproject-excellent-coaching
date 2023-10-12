import styles from "./Style.css";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

import { Button } from "react-bootstrap";
// News img
import photo111 from "../../../assets/images/gallery/1.jpg";
import photo222 from "../../../assets/images/gallery/2.jpg";
import photo333 from "../../../assets/images/gallery/3.jpg";
import photo444 from "../../../assets/images/gallery/4.jpg";
import photo555 from "../../../assets/images/gallery/5.jpg";
import photo666 from "../../../assets/images/gallery/6.jpg";
import photo777 from "../../../assets/images/gallery/7.jpg";
import photo888 from "../../../assets/images/gallery/8.jpg";
import photo999 from "../../../assets/images/gallery/9.jpg";
import photo1000 from "../../../assets/images/gallery/10.jpg";
import photo1100 from "../../../assets/images/gallery/11.jpg";
import photo1200 from "../../../assets/images/gallery/12.jpg";

import Story from "../../../assets/images/gallery/icons8-story-100.png";

const Second = () => {
	function displayStory() {
		document.getElementById("card-story-1").style.display = "block";
	}

	function hideStory() {
		document.getElementById("card-story-1").style.display = "none";
	}

  return (
    <div className={`${styles.second} container sections-padding`}>
      <div className="news">
        <h2>OUR GALLERY</h2>
      </div>

      <br></br>

      <CardGroup>
      <Card>
        <Card.Img variant="top" src={photo111} />
					<button className="card-story" onClick={displayStory}>
						<img src={Story} alt="story" />
					</button>
      </Card>
			<div id="card-story-1">
				<div>
					<div className="card-story-img">
						<img src={photo111} alt="111" />
					</div>
					<div className="card-story-content">
						<h3>ABC</h3>
						<p>This is a content.This is a content.This is a content.
						This is a content.This is a content.This is a content.This is a content.
						This is a content.This is a content.This is a content.This is a content.
						This is a content.This is a content.This is a content.This is a content.
						This is a content.This is a content.This is a content.This is a content.
						This is a content.This is a content.This is a content.This is a content.
						This is a content.This is a content.This is a content.This is a content.
						This is a content.This is a content.This is a content.This is a content.
						</p>
						<div><Button className="hide-story-button" onClick={hideStory}>Done</Button></div>
					</div>
				</div>
			</div>

      <Card>   
        <Card.Img variant="top" src={photo333} />
				<button className="card-story" onClick={displayStory}>
						<img src={Story} alt="story" />
					</button>
      </Card>
			<div id="card-story-2">
				<div>
					<div className="card-story-img">
						<img src={photo333} alt="333" />
					</div>
					<div className="card-story-content">
						<h3>ABC</h3>
						<p>This is a content.This is a content.This is a content.
						This is a content.This is a content.This is a content.This is a content.
						This is a content.This is a content.This is a content.This is a content.
						This is a content.This is a content.This is a content.This is a content.
						This is a content.This is a content.This is a content.This is a content.
						This is a content.This is a content.This is a content.This is a content.
						This is a content.This is a content.This is a content.This is a content.
						This is a content.This is a content.This is a content.This is a content.
						</p>
						<div><Button className="hide-story-button" onClick={hideStory}>Done</Button></div>
					</div>
				</div>
			</div>

      <Card>
        <Card.Img variant="top" src={photo222}/>
				<button className="card-story" onClick={displayStory}>
						<img src={Story} alt="story" />
					</button>
      </Card>
			<div id="card-story-3">
				<div>
					<div className="card-story-img">
						<img src={photo222} alt="222" />
					</div>
					<div className="card-story-content">
						<h3>ABC</h3>
						<p>This is a content.This is a content.This is a content.
						This is a content.This is a content.This is a content.This is a content.
						This is a content.This is a content.This is a content.This is a content.
						This is a content.This is a content.This is a content.This is a content.
						This is a content.This is a content.This is a content.This is a content.
						This is a content.This is a content.This is a content.This is a content.
						This is a content.This is a content.This is a content.This is a content.
						This is a content.This is a content.This is a content.This is a content.
						</p>
						<div><Button className="hide-story-button" onClick={hideStory}>Done</Button></div>
					</div>
				</div>
			</div>
    </CardGroup>

    <br></br>

    <CardGroup>
      <Card>
        <Card.Img variant="top" src={photo444} />
				<button className="card-story" onClick={displayStory}>
						<img src={Story} alt="story" />
					</button>
      </Card>
      <Card>
        <Card.Img variant="top" src={photo555} />
				<button className="card-story" onClick={displayStory}>
						<img src={Story} alt="story" />
					</button>
      </Card>
      <Card>
        <Card.Img variant="top" src={photo666}/>
				<button className="card-story" onClick={displayStory}>
						<img src={Story} alt="story" />
					</button>
      </Card>
    </CardGroup>

    <br></br>

    <CardGroup>
      <Card>
        <Card.Img variant="top" src={photo777} />
				<button className="card-story" onClick={displayStory}>
						<img src={Story} alt="story" />
					</button>
      </Card>
      <Card>
        <Card.Img variant="top" src={photo888} />
				<button className="card-story" onClick={displayStory}>
						<img src={Story} alt="story" />
					</button>
      </Card>
      <Card>
        <Card.Img variant="top" src={photo999}/>
				<button className="card-story" onClick={displayStory}>
						<img src={Story} alt="story" />
					</button>
      </Card>
    </CardGroup>

    <br></br>

    <CardGroup>
      <Card>
        <Card.Img variant="top" src={photo1000} />
				<button className="card-story" onClick={displayStory}>
						<img src={Story} alt="story" />
					</button>
      </Card>
      <Card>
        <Card.Img variant="top" src={photo1100} />
				<button className="card-story" onClick={displayStory}>
						<img src={Story} alt="story" />
					</button>
      </Card>
      <Card>
        <Card.Img variant="top" src={photo1200}/>
				<button className="card-story" onClick={displayStory}>
						<img src={Story} alt="story" />
					</button>
      </Card>
    </CardGroup>
    </div>
  );
};

export default Second;

import styles from "./Style.css";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

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


const Second = () => {
  return (
    <div className={`${styles.second} container sections-padding`}>
      <div className="news">
        <h2>OUR GALLERY</h2>
      </div>

      <br></br>

      <CardGroup>
      <Card>
        <Card.Img variant="top" src={photo111} />
      </Card>

      <Card>   
        <Card.Img variant="top" src={photo333} />
      </Card>

      <Card>
        <Card.Img variant="top" src={photo222}/>
      </Card>

    </CardGroup>

    <br></br>

    <CardGroup>
      <Card>
        <Card.Img variant="top" src={photo444} />
      </Card>
      <Card>
        <Card.Img variant="top" src={photo555} />
      </Card>
      <Card>
        <Card.Img variant="top" src={photo666}/>
      </Card>
    </CardGroup>

    <br></br>

    <CardGroup>
      <Card>
        <Card.Img variant="top" src={photo777} />
      </Card>
      <Card>
        <Card.Img variant="top" src={photo888} />
      </Card>
      <Card>
        <Card.Img variant="top" src={photo999}/>
      </Card>
    </CardGroup>

    <br></br>

    <CardGroup>
      <Card>
        <Card.Img variant="top" src={photo1000} />
      </Card>
      <Card>
        <Card.Img variant="top" src={photo1100} />
      </Card>
      <Card>
        <Card.Img variant="top" src={photo1200}/>
      </Card>
    </CardGroup>
    </div>
  );
};

export default Second;

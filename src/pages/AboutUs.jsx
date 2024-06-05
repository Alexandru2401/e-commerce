import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import clothing from "../assests/clothing.jpg";
import deals from "../assests/deals.jpg";
import newArrive from "../assests/newArrive.jpg";
import photo from "../assests/photo.jpg";
import women from "../assests/women.png";
export default function AboutUs() {
  return (
    <div className="d-flex align-items-center flex-column m-4">
      <h2 className="m-1">About us</h2>
      <div
        className="d-flex flex-column align-items-center justify-content-center text-center"
        style={{ width: "80%" }}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          asperiores aliquid iusto porro corporis, eligendi necessitatibus
          perspiciatis exercitationem eum sed ipsam quaerat dolorem quod placeat
          amet nemo ratione, maiores totam.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          quaerat similique, quae deserunt quasi ea cupiditate ullam molestias!
          Voluptas molestias, totam officia repellat quis dolore consequuntur
          eaque quisquam optio soluta.
        </p>
      </div>
      <Container className="m-4">
        <Row noGutters>
          <Col xs={12} md={6} className="image-container">
            <img
              src={photo}
              style={{ width: "100%", height: "600px", objectFit: "cover" }}
              className="responsive-image"
            />
            <div className="overlay-text">Free shipping</div>
          </Col>

          <Col xs={12} md={6} className="image-container">
            <img
              src={clothing}
              style={{ width: "100%", height: "600px", objectFit: "cover" }}
              className="responsive-image"
            />
            <div className="overlay-text">30 days return</div>
          </Col>
        </Row>
        <Row noGutters className="mt-4">
          <Col xs={12} md={4} className="image-container">
            <img
              src={deals}
              style={{ width: "100%", height: "400px", objectFit: "cover" }}
              className="responsive-image"
            />
            <div className="overlay-text">100% payment secure</div>
          </Col>
          <Col xs={12} md={4} className="image-container">
            <img
              src={newArrive}
              style={{ width: "100%", height: "400px", objectFit: "cover" }}
              className="responsive-image"
            />
            <div className="overlay-text">For him</div>
          </Col>
          <Col xs={12} md={4} className="image-container">
            <img
              src={women}
              style={{ width: "100%", height: "400px", objectFit: "cover" }}
              className="responsive-image"
            />
            <div className="overlay-text">For her</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

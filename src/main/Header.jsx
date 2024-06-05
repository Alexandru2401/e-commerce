import Card from "react-bootstrap/Card";
import deals from "../assests/deals.jpg";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
export default function Header() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${deals})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "80vh",
          width: "100%",
          position: "relative",
        }}
      >
        <div className="d-flex align-items-center justify-content-center">
          <p
            style={{
              position: "absolute",
              top: "50%",
              color: "#FFF",
              fontWeight: "bold",
              backgroundColor: "#0a58ca",
            }}
            className="fs-5 p-1"
          >
            With its wide range of products, E-com is the right place where you
            can find anything you need!
          </p>
        </div>
      </div>
      <div className="d-flex justify-content-around">
        <Card style={{ width: "18rem" }}>
          <Card.Body
            style={{ backgroundColor: "#FFA62F" }}
            className="d-flex justify-content-around flex-column"
          >
            <Card.Title>Free shipping</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Just for you
            </Card.Subtitle>
            <Card.Text>On first order or order above 150$</Card.Text>
            <Card.Link>
              <Link to="/offers">
                <Button>Buy now</Button>
              </Link>
            </Card.Link>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Body
            style={{ backgroundColor: "#FFA62F" }}
            className="d-flex justify-content-around flex-column"
          >
            <Card.Title>30 days return</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Just for you
            </Card.Subtitle>
            <Card.Text>
              Simply return it whitin 30 days for an exchange
            </Card.Text>
            <Card.Link>
              <Link to="/offers">
                <Button>Buy now</Button>
              </Link>
            </Card.Link>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Body
            style={{ backgroundColor: "#FFA62F" }}
            className="d-flex justify-content-around flex-column"
          >
            <Card.Title>100% payment secure</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Just for you
            </Card.Subtitle>
            <Card.Text>
              Simply return it whitin 30 days for an exchange
            </Card.Text>
            <Card.Link>
              <Link to="/offers">
                <Button>Buy now</Button>
              </Link>
            </Card.Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

import Card from "react-bootstrap/Card";

function TestimonialCard(props) {
  return (
    <Card style={{ width: "20rem", minHeight: "300px" }} className="m-3">
      <Card.Img
        variant="top"
        src={props.img}
        style={{ height: "200px" }}
        className="m-2"
      />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text> {props.description}</Card.Text>
        <Card.Text className="d-flex align-items-center">
          {" "}
          {props.rating}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#FFBF00"
            class="bi bi-star-fill"
            viewBox="0 0 16 16"
          >
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
          </svg>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default TestimonialCard;

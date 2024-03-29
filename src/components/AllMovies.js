import { Col, Container, Row } from "react-bootstrap";
import { Card } from "react-bootstrap";
import data from "./movies.json"

function AllMovies() {
    return (
        <div>
            <Container fluid style={{ padding: "5%" }}>
                <Row style={{ textAlign: "center" }}>
                    {data.map((mov) =>
                        <Col onClick={() => window.location.href = "/movies/" + mov.id} id={mov.id} xs={6} md={4} lg={3} style={{ marginBottom: "2%" }}>
                            <Card style={{ cursor: "pointer" }}>
                                <Card.Img variant="top" src={mov.image} />
                                <Card.Body>
                                    <Card.Title>{mov.title}</Card.Title>
                                    <Card.Text>{mov.actor}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    )}
                </Row>
            </Container>
        </div >
    );
}

export default AllMovies;
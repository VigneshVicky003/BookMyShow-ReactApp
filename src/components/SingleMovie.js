import { Col, Container, Row } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { useParams } from "react-router";
import data from "./movies.json"

function SingleMovie() {
    const { movid } = useParams();
    // console.log(movid);
    return (
        <div>
            <Container fluid style={{ padding: "5%" }}>
                <Row style={{ textAlign: "center" }}>
                    {data.map((mov) => {
                        if (mov.id == movid)
                            return (
                                <Col id={mov.id} xs={6} md={4} lg={3} style={{ marginBottom: "2%" }}>
                                    <Card>
                                        <Card.Img variant="top" src={mov.image} />
                                        <Card.Body>
                                            <Card.Title>{mov.title}</Card.Title>
                                            <Card.Text>{mov.actor}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                    }
                    )}
                </Row>
            </Container>
        </div >
    );
}

export default SingleMovie;
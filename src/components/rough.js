import { Col, Container, Row } from "react-bootstrap";
import { Card } from "react-bootstrap";

function AllMovies() {
    return (
        <div>
            <Container fluid style={{ padding: "5%" }}>
                <Row style={{ textAlign: "center" }}>
                    <Col xs={6} md={4} lg={3} style={{ marginBottom: "2%" }}>
                        <Card>
                            <Card.Img variant="top" src="logo512.png" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    movie name
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={6} md={4} lg={3} style={{ marginBottom: "2%" }}>
                        <Card>
                            <Card.Img variant="top" src="logo512.png" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    movie name
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={6} md={4} lg={3} style={{ marginBottom: "2%" }}>
                        <Card>
                            <Card.Img variant="top" src="logo512.png" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    movie name
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={6} md={4} lg={3} style={{ marginBottom: "2%" }}>
                        <Card>
                            <Card.Img variant="top" src="logo512.png" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    movie name
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={6} md={4} lg={3} style={{ marginBottom: "2%" }}>
                        <Card>
                            <Card.Img variant="top" src="logo512.png" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    movie name
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={6} md={4} lg={3} style={{ marginBottom: "2%" }}>
                        <Card>
                            <Card.Img variant="top" src="logo512.png" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    movie name
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={6} md={4} lg={3} style={{ marginBottom: "2%" }}>
                        <Card>
                            <Card.Img variant="top" src="logo512.png" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    movie name
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default AllMovies;
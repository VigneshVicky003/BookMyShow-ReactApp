import { Col, Container, Row } from "react-bootstrap";
import { Card } from "react-bootstrap";
import axios from "axios";
import { useState, useEffect } from "react";

function AllMoviesFetch() {
    const [data, setData] = useState([]);

    useEffect(async () => {
        try {
            const response = await axios.get('http://localhost:5000/movies');
            console.log(response);
            setData(response.data);
        } catch (error) {
            console.error(error);
        }
    }, []);

    return (
        <div>
            <Container fluid style={{ padding: "5%" }}>
                <Row style={{ textAlign: "center" }}>
                    {data.map((mov) =>
                        <Col onClick={() => window.location.href = "/movies/" + mov._id} id={mov._id} xs={6} md={4} lg={3} style={{ marginBottom: "2%" }}>
                            <Card style={{ cursor: "pointer" }}>
                                <Card.Img variant="top" src={mov.imageurl} />
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

export default AllMoviesFetch;
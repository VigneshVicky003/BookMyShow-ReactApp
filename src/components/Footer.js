import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '@restart/ui/esm/Button';

function Footer() {
    return (
        <div style={{ background: "black" }}>
            <Container>
                <Row style={{ padding: "3%" }}>
                    <Col xs={2}>
                        col1
                    </Col>
                    <Col xs={4}>
                        col2
                    </Col>
                    <Col xs={6} style={{ display: "flex", flexDirection: "row-reverse" }}>
                        <button style={{ background: "rgb(236, 94, 113)" }}>Conact Today</button>
                    </Col>
                </Row>
                <Row style={{ textAlign: "center", padding: "3%" }}>
                    <Col>
                        col1
                    </Col>
                    <Col>
                        col2
                    </Col>
                    <Col>
                        col3
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Footer;
import { Card, Button, Container, Row, Col } from 'react-bootstrap'

function Book(props) {
    return (
        <Card bg="dark" text="white" style={{ width: '18rem' }} className="justify-content-md-center m-3">
        <Card.Body>
            <Container>
                <Row>
                    <Card.Title>{props.series}</Card.Title>
                </Row>
                <Row>
                    <Card.Title>{props.issue}</Card.Title>
                </Row>
                <Row>
                    <Col>
                        <Col>
                            <Card.Text>{props.have ? "Yes" : "No"}</Card.Text>
                        </Col>
                        <Col>
                            <Button className="mb-2" variant="primary">Have</Button>
                        </Col>
                    </Col>
                    <Col />
                    <Col>
                        <Col>
                            <Card.Text>{props.need ? "Yes" : "No"}</Card.Text>
                        </Col>
                        <Col>
                            <Button className="mb-2" variant="primary">Need</Button>
                        </Col>
                    </Col>
                </Row>
            </Container>

        </Card.Body>
        </Card>
    );
}

export default Book;
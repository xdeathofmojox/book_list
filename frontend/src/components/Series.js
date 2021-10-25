import { Card, Container, Row } from 'react-bootstrap'

function Series(props) {

    const handleClick = (event) => {
        alert('Clickity');
        event.preventDefault();
      };

    return (
        <Card bg="dark" text="white" style={{ width: '18rem' }} className="justify-content-md-center m-3" onClick={handleClick}>
        <Card.Body>
            <Container>
                <Row>
                    <Card.Title>{props.series}</Card.Title>
                </Row>
            </Container>
        </Card.Body>
        </Card>
    );
}

export default Series;
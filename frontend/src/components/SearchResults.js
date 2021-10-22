import { bookData } from "../data";
import Book from "./Book"
import { Container, Row } from 'react-bootstrap'

function SearchResults() {
    return (
        <>
        <Container>
            <Row className="justify-content-md-left">
                {bookData.map((data, key) => {
                    return (
                        <Book series={data.Name} issue={data.Issue} have={data.Have} need={data.Need}/>
                    );
                })}
            </Row>
        </Container>
        </>
  );
};

export default SearchResults;
import { bookData } from "../data";
import Book from "./Book"
import { Container, Row } from 'react-bootstrap'

function SearchResults() {
    return (
        <>
        <Container>
        {bookData.map((data, key) => {
            return (
                <Row className="justify-content-md-center m-3">
                    <Book series={data.Name} issue={data.Issue} have={data.Have} need={data.Need}/>
                </Row>
            );
        })}
        </Container>
        </>
  );
};

export default SearchResults;
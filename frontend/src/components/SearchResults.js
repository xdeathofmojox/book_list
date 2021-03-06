import { bookData } from "../data";
import Book from "./Book"
import Series from "./Series"
import { Container, Row } from 'react-bootstrap'

function SearchResults() {
    return (
        <>
        <Container>
            <Row className="justify-content-md-left">
                {bookData.map((data, key) => {
                    return (
                        <Book key={data.ID} series={data.Name} issue={data.Issue} have={data.Have} need={data.Need}/>
                    );
                })}
            </Row>
            <Series series={"test"} />
        </Container>
        </>
  );
};

export default SearchResults;
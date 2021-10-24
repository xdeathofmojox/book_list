import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

function SearchForm() {
    const [seriesNameSearchText, setSeriesNameSearchText] = useState("");

    const handleSubmit = (event) => {
        alert('A name was submitted: ' + seriesNameSearchText);
        event.preventDefault();
      };

    const handleChange = (event) => {
        setSeriesNameSearchText(event.target.value);
    }

    return (
        <>
            <h1>Search Form</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formSeriesName">
                    <Form.Label>Series Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Series Name" value={seriesNameSearchText.value} onChange={handleChange} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    )
}

export default SearchForm;
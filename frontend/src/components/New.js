import { Component, useState } from "react"

function New() {
    const [seriesNameText, setSeriesNameText] = useState("");

    const handleSubmit = (event) => {
        alert('A name was submitted: ' + seriesNameText);
        event.preventDefault();
      };

    const handleChange = (event) => {
        setSeriesNameText(event.target.value);
    };

    return (
        <>
        <h1>New Form</h1>
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
    );
}

export default New;
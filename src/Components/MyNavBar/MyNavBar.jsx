import React, { useRef } from "react";
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";
import ReactStars from "react-stars";
function MyNavBar({ setRate, setSearch }) {
    const ratingChanged = (newRating) => {
        setRate(newRating);
    };
    // we declare the input inside the variable
    let nameRef = useRef();
    // we are referring to input to change the value
    const onclickgetter = () => {
        setSearch(nameRef.current.value);
    };
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    color2={"#ffd700"}
                />
                <Form inline>
                    <FormControl
                        type="text"
                        placeholder="Search"
                        className="mr-sm-2"
                        ref={nameRef}
                    />

                    <Button variant="outline-info" onClick={onclickgetter}>
                        Search
                    </Button>
                </Form>
            </Navbar>
        </div>
    );
}

export default MyNavBar;

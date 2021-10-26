import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

function Registration() {
    const [username, setUsername] = useState("");
    const [emailaddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");

    function clearInput() {
        setUsername("");
        setEmailAddress("");
        setPassword("");
    }

    async function UserPost() {
        // console.log(username, emailaddress, password);
        const userDetails = {
            "username": username,
            "email": emailaddress,
            "password": password
        }
        // userDetails.username = 'nik';
        // console.log(userDetails);
        await axios.post('http://localhost:5000/user-register', userDetails)
        .then((data)=>{
            Swal.fire({
                title: `<strong>${data.data.message}</strong>`,
                icon: 'success',
                showCloseButton: true
            });
            clearInput();}
        )
        .catch((err)=>
            Swal.fire({
                title: `<strong>${err.message}</strong>`,
                icon: 'error',
                showCloseButton: true
            })
        );
        // const response = await axios.post('http://localhost:5000/user-register', userDetails);
        // console.log(response);
    }

    return (
        <div>
            <Container style={{ padding: "7%" }}>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter Username" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control value={emailaddress} onChange={(e) => setEmailAddress(e.target.value)} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                    </Form.Group>

                    <Button variant="primary" onClick={UserPost}>
                        Submit
                    </Button>
                </Form>
            </Container>
        </div>
    );
}

export default Registration;

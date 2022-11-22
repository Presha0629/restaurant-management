import React from 'react'
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const LoginForm = () => {
  return (
    <Container>
        <Row>
            <Col>
            <h1 className="text-info text-center">Client Login</h1>  
            <hr />
            <Form>
                <Form.Group>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    required
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Password </Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        placeholder="password"
                        required
                    />
                </Form.Group>
                <Button type = "submit">Login</Button>
            </Form> 
            <hr/>
            </Col>
        </Row>
        <Row>
            <Col>
            <a href="#!">Forgot Password?</a>
            </Col>
        </Row>
      
    </Container>
  );
}

export default LoginForm;

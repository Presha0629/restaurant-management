import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const SignupForm = ({ handleOnChange, handleOnSubmit, formSwitcher, name, email, password, confirmPassword, userType }) => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-info text-center">Sign Up</h1>
          <hr />
          <Form autoComplete="off" onSubmit={handleOnSubmit}>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={name}
                onChange={handleOnChange}
                placeholder="Enter Name"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={email}
                onChange={handleOnChange}
                placeholder="Enter Email"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={password}
                onChange={handleOnChange}
                placeholder="password"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleOnChange}
                placeholder="confirm password"
                required
              />
            </Form.Group>
          <Form.Group>
            <Form.Label>Login as:</Form.Label>
            <Form.Control
              name='userType'
              as="select"
              value={userType}
              onChange={handleOnChange}
            >
              <option value="">Select one</option>
              <option value="admin">Admin</option>
              <option value="customer">Customer</option>
            </Form.Control>
          </Form.Group>
            <Button type="submit">Sign Up</Button>
          </Form>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          {(
            <a href="#!" onClick={() => formSwitcher('login')}>
              Already have an account? Login here.
            </a>
          )}
        </Col>
      </Row>
    </Container>
  );
};

SignupForm.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  formSwitcher: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  confirmPassword: PropTypes.string.isRequired,
};

export default SignupForm;

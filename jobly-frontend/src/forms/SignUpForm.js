import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import JoblyApi from "../api";
import "./SignUpForm.css";

const SignUpForm = ({ signUp }) => {
  const history = useHistory();
  const formInitialVal = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
  };
  const [formData, setFormData] = useState(formInitialVal);

  const handleChange = (e) => {
    setFormData((data) => {
      return { ...data, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signUp(formData);
    setFormData(formInitialVal);
    history.push("/companies");
  };

  return (
    <div className="wrapper">
      <Form onSubmit={handleSubmit}>
        <FormGroup tag="fieldset">
          <legend> Sign Up</legend>
          <FormGroup>
            <Label for="username">Username</Label>
            <Input
              type="text"
              id="username"
              name="username"
              autoComplete="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="firstname">FirstName</Label>
            <Input
              type="text"
              id="firstname"
              name="firstName"
              autoComplete="firstname"
              placeholder="FirstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="lastname">LastName</Label>
            <Input
              type="text"
              id="lastname"
              name="lastName"
              autoComplete="lastname"
              placeholder="LastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              id="password"
              name="password"
              autoComplete="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
          </FormGroup>
          <Button color="primary">Submit</Button>
        </FormGroup>
      </Form>
    </div>
  );
};
export default SignUpForm;

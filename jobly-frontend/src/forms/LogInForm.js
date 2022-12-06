import React, { useState } from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import { useHistory } from "react-router-dom";
import "./SignUpForm.css";

const LogInForm = ({ logIn }) => {
  const initialVal = { username: "", password: "" };
  const [formData, setFormData] = useState(initialVal);
  const history = useHistory();
  
  const handleChange = (event) => {
    setFormData((data) => {
      return { ...data, [event.target.name]: event.target.value };
    });
  };
  async function handleSubmit(event) {
    event.preventDefault();
    await logIn(formData);
    setFormData(initialVal);
    return history.push("/jobs");
  }

  return (
    <div className="wrapper">
      <Form onSubmit={handleSubmit}>
        <FormGroup tag="fieldset">
          <legend>Log In</legend>
          <FormGroup>
            <Label for="username">Username</Label>
            <Input
              id="username"
              name="username"
              placeholder="Username"
              type="text"
              autoComplete="username"
              value={formData.username}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              id="password"
              name="password"
              placeholder="Password"
              type="password"
              autoComplete="password"
              value={formData.password}
              onChange={handleChange}
            />
          </FormGroup>
          <Button color="primary">Log In</Button>
        </FormGroup>
      </Form>
    </div>
  );
};
export default LogInForm;

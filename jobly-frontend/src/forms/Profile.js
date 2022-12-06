import React, { useContext, useState } from "react";
import userContext from "../helpers/userContext";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import JoblyApi from "../api";
import { Link, useHistory } from "react-router-dom";

const Profile = () => {
  const initialVal = { firstName: "", lastName: "", email: "" };
  const [formData, setFormData] = useState(initialVal);
  const { currentUser, setCurrentUser } = useContext(userContext);
  const history = useHistory();

  function handleChange(event) {
    setFormData((data) => {
      return { ...data, [event.target.name]: event.target.value };
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const { username } = currentUser;
    const user = await JoblyApi.updateUser(username, formData);
    setCurrentUser(user);
    return history.push("/jobs");
  }

  return (
    <div className="wrapper">
      <Form onSubmit={handleSubmit}>
        <FormGroup tag="fieldset">
          <legend>Username: {currentUser.username}</legend>
          <FormGroup>
            <Label for="firstName">firstName</Label>
            <Input
              id="firstName"
              name="firstName"
              type="text"
              autoComplete="firstName"
              placeholder={currentUser.firstName}
              value={formData.firstName}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="lastName">lastName</Label>
            <Input
              id="lastName"
              name="lastName"
              type="text"
              autoComplete="lastName"
              placeholder={currentUser.lastName}
              value={formData.lastName}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="email">email</Label>
            <Input
              id="email"
              name="email"
              type="text"
              autoComplete="email"
              placeholder={currentUser.email}
              value={formData.email}
              onChange={handleChange}
            />
          </FormGroup>
          <Button color="primary" id="button">
            Save
          </Button>
          <Link to="/" id="button" className="btn btn-primary">
            Ignore
          </Link>
        </FormGroup>
      </Form>
    </div>
  );
};
export default Profile;

import React, { useContext } from "react";
import { Card, CardText, CardTitle, Button } from "reactstrap";
import JoblyApi from "../API";
import userContext from "../helpers/userContext";
import "./Jobs.css";

const JobCard = ({ job }) => {
  const { currentUser, application, setApplication } = useContext(userContext);
  const username = currentUser.username;

  async function handleClick(event) {
    // event.preventDefault();
    await JoblyApi.apply(username, job.id);
    await setApplication([...application, job.id]);
  }

  return (
    <Card>
      <CardTitle tag="h4">{job.title}</CardTitle>
      <CardTitle tag="p"> {job.companyName}</CardTitle>
      <CardText></CardText>
      <CardText tag="h6">
        <b>Salary: </b>
        {job.salary}
      </CardText>
      <CardText tag="h6">
        <b>Equity: </b>
        {job.equity}
      </CardText>
      {application.includes(job.id) ? (
        <Button color="danger" disabled>
          Applied
        </Button>
      ) : (
        <Button color="danger" onClick={handleClick}>
          Apply
        </Button>
      )}
    </Card>
  );
};

export default JobCard;

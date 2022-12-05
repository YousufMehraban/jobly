import React from "react";
import { Link } from "react-router-dom";
import { Card, CardText, CardTitle } from "reactstrap";
import "./Companies.css";

const CompanyCard = ({ company }) => {
  return (
    <Card key={company.handle}>
      <Link to={`companies/${company.handle}`}>
          <CardTitle tag="h3">{company.name}</CardTitle>
          <CardText tag="p">{company.description}</CardText>
          <CardText></CardText>
          <CardText tag="h6">
            <b>Company size:</b> {company.numEmployees} employees.
          </CardText>
      </Link>
    </Card>
  );
};
export default CompanyCard;

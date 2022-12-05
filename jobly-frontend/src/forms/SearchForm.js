import React, { useState } from "react";
import { Form, Input, Button } from "reactstrap";
import "./SearchForm.css";

const SearchForm = ({search}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  };
const handleSubmit = (e)=>{
    e.preventDefault()
    search(searchTerm.trim() || undefined)
    setSearchTerm(searchTerm.trim())
}

  return (
    <Form onSubmit={handleSubmit} id="searchForm">
      <Input
        placeholder="Enter Search Term"
        name="searchTerm"
        value={searchTerm}
        onChange={handleChange}
      />
      <Button color="primary">Search</Button>
    </Form>
  );
};
export default SearchForm;

import React, { useState, useEffect } from "react";
import "./Companies.css";
import JoblyApi from "../API.js";
import CompanyDetail from "./CompanyCard";
import SearchForm from "../forms/SearchForm";

const Companies = () => {
  const [companies, setCompanies] = useState("");

  useEffect(() => {
    async function getCompanies() {
      const res = await JoblyApi.getCompanies();
      setCompanies(res);
    }
    getCompanies();
  }, []);

  async function search(term) {
    const res = await JoblyApi.getCompanies(term);
    setCompanies(res);
  }

  return (
    <div id="wrapper">
      <div id="search">
        <SearchForm search={search} />
      </div>
      {companies
        ? companies.map((company) => {
            return <CompanyDetail company={company} key={company.handle} />;
          })
        : "loading........."}
    </div>
  );
};
export default Companies;

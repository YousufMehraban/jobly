import React, { useState, useEffect } from "react";
import JoblyApi from "../API";
import JobCard from "./JobCard";
import SearchForm from "..//forms/SearchForm";
import "./Jobs.css";

const Jobs = () => {
  const [jobs, setJobs] = useState("");

  useEffect(() => {
    async function getJobs() {
      let res = await JoblyApi.getJobs();
      setJobs(res);
    }
    getJobs();
  }, []);

  async function search(term) {
    const res = await JoblyApi.getJobs(term);
    setJobs(res);
  }

  return (
    <div id="wrapper">
      <div id="search">
        <SearchForm search={search} />
      </div>
      <h2>All Avialable Jobs:</h2>
      {jobs
        ? jobs.map((job) => {
            return <JobCard job={job} key={job.id} />;
          })
        : "loading........."}
    </div>
  );
};

export default Jobs;

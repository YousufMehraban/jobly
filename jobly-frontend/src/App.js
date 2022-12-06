import React, { useEffect, useState } from "react";
import jwt from "jsonwebtoken";
import JoblyApi from "./api";
import "./App.css";
import NavBar from "./Navbar";
import Routes from "./Routes";
import userContext from "./helpers/userContext";
import { BrowserRouter } from "react-router-dom";
import useLocalStorage from "./helpers/useLocalStorage";

function App() {
  const [currentUser, setCurrentUser] = useState("");
  const [token, setToken] = useLocalStorage("userToken");
  const [application, setApplication] = useState("");
  const [infoLoaded, setInfoLoaded] = useState(false);

  async function logIn(data) {
    const res = await JoblyApi.login(data);
    setToken(res);
    JoblyApi.token = res;
  }

  async function signUp(data) {
    const res = await JoblyApi.register(data);
    setToken(res);
    JoblyApi.token = res;
  }

  function logOut() {
    setCurrentUser(null);
    setToken(null);
    JoblyApi.token = null;
  }

  useEffect(() => {
    async function getUser() {
      if (token) {
        let { username } = jwt.decode(token);
        JoblyApi.token = token;
        const res = await JoblyApi.getUser(username);
        setCurrentUser(res);
        setApplication(res.applications);
      }
      setInfoLoaded(true);
    }
    setInfoLoaded(false);
    getUser();
  }, [token]);

  if (!infoLoaded) return "loading...";
  return (
    <BrowserRouter>
      <userContext.Provider
        value={{ currentUser, setCurrentUser, application, setApplication }}
      >
        <div className="App">
          <NavBar logOut={logOut} />
          <Routes logIn={logIn} signUp={signUp} />
        </div>
      </userContext.Provider>
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import {Jumbotron} from "react-bootstrap"
import LoginForm  from "../../components/login/LoginForm";
import "./entry.css";

const Entry = () => {
  return (
    <div className="Entry-page bg-info">
      <Jumbotron >
        <LoginForm/>
      </Jumbotron>
    </div>
  );
};

export default Entry;

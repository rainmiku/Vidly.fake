import React from "react";
import Joi from "joi-browser";
import Form from "./form";

class RegisterForm extends Form {
  state = { data: { username: "", password: "", name: "" }, errors: {} };

  schema = {
    username: Joi.string()
      .email({ minDomainAtoms: 2 })
      .label("Username"),
    password: Joi.string()
      .alphanum()
      .min(5)
      .required()
      .label("Password"),
    name: Joi.string()
      .required()
      .label("Name")
  };

  doSubmit() {
    //call server;
    console.log("submitted");
  }

  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name")}

          {this.renderButton("Regist")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;

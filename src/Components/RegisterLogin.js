import React, { Component } from "react";
import userServices from "../Services/userServices";
import { withRouter } from "react-router-dom";
class RegisterLogin extends Component {
  state = {
    email: "",
    password: "",
    reg_email: "",
    reg_password: ""
  };
  onChangeREGData = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onChangeLOGData = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  registerUser = async () => {
    let data = {
      reg_email: this.state.reg_email,
      reg_password: this.state.reg_password
    };
    if (data.reg_email === "" || data.reg_password === "") {
      console.log("Fill the complete data");
    } else {
      let details = await userServices.userRegister(data);
      if (details) {
        console.log(details.data.message);
        this.setState({ reg_email: "", reg_password: "" });
      }
    }
  };

  loginUser = async () => {
    let data = {
      email: this.state.email,
      password: this.state.password
    };

    if (data.email === "" || data.password === "") {
      console.log("Fill the complete data");
    } else {
      console.log(data);  
      let details = await userServices.userLogin(data);
      if (details) {
        console.log(details.data.message);
        this.props.history.push({ pathname: "/welcome" });
      }
    }
  };
  render() {
    return (
      <div>
        <div className="container">
          <h2>..........Register..........</h2>
          <br />
          <br />
          <div className="form-group">
            <label for="usr">Name:</label>
            <input
              type="text"
              className="form-control w-50"
              name="reg_email"
              value={this.state.reg_email}
              onChange={this.onChangeREGData}
            />
          </div>
          <div className="form-group">
            <label for="pwd">Password:</label>
            <input
              type="password"
              className="form-control w-50"
              name="reg_password"
              value={this.state.reg_password}
              onChange={this.onChangeREGData}
            />
          </div>
          <button className="btn btn-success" onClick={this.registerUser}>
            REGISTER
          </button>

          <br />
          <br />

          <h2>..........Login..........</h2>
          <br />
          <br />
          <div className="form-group">
            <label for="usr">Name:</label>
            <input
              type="text"
              className="form-control w-50"
              name="email"
              onChange={this.onChangeLOGData}
            />
          </div>
          <div className="form-group">
            <label for="pwd">Password:</label>
            <input
              type="password"
              className="form-control w-50"
              name="password"
              onChange={this.onChangeLOGData}
            />
          </div>
          <button className="btn btn-primary" onClick={this.loginUser}>
            LOGIN
          </button>
        </div>
      </div>
    );
  }
}
export default withRouter(RegisterLogin);

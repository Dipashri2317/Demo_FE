import React, { Component } from "react";
import userServices from "../Services/userServices";

export default class Welcome extends Component {
  getDetails = async () => {
    let details = await userServices.getDetails();
    console.log(details.data.message);
  };

  componentWillMount(){
    let token = sessionStorage.getItem('key');
    if(!token){
      this.props.history.push({ pathname: "/" });
    }
  }
  home =async()=>{
    this.props.history.push({ pathname: "/home" });
  }

  logout = async () => {
    await userServices.logout();
    this.props.history.push({ pathname: "/" });
  };


  render() {
    return (
      <div className="container">
        <h1>!..........Welcome..........!</h1>
        <br />
        <br />
        <button className="btn btn-warning" onClick={this.getDetails}>
          Get Details
        </button>
        <br />
        <br />
        <button className="btn btn-warning" onClick={this.home}>
         Home
        </button>
        <br />
        <br />
        <button className="btn btn-danger" onClick={this.logout}>
          LOG OUT
        </button>
      </div>
    );
  }
}

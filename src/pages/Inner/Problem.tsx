import React, { Component } from "react";
import axios from "axios";

export default class Problem extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      name: "",
      email: "",
      problem: "",
      btn_class: "btn btn-primary btn-block mb-4",
    };
    this.handleNameInput = this.handleNameInput.bind(this);
    this.handleEmailInput = this.handleEmailInput.bind(this);
    this.handleProblemInput = this.handleProblemInput.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  handleNameInput(e: any) {
    e.preventDefault();
    this.setState({ name: e.target.value });
  }

  handleEmailInput(e: any) {
    e.preventDefault();
    this.setState({ email: e.target.value });
  }

  handleProblemInput(e: any) {
    e.preventDefault();
    this.setState({ problem: e.target.value });
  }

  submitForm(e: any) {
    e.preventDefault();
    (async () => {
      await axios
        .post(`${process.env.REACT_APP_BASE_URL!}client/important-problems/`, {
          full_name: this.state.name,
          email: this.state.email,
          statement: this.state.problem,
        })
        .then((res) => {
          this.setState({ btn_class: "btn btn-success btn-block mb-4" });
          alert("Message sent successfully...");
        })
        .catch((err) => {
          this.setState({ btn_class: "btn btn-danger btn-block mb-4" });
          console.log(
            err.message,
            `${process.env.API}/client/important-problems/`
          );
        })
        .finally(() => {
          setTimeout(() => {
            this.setState({ btn_class: "btn btn-primary btn-block mb-4" });
          }, 4000);
        });
    })();
  }

  render() {
    return (
      <form className="my-5 w-75 mx-auto">
        <div className="row mb-4">
          <div className="col">
            <div className="form-outline">
              <input
                type="text"
                id="form6Example1"
                className="form-control"
                onChange={this.handleNameInput}
              />
              <label className="form-label" htmlFor="form6Example1">
                Full name
              </label>
            </div>
          </div>
        </div>

        <div className="form-outline mb-4">
          <input
            type="email"
            id="form6Example5"
            className="form-control"
            onChange={this.handleEmailInput}
          />
          <label className="form-label" htmlFor="form6Example5">
            Email
          </label>
        </div>

        <div className="form-outline mb-4">
          <textarea
            className="form-control"
            id="form6Example7"
            onChange={this.handleProblemInput}
            style={{ height: "20vh", resize: "none" }}
          ></textarea>
          <label className="form-label" htmlFor="form6Example7">
            Describe the problem
          </label>
        </div>

        <button
          type="button"
          className={this.state.btn_class}
          onClick={this.submitForm}
        >
          Send the problem statement
        </button>
      </form>
    );
  }
}

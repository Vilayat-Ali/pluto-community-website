import React, { Component } from 'react';
import axios from 'axios';

export default class Join extends Component<any, any>{

  intervalID: any

  constructor(props: any){

    super(props);

    this.state = {
      full_name: '',
      email: '',
      phone: '',
      description: '',
      formStatus: false,
      err: false,
      btnText: 'Request Joining'
    }

    this.intervalID = 0;

    this.handleNameInput = this.handleNameInput.bind(this);
    this.handleEmailInput = this.handleEmailInput.bind(this);
    this.handlePhoneInput = this.handlePhoneInput.bind(this);
    this.handleDescriptionInput = this.handleDescriptionInput.bind(this);
    this.submitData = this.submitData.bind(this);

  }

  componentWillUnmount(){
    clearInterval(this.intervalID);
  }

  handleNameInput(e: any){
    e.preventDefault();
    this.setState({full_name: e.target.value});
  }

  handleEmailInput(e: any){
    e.preventDefault();
    this.setState({email: e.target.value});
  }

  handlePhoneInput(e: any){
    e.preventDefault();
    this.setState({phone: e.target.value});
  }

  handleDescriptionInput(e: any){
    e.preventDefault();
    this.setState({description: e.target.value});
  }

  submitData(e: any){
    (async () =>{
        await axios.post(
          'http://127.0.0.1:8000/api/applicant/',
          
          {
            full_name: this.state.full_name,
            email: this.state.email,
            phone: this.state.phone,
            description: this.state.description
          }
        ).then( (res: any) => {
          this.setState({ formStatus: true, btnText: 'Requested Successfully ✅' });
          this.intervalID = setInterval(() => {
            this.setState( {formStatus: false, btnText: 'Request Joining'} );
          }, 2000);
        }).catch((err: any) => {
          this.setState({ err: true, btnText: 'Request Failed❗' })
        })
    })();
  }

  render() {
    return (
      <>
        <form className="my-5 w-75 mx-auto">
            <div className="row mb-4">
                <div className="col">
                <div className="form-outline">
                    <input type="text" id="form6Example1" className="form-control" onChange={this.handleNameInput}/>
                    <label className="form-label" htmlFor="form6Example1">Full name</label>
                </div>
                </div>
            </div>

            <div className="form-outline mb-4">
                <input type="email" id="form6Example5" className="form-control" onChange={this.handleEmailInput}/>
                <label className="form-label" htmlFor="form6Example5">Email</label>
            </div>

            <div className="form-outline mb-4">
                <input type="text" id="form6Example6" className="form-control" onChange={this.handlePhoneInput}/>
                <label className="form-label" htmlFor="form6Example6">Phone</label>
            </div>

            <div className="form-outline mb-4">
                <textarea className="form-control" id="form6Example7" onChange={this.handleDescriptionInput} style={{height: '20vh', resize: 'none'}}></textarea>
                <label className="form-label" htmlFor="form6Example7">Describe yourself</label>
            </div>

            <button type="button" className={ (this.state.formStatus) ? "btn btn-success btn-block mb-4" : (this.state.err)?"btn btn-danger btn-block mb-4":"btn btn-primary btn-block mb-4"} onClick={this.submitData}>
            {this.state.btnText}
            </button>
        </form>
      </>
    )
  }
}

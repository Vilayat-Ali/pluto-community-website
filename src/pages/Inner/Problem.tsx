import React, { Component } from 'react'

export default class Problem extends Component<any, any> {
    constructor(props: any){
        super(props);
        this.state = {
            name: '',
            email: '',
            problem: ''
        };
        this.handleNameInput = this.handleNameInput.bind(this);
        this.handleEmailInput = this.handleEmailInput.bind(this);
        this.handleProblemInput = this.handleProblemInput.bind(this);
        this.printVal = this.printVal.bind(this);
    }

    handleNameInput(e:any){
        e.preventDefault();
        this.setState({name: e.target.value});
    }

    handleEmailInput(e:any){
        e.preventDefault();
        this.setState({email: e.target.value});
    }

    handleProblemInput(e:any){
        e.preventDefault();
        this.setState({problem: e.target.value});
    }

    printVal(e: any){
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
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
                <textarea className="form-control" id="form6Example7" onChange={this.handleProblemInput} style={{height: '20vh', resize: 'none'}}></textarea>
                <label className="form-label" htmlFor="form6Example7">Describe the problem</label>
            </div>

            <button type="button" className="btn btn-primary btn-block mb-4" onClick={this.printVal}>Request Joining</button>
        </form>
        )
    }
}

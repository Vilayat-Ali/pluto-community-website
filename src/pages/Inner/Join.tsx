import React, { Component } from 'react'

export default class Join extends Component {
  render() {
    return (
      <>
        <form className="my-5 w-75 mx-auto">
            <div className="row mb-4">
                <div className="col">
                <div className="form-outline">
                    <input type="text" id="form6Example1" className="form-control" />
                    <label className="form-label" htmlFor="form6Example1">Full name</label>
                </div>
                </div>
            </div>

            <div className="form-outline mb-4">
                <input type="email" id="form6Example5" className="form-control" />
                <label className="form-label" htmlFor="form6Example5">Email</label>
            </div>

            <div className="form-outline mb-4">
                <input type="text" id="form6Example6" className="form-control" />
                <label className="form-label" htmlFor="form6Example6">Phone</label>
            </div>

            <div className="form-outline mb-4">
                <textarea className="form-control" id="form6Example7" style={{height: '20vh', resize: 'none'}}></textarea>
                <label className="form-label" htmlFor="form6Example7">Describe yourself</label>
            </div>

            <button type="submit" className="btn btn-primary btn-block mb-4">Request Joining</button>
        </form>
      </>
    )
  }
}

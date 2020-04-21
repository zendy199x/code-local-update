import React, { Component, Fragment } from 'react';

class Account extends Component {
    render() {
        return (
            <Fragment>

                {/* BEGIN ACCOUNT */}
                <section className="account py-5">
                    <div className="container py-5">
                        <div className="row">
                            <div className="col-md-6">
                                <h4>LOGIN</h4>
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="email">Username or email address <span style={{ color: 'red' }}>*</span></label>
                                        <input type="email" className="form-control" id="email" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="pwd">Password: <span style={{ color: 'red' }}>*</span></label>
                                        <input type="password" className="form-control" id="pwd" />
                                    </div>
                                    <div className="form-group form-check px-0">
                                        <button type="submit" className="btn btn-primary mr-5">LOGIN</button>
                                        <label className="form-check-label">
                                            <input className="form-check-input" type="checkbox" /> Remember me
                                        </label>
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-6">
                                <h4>REGISTER</h4>
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="email">Email address <span style={{ color: 'red' }}>*</span></label>
                                        <input type="email" className="form-control" id="email" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="pwd">Password: <span style={{ color: 'red' }}>*</span></label>
                                        <input type="password" className="form-control" id="pwd" />
                                    </div>
                                    <button type="submit" className="btn btn-primary">REGISTER</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                {/* END ACCOUNT */}


            </Fragment>
        );
    }
}

export default Account;
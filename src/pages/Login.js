import React from 'react';
import {Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { NavBar, Footer } from '../components';

const Login = () => {    
        return (
        <>
            <NavBar/>
            <Container>
                <Row className='d-flex  justify-content-center my-5'>
                    <Card style={{ maxWidth: '40rem', width: '100%' }}>
                        <Card.Body>
                            <h2 className="text-center mb-0 mt-3 mb-2">Welcome back!</h2>
                            <p className="text-center text-muted mt-1 mb-4">Enter your email address and password to access admin panel.</p>        

                            <form className="authentication-form" noValidate>
                                <div className="mb-4">
                                    <label className="form-label">Email Address</label>
                                    <div className="input-group">
                                        <span className="input-group-text">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail icon-dual"><g><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></g></svg>
                                        </span>
                                        <input placeholder="hello@inbox.com" value={"shreyu@coderthemes.com"} name="email" type="email" id="email" className="form-control"/>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label className="form-label">Password</label>
                                    <a className="float-end text-muted text-unline-dashed ms-1" href="/auth/forget-password">Forgot your password?</a>
                                    <div className="input-group">
                                        <span className="input-group-text">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-lock icon-dual"><g><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></g></svg>
                                        </span>
                                        <input placeholder="Enter your Password" value={"test"} name="password" type="password" id="password" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <div className="form-check">
                                            <input name="checkbox" type="checkbox" id="checkbox" className="form-check-input" defaultChecked/>
                                            <label title="" htmlFor="checkbox" className="form-check-label">Remember me</label>
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <Link to="/dashboard" className="text-center d-grid">
                                                <button type="submit"  className="btn btn-primary">Log In</button>
                                            </Link>
                                            
                                        </div>
                            </form>

                            <div className="py-3 text-center">
                                <span className="fs-16 fw-bold">OR</span>
                            </div>
                            <Row>
                                <Col xs={12} className="text-center mb-4">
                                    <Link to="#" className="btn btn-white mb-2 mb-sm-0 me-1">
                                        <i className="uil uil-google icon-google me-2"></i>
                                        With Google
                                    </Link>
                                    <Link to="#" className="btn btn-white mb-2 mb-sm-0">
                                        <i className="uil uil-facebook me-2 icon-fb"></i>
                                        With Facebook
                                    </Link>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
            <Footer/>
        </>   
    );
};

export default Login;

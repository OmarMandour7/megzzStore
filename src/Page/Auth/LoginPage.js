import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const LoginPage = () => {
    return (
            <Container style={{ minHeight: "680px" }}>
                <Row className="py-5 d-flex justify-content-center ">
                    <Col sm="12" className="d-flex flex-column w-100 mons ">
                        <label className="mx-auto title-login cor">Login</label>
                        <input
                            placeholder="Email..."
                            type="text"
                            className="user-input my-3 text-center mx-auto cor loginsh"
                        />
                        <input
                            placeholder="Password..."
                            type="password"
                            className="user-input text-center mx-auto cor loginsh"
                        />
                        <button className="btn-login mx-auto mt-4">Login</button>
                        <label className="mx-auto my-4 fs-3" style={{color :" var(--text-color)"}}>
                       Don't Have Account ?
                            <Link to="/register" style={{textDecoration:'none'}}>
                                <span style={{ cursor: "pointer" }} className="text-danger ms-4">
                                     Sign Up
                                </span>
                            </Link>
                        </label>



                    </Col>


                    <label className="mx-auto my-4">
                    <Link to="/admin/allproducts" style={{textDecoration:'none'}}>
                        <span style={{ cursor: "pointer" }} className="text-danger">
                             <i class="fa-solid fa-lock"></i>
                        </span>
                    </Link>

                    <Link to="/user/allorders" style={{textDecoration:'none'}}>
                        <span style={{ cursor: "pointer" }} className="text-danger mx-3">
                           <i class="fa-solid fa-user-tie"></i>
                        </span>
                    </Link>
                </label>
                </Row>
            </Container>
    )
}

export default LoginPage

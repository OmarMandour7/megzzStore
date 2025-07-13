import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";

const RegisterPage = () => {
    return (
       <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.4 }}
> <Container style={{ minHeight: "680px"}}>
        <Row className="py-5 d-flex justify-content-center hieght-search cor">
          <Col sm="12" className="d-flex flex-column ">
            <label className="mx-auto title-login">Register New User </label>
            <input
              placeholder="UserName ..."
              type="text"
              className="user-input mt-3 text-center mx-auto loginsh"
            />
            <input
              placeholder="Email..."
              type="text"
              className="user-input mt-3 text-center mx-auto loginsh"
            />
            <input
              placeholder="Phone Number..."
              type="number"
              className="user-input mt-3 text-center mx-auto loginsh"
            />
            <input
              placeholder="Password..."
              type="password"
              className="user-input text-center mt-3 mx-auto loginsh"
            />
            <button className="btn-login mx-auto mt-4 mons">Sign Up </button>
            <label className="mx-auto my-4 mons fs-3" style={{color :" var(--text-color)"}} >
               Have Account Already?
              <Link to="/login" style={{ textDecoration: "none" }}>
                <span style={{ cursor: "pointer" }} className="text-danger mons ms-4 ">
                   Login
                </span>
              </Link>
            </label>
          </Col>
        </Row>
      </Container></motion.div>
       
    )
}

export default RegisterPage

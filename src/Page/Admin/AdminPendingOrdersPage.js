import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AdminSideBar from "../../Components/Admin/AdminSideBar";
import { motion } from "framer-motion";
import AdminAllOrders from "../../Components/Admin/AdminAllOrders";
import Pagination from "../../Components/Uitily/Pagination";
import AdminPendingOrder from "../../Components/Admin/AdminPendingOrder";

const AdminPendingOrdersPage = () => {
  return (
   <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
     
      <Container>
        <h1 className="cor admin-content-text">Admin Dashboard</h1>
        <Row className="py-3">
          <Col sm="3" xs="3" md="2">
            <AdminSideBar />
          </Col>

          <Col sm="9" xs="9" md="10">
            <AdminPendingOrder />
            <Pagination />
          </Col>
        </Row>
      </Container>
    </motion.div>
  )
}

export default AdminPendingOrdersPage
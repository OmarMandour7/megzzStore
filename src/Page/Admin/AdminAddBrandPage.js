import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AdminSideBar from "../../Components/Admin/AdminSideBar";
import { motion } from "framer-motion";
import AdminAllProducts from "../../Components/Admin/AdminAllProducts";
import Pagination from "../../Components/Uitily/Pagination";
import AdminOrderDetalis from "../../Components/Admin/AdminOrderDetalis";
import AdminAddBrand from "../../Components/Admin/AdminAddBrand";
const AdminAddBrandPage = () => {
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
          <Col sm="3" xs="2" md="2">
            <AdminSideBar />
          </Col>

          <Col sm="9" xs="10" md="10">
            <AdminAddBrand />
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default AdminAddBrandPage;

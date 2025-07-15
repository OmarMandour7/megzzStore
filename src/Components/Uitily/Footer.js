import React from 'react'

const Footer = () => {
    return (
     <footer className=" footer  ">
      <div className="container d-flex justify-content-between align-items-center py-4">
        {/* اسم الموقع */}
        <div className="fw-bold cor ">Megzz Store</div>

        {/* روابط التواصل */}
        <div>
          <a href="##" className=" me-4">
            <i className="fab fa-facebook-f"></i>
          </a>
         
          <a href="##" className=" me-4">
            <i className="fab fa-instagram"></i>
          </a>
         
        </div>
      </div>
    </footer>
    )
}

export default Footer

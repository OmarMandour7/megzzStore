import React, { useState } from 'react'
import { Carousel, Row } from 'react-bootstrap'

import prod3 from "../../images/ah.png";
import prod4 from "../../images/mmm.png";

const Silder = () => {
    const [index, setIndex] = useState(0)
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex)
    }
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
           
             <Carousel.Item className="slider-background" interval={2000}>
                <Row className="d-flex flex-row justify-content-center align-items-center">
                   <img
                        style={{ height: "296px", width: "500.53px"   ,filter: "drop-shadow(0 0 10px rgb(255, 255, 255))",}}
                        className=""
                        src={prod4}
                        alt="First slide"
                    />
                   <div className="relative z-20 text-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight cor" style={{color : "var(--text-color)"}}>
                     Luxury in Every Step
        </h1>
        <p className="text-lg md:text-xl fs-5 cor text-gray-300 mb-5" style={{color : "var(--text-color)"}} >
                Crafted sneakers with premium feel and timeless style.
        </p>
      </div>
                     
                </Row>
            </Carousel.Item>
           
             <Carousel.Item className="slider-background2" interval={2000}>
                <Row className="d-flex flex-row justify-content-center align-items-center">
                   <img
                        style={{ height: "296px", width: "500.53px" ,filter: "drop-shadow(0 0 10px rgb(17, 223, 255))",  }}
                        className=""
                        src={prod3}
                        alt="First slide"
                    />
                   <div className="relative z-20 text-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight cor"  style={{color : "var(--text-color)"}}>
         Built to  Move, Designed to Impress

        </h1>
        <p className="text-lg md:text-xl fs-5 cor text-gray-300 mb-5" style={{color : "var(--text-color)"}}>
Your next favorite kicks are waiting.
        </p>
      </div>
                     
                </Row>
            </Carousel.Item>
           
        </Carousel>
    )
}

export default Silder

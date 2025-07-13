import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import mobile from "../../images/ah.webp";
import mobile2 from "../../images/482384114_17879595483256481_7467797904036243307_n.jpg";
import mobile3 from "../../images/482525021_17879595468256481_85586299035768585_n.jpg";

import LeftButton from "./LeftButton";
import RightButton from "./RightButton";
const ProductGallery = () => {
  const images = [
    {
      original: `${mobile}`,
      thumbnail: `${mobile}`,
    },
    {
      original: `${mobile2}`,
      thumbnail: `${mobile2}`,
    },
    {
      original: `${mobile3}`,
      thumbnail: `${mobile3}`,
    },
  ];
  return (
    <div
      className=" d-flex justfiy-content-center  
        pt-2"
    >
      <ImageGallery
        items={images}
        defaultImage={mobile}
        showFullscreenButton={false}
        isRTL={true}
        lazyload={true}
        showPlayButton={false}
        showThumbnails={true}
        renderRightNav={RightButton}
        renderLeftNav={LeftButton}
      />
    </div>
  );
};

export default ProductGallery;

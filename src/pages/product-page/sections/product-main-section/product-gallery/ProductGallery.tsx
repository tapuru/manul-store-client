import React, { useState } from 'react';
import cl from "./ProductGallery.module.css";

interface ProductGalleryProps {
  gallery: string[];
}
interface ImageListItemProps {
  image: string;
  active: boolean;
  onClick: () => void;
}

const ImageListItem = ({ image, active, onClick }: ImageListItemProps) => {

  const rootClassName = [cl.imageListItem];
  if (active) {
    rootClassName.push(cl.active);
  }

  return (
    <li className={rootClassName.join(" ")} onClick={onClick} >
      <img src={`${import.meta.env.VITE_API_URL}/${image}`} alt="" />
    </li>
  )
}


export const ProductGallery = ({ gallery }: ProductGalleryProps) => {

  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className={cl.wrapper}>
      <div className={cl.imageList} >
        {gallery.map((image, index) => (
          <ImageListItem image={image} key={image} active={index === activeImage} onClick={() => setActiveImage(index)}/>
        ))}
      </div>
      <div className={cl.activeImage}>
          <img src={`${import.meta.env.VITE_API_URL}/${gallery[activeImage]}`} alt="" />
      </div>
    </div>
  )
}

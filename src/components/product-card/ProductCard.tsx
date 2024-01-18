import { IProduct } from '../../models';
import cl from "./ProductCard.module.css";
import { BasketIcon, HeartIcon, StarIcon } from '../icons';
import { Button } from '../ui';
import { useNavigate } from 'react-router-dom';

interface Props {
  product: IProduct;
}

export const ProductCard = ({ product }: Props) => {

  const navigate = useNavigate();


  const stars = []
  for (let i = 0; i < 5; i++) {
    if (i < product.rating) {
      stars.push(<StarIcon variant='filled' key={i}/>)
    } else {
      stars.push(<StarIcon variant='empty' key={i}/>)
    }
  }

  const handleCardClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(`/product/${product.id}`);
  }

  return (
    <div className={cl.card} onClick={handleCardClick}>
      <div className={cl.productImage}>
        <img src={import.meta.env.VITE_API_URL + "/" + product.previewImage} alt={product.name} />
      </div>
      <div className={cl.cardContent}>
        <div className={cl.title}>
          {product.name}
        </div>
        <div className={cl.rating}>
          {stars} ({product.rating})
        </div>
        <div className={cl.price}>
          {product.price} P.
        </div>
        <div className={cl.actions}>
          <button className={cl.button}>
            <HeartIcon w='32' h='32' />
          </button>
          <Button size='sm' variant='filled'>
            <BasketIcon />
          </Button>
        </div>   
      </div>  
    </div>
  )
}

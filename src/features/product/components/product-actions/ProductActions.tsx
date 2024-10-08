import { Button } from '../../../../shared/components/ui';
import cl from "./ProductActions.module.css";

export const ProductActions = () => {
  return (
    <div className={cl.actions} >
      <div className={cl.buttons}>
        <Button size='lg'>В Корзину</Button>
        <div className={cl.secondaryButtons}>
          <Button size='md' variant='outlined'>В Избранное</Button>
          <Button size='md' variant='outlined'>В Сравнение</Button>
        </div>
      </div>
    </div>
  )
}

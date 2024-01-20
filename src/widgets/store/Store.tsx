import { useState } from "react";
import { ProductGrid, useGetProductsQuery } from "../../features/product";
import { Loader } from "../../shared/components/ui";
import cl from "./Store.module.css";

interface StoreProps {
  categoryName: string | undefined
}

export const Store = ({ categoryName }: StoreProps) => {

  const { data: response, isLoading: areProductsLoading } = useGetProductsQuery({ categoryName });
  const [gridMode, setGridMode] = useState<"grid" | "list">("grid");

  return (
    <div className={cl.wrapper} >
      <aside>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa animi suscipit eligendi corrupti consequatur quas quis illo eius eum culpa. Eos dolore nemo voluptatem quidem quaerat magni earum veniam eligendi!
      </aside>
      <div>
        <div className={cl.gridHeader}>
          <button
            onClick={() => setGridMode("grid")}
          >сетка
          </button>
          <button
            onClick={() => setGridMode("list")}
          >список
          </button>
        </div>
        {areProductsLoading &&
          <Loader centered />
        }
        {response &&
          <ProductGrid productList={response.data} mode={gridMode}/>
        }
      </div>
    </div>
  )
}

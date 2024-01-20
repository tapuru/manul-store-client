import { useDispatch } from "react-redux";
import cl from "./StorePage.module.css";
import { useParams } from "react-router-dom";
import { ProductGrid, useGetProductsQuery } from "../../features/product";
import { Container, Section } from "../../shared/components/ui";
import { Store } from "../../widgets/store";

interface StorePageLayoutProps {
  children?: React.ReactNode;
}

const StorePageLayout = ({ children }: StorePageLayoutProps) => {
  return (
    <div className={cl.wrapper}>
      <aside className={cl.sidebar}></aside>
      <main className={cl.main} >
        {children}
      </main>
    </div>
  )
}


export const StorePage = () => {
  const { categoryName } = useParams();

  return (
    <Container>
      <Section>
        <Store categoryName={categoryName} />
      </Section>
    </Container>
  )
}

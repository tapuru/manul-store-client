import cl from "./CategoriesSidebar.module.css";
import { useNavigate } from "react-router-dom";
import { Category } from "../..";

interface CategoriesSidebarProps {
  categoriesList?: Category[];
}


export const CategoriesSidebar = ({ categoriesList }: CategoriesSidebarProps) => {

  const navigate = useNavigate();

  return (
    <div className={cl.wrapper}>
      <Card>
        <div className={cl.content}>
          {categoriesList?.map(c => (
            <List
              label={c.name}
              clickableLabel
              key={c.id}
              onClick={() => navigate(`/store/${c.name}`)}
            >
              {c.subCategories?.map(subC => (
                <ListItemButton label={subC.name} key={subC.id} onClick={() => navigate(`/store/${subC.name}`)} />
              ))}
            </List>
          ))}
        </div>
      </Card>
    </div>
  )
}

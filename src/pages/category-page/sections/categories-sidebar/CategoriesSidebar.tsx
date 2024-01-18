import cl from "./CategoriesSidebar.module.css";
import { ICategory } from '../../../../models';
import { Card, List, ListItemButton } from '../../../../shared/components/ui';
import { useNavigate } from 'react-router-dom';

interface CategoriesSidebarProps {
  categoriesList?: ICategory[];
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

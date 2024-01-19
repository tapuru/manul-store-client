import { AdminPage } from "../pages/admin-page";
import { AuthPage } from "../pages/auth-page";
import { BasketPage } from "../pages/basket-page";
import { CategoryPage } from "../pages/category-page";
import { ComparePage } from "../pages/compare-page";
import { FavoritesPage } from "../pages/favorites-page";
import { HomePage } from "../pages/home-page";
import { ProductPage } from "../pages/product-page";
import { ProfilePage } from "../pages/profile-page";
import { SearchPage } from "../pages/search-page";
import { StorePage } from "../pages/store-page";

export const guestRoutes = [
  { path: "/", component: HomePage },
  { path: "/login", component: AuthPage },
  { path: "/registration", component: AuthPage },
  { path: "/catalog/:name", component: CategoryPage },
  { path: "/store/:categoryName", component: StorePage },
  { path: "/search/:query", component: SearchPage },
  { path: "/compare", component: ComparePage },
  { path: "/product/:id", component: ProductPage },
];
export const authorizedRoutes = [
  { path: "/", component: HomePage },
  { path: "/profile/:id", component: ProfilePage },
  { path: "/catalog/:name", component: CategoryPage },
  { path: "/store/:categoryName", component: StorePage },
  { path: "/search/:query", component: SearchPage },
  { path: "/compare", component: ComparePage },
  { path: "/favorites", component: FavoritesPage },
  { path: "/basket", component: BasketPage },
  { path: "/compare", component: ComparePage },
  { path: "/product/:id", component: ProductPage },
];
export const adminRoutes = [
  ...authorizedRoutes,
  { path: "/admin", component: AdminPage },
];
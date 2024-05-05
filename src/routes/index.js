import { Home, News, Product, AboutUs, Account } from '~/pages';
import { DefaultLayout, HaveSlideBar } from '~/layouts';
import routers from '~/config/routers';

const privateRoutes = [];
const publicRoutes = [
    { path: routers.root, component: Home, layout: DefaultLayout },
    { path: routers.aboutUs, component: AboutUs, layout: HaveSlideBar },
    { path: routers.root, component: News, layout: HaveSlideBar },
    { path: routers.account, component: Account, layout: DefaultLayout },
    { path: routers.sales, component: Product, layout: DefaultLayout },
    { path: routers.product, component: Product, layout: DefaultLayout },
];

export { privateRoutes, publicRoutes };

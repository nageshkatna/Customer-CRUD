import ClientForm from "../pages/ClientForm";
import Home from "../pages/Home";
import ViewCustomer from "../pages/ViewCustomer";
import IRoute from "./route";


const routes: IRoute[] = [
    {
        path:'/',
        name:'Home Page',
        component: Home,
        exact: true
    },
    {
        path:'/clientform/',
        name:'Client Form',
        component: ClientForm,
        exact: true
    },
    {
        path:'/clientform/:id',
        name:'Client Form',
        component: ClientForm,
        exact: true
    },
    {
        path:'/clientview/:id',
        name:'Client Form',
        component: ViewCustomer,
        exact: true
    },
]

export default routes
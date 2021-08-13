import ClientForm from "../pages/ClientForm";
import Home from "../pages/Home";
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
]

export default routes
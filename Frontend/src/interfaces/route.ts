export default interface IRoute {
    path: any;
    name: String;
    exact: boolean;
    component: any;
    props?: any;
}
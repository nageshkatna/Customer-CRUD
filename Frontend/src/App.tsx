import React from "react";
import { BrowserRouter, Switch, Route, RouteComponentProps} from "react-router-dom";
import routes from "./interfaces/routes";

const App: React.FC<{}> = props =>{
  return (
    <div>
      <BrowserRouter>
        <Switch>
          {routes.map((route, index) => {
            return (
              <Route
                  key = {index}
                  path = {route.path}
                  exact = {route.exact}
                  render = {(props: RouteComponentProps<any>) => (
                    <route.component
                      {...props}
                      {...route.props}
                    />
                  )} 
                />
            );
          })}
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
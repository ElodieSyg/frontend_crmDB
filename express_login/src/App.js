import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// Import views
import Register from "./views/Register";
import Login from "./views/Login";
import Admin from "./views/Admin";
// Import context
// import UserContext from "./context/UserContext";

const App = () => {
  return (
    <BrowserRouter>
      {/*       <UserContext>
 */}        <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/" component={Login} />
        <Route exact path="/admin" component={Admin} />
      </Switch>
      {/*       </UserContext>
 */}    </BrowserRouter>
  );
};

export default App;
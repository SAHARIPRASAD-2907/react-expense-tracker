import { Route, Switch } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import AddExpense from "../pages/AddExpense";
import HelpPage from "../pages/Helppage";
import Edit from "../pages/EditExpense";
import Error404 from "../pages/Error404";


function AppRouter() {
  return (
    <Switch className="App">
      <Route path="/" component={Dashboard} exact={true} />
      <Route path="/create" component={AddExpense} exact />
      <Route path="/help" component={HelpPage} exact />
      <Route path="/edit/:id" component={Edit} exact />
      <Route component={Error404} />
    </Switch>
  );
}

export default AppRouter;

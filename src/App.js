import "./App.scss";
import { Route, Switch } from "react-router-dom";
// Importing pages
import Header from "./components/Header";
import AppRouter from "./routers/AppRouter";

function App() {
  return (
    <div className="App">
      <Header />
      {/* Routing for renduring pages */}
      <AppRouter />
    </div>
  );
}

export default App;

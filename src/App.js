import "./App.scss";
// Importing pages
import Header from "./components/Header";
import AppRouter from "./routers/AppRouter";

function App() {
  return (
    <div className="App">
      <Header />
      {/* Routing for rendering pages */}
      <AppRouter />
    </div>
  );
}

export default App;

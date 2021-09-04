import "./App.scss";
// Importing pages
import Header from "./components/Header";
import AppRouter from "./routers/AppRouter";
//Redux
import configureStore from "./redux/store/configureStore";
//React-redux
import { Provider } from "react-redux";
//Redux actions
import { addExpense } from "./redux/actions/expenses";
import getVisibleExpenses from "./redux/reducers/expenses";

const store = configureStore();
store.dispatch(
  addExpense({ description: "Water bill", amount: 100, createdAt: 4500 })
);
store.dispatch(
  addExpense({ description: "Gas bill", amount: 400, createdAt: 1000 })
);
store.dispatch(
  addExpense({ description: "Rent", amount: 10900, createdAt: 109500 })
);

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

function App() {
  return (
    <div className="App">
      <h1>Expensify</h1>
      <Header />
      {/* Routing for rendering pages */}
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </div>
  );
}

export default App;

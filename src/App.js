import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import "@fortawesome/react-fontawesome";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

import Main from "./pages/Home/Main/Main";

import Login from "./pages/Form/Login/Login";

import Register from "./pages/Form/Register/Register";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
// import Detail from "./pages/Detail/Detail";
import ProductCreate from "./pages/ProductCreate/ProductCreate";
import ShowAll from "./pages/Show_All/ShowAll";
import Profile from "./pages/Profile/Profile";
import History from "./pages/History/HistoryEvent";
import Product from "./pages/Product/Main/Main";

const store = createStore(reducers, applyMiddleware(thunk));

store.subscribe(() => {
  console.log(store.getState());
});

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/showall" component={ShowAll} />
          {/* <Route path="/event/:id" component={Detail} /> */}
          <Route path="/product/create" component={ProductCreate} />
          <Route path="/profile" component={Profile} />
          <Route path="/history" component={History} />
          <Route path="/product" component={Product} />
          <Route exact path="/" component={Main} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;

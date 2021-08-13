import React, { Fragment } from "react";
import Appbar from "./common/Appbar";
import "./App.css";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./theme";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import ItemDetails from "./pages/MarketPlace/details/ItemDetails";
import Profile from "./pages/Profile/Profile";
import LeftBar from "./common/LeftBar";
import "./web";
import CreateNFT from "./pages/MarketPlace/details/CreateNFT";
import LearnHow from "./components/LearnHow";
import AllItems from "./components/AllItems";
import Home from "./pages/MarketPlace/Home";

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={theme}>
          <div className="row g-0">
            <div className="col-md-2">
              <LeftBar />
              {/* Clean your leftbar code according to design */}
            </div>
            <div className="col-md-10">
              {/* {Paste your appbar here}? */}
              <Appbar />
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/item-detail">
                  <ItemDetails />
                </Route>
                <Route exact path="/all-items">
                  <AllItems />
                </Route>
                <Route exact path="/market/profile">
                  <Profile />
                </Route>
                <Route exact path="/market/create">
                  <CreateNFT />
                </Route>
                <Route exact path="/market/learn">
                  <LearnHow />
                </Route>
              </Switch>
            </div>
          </div>
        </ThemeProvider>
      </Router>
    </Provider>
  );
}

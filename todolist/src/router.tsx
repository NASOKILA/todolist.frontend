import React, { FunctionComponent } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Navigation from "./components/navigation/navigation";
import Main from "./components/main/main";
import Footer from "./components/footer/footer";
import Login from "./components/login/login";

const Router: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/home" component={Main} />
        <Route exact path="/login" component={Login} />
        {/* 
        <Route exact path="/chart/check" component={ChartCheckerPage} />
        <Route exact path="/chart/change" component={ChartChangePage} />
        <Route exact path="/chart/success" component={ChartSuccessPage} />
        <Route exact path="/chart/error" component={ChartErrorPage} />
        <Route exact path="/chart/loading" component={ChartLoadingPage} />
        <Route exact path="/changestore" component={ChangeStorePage} />
        <Route exact path="/unauthorized" component={UnauthorizedPage} /> 
        <Route component={NotFoundPage} />
        */}
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;

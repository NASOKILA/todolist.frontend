import React, { FunctionComponent } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Navigation from "./components/navigation/navigation";
import Main from "./components/pages/main/main";
import Footer from "./components/footer/footer";
import Login from "./components/pages/login/login";
import Register from "./components/pages/register/register";
import NotFound from "./components/pages/notfound/notfound";
import CreateLists from "./components/pages/createLists/createLists";
import requireAuth from "./components/guards/authGuard";
import requireAdmin from "./components/guards/adminGuard";
import requireNotAuth from "./components/guards/notAuthGuard";
import { ToastContainer, toast } from "react-toastify";
import Users from "./components/pages/users/users";
import ErrorBoundary from "./components/errorBoundry/errorBoundry";
import "react-toastify/dist/ReactToastify.css";
import Unauthorized from "./components/pages/unauthorized/unauthorized";
import UserEdit from "./components/pages/userEdit/userEdit";
import MyLists from "./components/pages/myLists/myLists";
import ListEdit from "./components/pages/listEdit/listEdit";
import CreateItems from "./components/pages/createItems/createItems";
import ItemEdit from "./components/pages/itemEdit/itemEdit";
import Shared from "./components/pages/shared/shared";

toast.configure({
  autoClose: 1000,
  draggable: true
});

const Router: FunctionComponent = (props: any) => {
  const AuthRequiredForCreateList = requireAuth(CreateLists);
  const AuthRequiredForCreateItem = requireAuth(CreateItems);
  const AuthRequiredForMyLists = requireAuth(MyLists);
  const NotAuthRequiredForLogin = requireNotAuth(Login);
  const NotAuthRequiredForRegister = requireNotAuth(Register);
  const AdminRequiredForUsers = requireAdmin(Users);
  const AdminRequiredForUserEdit = requireAdmin(UserEdit);
  const AuthRequiredForListEdit = requireAuth(ListEdit);
  const AuthRequiredForItemEdit = requireAuth(ItemEdit);
  const AuthRequiredForMySharedItems = requireAuth(Shared);

  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ToastContainer position={toast.POSITION.TOP_CENTER} />
        <Navigation />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/home" component={Main} />
          <Route exact path="/login" component={NotAuthRequiredForLogin} />
          <Route
            exact
            path="/register"
            component={NotAuthRequiredForRegister}
          />
          <Route
            exact
            path="/lists/create"
            component={AuthRequiredForCreateList}
          />
          <Route
            exact
            path="/items/create"
            component={AuthRequiredForCreateItem}
          />
          <Route exact path="/myLists" component={AuthRequiredForMyLists} />
          <Route
            exact
            path="/shared"
            component={AuthRequiredForMySharedItems}
          />
          <Route exact path="/users" component={AdminRequiredForUsers} />
          <Route
            exact
            path="/users/edit/:id"
            component={AdminRequiredForUserEdit}
          />
          <Route
            exact
            path="/lists/edit/:id"
            component={AuthRequiredForListEdit}
          />
          <Route
            exact
            path="/items/edit/:id"
            component={AuthRequiredForItemEdit}
          />
          <Route exact path="/unauthorized" component={Unauthorized} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Router;

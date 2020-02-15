import React from "react";
import { isUserLoggedIn } from "../../utils/Auth";
export default function requireAuth(Component: any) {
  class AuthGuard extends React.Component<any, any> {
    componentDidMount() {
      this.checkAuth();
    }

    checkAuth: Function = (): void => {
      const loggedIn: Boolean = isUserLoggedIn();
      if (!loggedIn) this.props.history.push(`/login`);
    };

    render() {
      return <Component {...this.props} />;
    }
  }
  return AuthGuard;
}

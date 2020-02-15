import React from "react";
import { isUserAdmin } from "../../utils/Auth";
export default function requireAdmin(Component: any) {
  class AdminGuard extends React.Component<any, any> {
    componentDidMount() {
      this.checkAdmin();
    }

    checkAdmin: Function = (): void => {
      const userAdmin: Boolean = isUserAdmin();
      if (!userAdmin) this.props.history.push(`/unauthorized`);
    };

    render() {
      return <Component {...this.props} />;
    }
  }
  return AdminGuard;
}

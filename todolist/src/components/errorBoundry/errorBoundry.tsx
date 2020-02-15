import React, { Component } from "react";
import { ErrorBoundaryStateType } from "../../types/types";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./errorBoundry.scss";

//Component is using Redux store to keep and modify the state
class ErrorBoundary extends Component<any, ErrorBoundaryStateType> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: any, info: any) {
    // Display fallback UI
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <Card className="text-center errorBoundry page">
          <h1 className="global-error">OOOps!</h1>
          <Card.Body>
            <h3>Something went wrong.</h3>
            <br />
            <Button
              variant="danger"
              size="lg"
              onClick={() => {
                window.location.href = "/";
              }}
            >
              Back to Home
            </Button>
          </Card.Body>
        </Card>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

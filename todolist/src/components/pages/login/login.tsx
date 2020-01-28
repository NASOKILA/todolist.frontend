import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import "./login.scss";

type LoginPropsType = {
  history: any;
  children: any;
};

type LoginStateType = {
  form: {
    email: string;
    password: string;
  };
  errorMessageShow: Boolean;
};

type LoginCredentialsType = {
  email: string;
  password: string;
};

class Login extends Component<LoginPropsType, LoginStateType> {
  constructor(props: any) {
    super(props);

    this.state = {
      form: {
        email: "",
        password: ""
      },
      errorMessageShow: false
    };
  }

  componentWillMount() {}

  componentDidMount() {}

  login = (e: any): void => {
    e.preventDefault();

    let loginCredentials: LoginCredentialsType = {
      email: this.state.form.email,
      password: this.state.form.password
    };

    let newState = { ...this.state };
    newState.form.password = "";
    newState.form.email = "";
    this.setState(newState);

    console.log(loginCredentials);
    //TO DO: Call API and Redirect to the main page
    setTimeout(() => {
      this.props.history.push("/main");
    }, 1000);
  };

  logout = () => {};

  emailOnChangeHandler = (e: any): void => {
    //call API and check if email is not been used
    let newForm = { ...this.state.form };
    newForm.email = e.target.value;
    this.setState({ form: newForm });
  };

  passwordOnChangeHandler = (e: any): void => {
    //Check if password is valid
    let newForm = { ...this.state.form };
    newForm.password = e.target.value;
    this.setState({ form: newForm });
  };

  render() {
    return (
      <Card className="text-center loginpage page">
        <Card.Body>
          <Form onSubmit={this.login}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={this.emailOnChangeHandler}
                value={this.state.form.email}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={this.passwordOnChangeHandler}
                value={this.state.form.password}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
    );
  }
}

export default Login;

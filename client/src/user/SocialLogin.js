import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import GoogleLogin from "react-google-login";
import { socialLogin, authenticate } from "../auth";

class SocialLogin extends Component {
  constructor() {
    super();
    this.state = {
      redirectToReferrer: false
    };
  }

  responseGoogle = response => {
    const { googleId, name, email, imageUrl } = response.profileObj;
    console.log("if", response);
    const user = {
      password: googleId,
      name: name,
      email: email,
      photo: imageUrl,
    };
    console.log("user obj to social login: ", user);
    socialLogin(user).then((data) => {
      console.log("signin data: ", data);
      if (data.error) {
        console.log("Error Login. Please try again.");
        alert("Error Login. Please try again.");
      } else {
        console.log("signin success - setting jwt: ", data);
        authenticate(data, () => {
          this.setState({ redirectToReferrer: true });
        });
      }
    });
  };

  render() {
    // redirect
    const { redirectToReferrer } = this.state;
    if (redirectToReferrer) {
      return <Redirect to="/" />;
    }

    return (
      <GoogleLogin
        clientId="389504607319-r5vsv6r5nm0qgtdt06qkd3e2ion13f7g.apps.googleusercontent.com"
        buttonText="Login with Google"
        theme="dark"
        onSuccess={this.responseGoogle}
        onFailure={this.responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    );
  }
}

export default SocialLogin;

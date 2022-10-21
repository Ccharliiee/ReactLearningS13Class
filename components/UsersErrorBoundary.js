import { Component } from "react";

class UsersErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      errorCactched: false,
    };
  }
  componentDidCatch(error) {
    console.log("UsersErrorBoundary: ", error);
    this.setState({ errorCactched: true });
  }
  render() {
    return (
      <>
        {this.state.errorCactched && <p>AW... Snap</p>}
        {!this.state.errorCactched && this.props.children}
      </>
    );
  }
}

export default UsersErrorBoundary;

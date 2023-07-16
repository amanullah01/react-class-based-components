import React, { Component } from "react";

class ErrorBoundery extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <p>Sorry! Something went wrong</p>;
    }
    return this.props.children;
  }
}

export default ErrorBoundery;

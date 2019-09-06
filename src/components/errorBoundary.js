/*eslint no-console: ["error", { allow: ["warn", "error"] }] */
import React from "react";
import { Link, Redirect } from "@reach/router";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, redirect: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error", error, info);
  }

  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => this.setState({ redirect: true }), 5000);
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    if (this.state.hasError) {
      return (
        <div className="details">
          <h2>500</h2>
          <p>
            There was an error with this listing. <Link to="/">Click here</Link>{" "}
            to go back or wait 5 seconds.
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

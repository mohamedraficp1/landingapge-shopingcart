import React from "react";
import ErrorPage from "./errorPage";

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: "" };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    console.log("Got the error");
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    this.setState({ error: errorInfo });
  }
  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <ErrorPage error={this.state.error} />;
    }
    return <>{this.props.children}</>;
  }
}

/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode } from "react";

/**
 * Handle errors in ThreeJS
 * https://17.reactjs.org/docs/concurrent-mode-suspense.html#handling-errors
 */
export class ErrorBoundary extends React.Component<{
  fallback: any;
  children: ReactNode;
}> {
  state = { hasError: false, error: null };
  static getDerivedStateFromError(error: any) {
    return {
      hasError: true,
      error,
    };
  }
  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

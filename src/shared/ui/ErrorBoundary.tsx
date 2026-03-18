import React, { Component, ErrorInfo, ReactNode } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-background px-6">
          <div className="max-w-md w-full glass-panel p-8 rounded-[32px] border-white/5 text-center">
            <div className="w-16 h-16 rounded-full bg-coral-red/10 flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="text-coral-red" size={32} />
            </div>
            <h2 className="font-ibm text-2xl font-light text-white mb-4 uppercase tracking-tight">System Node Collapse</h2>
            <p className="font-ibm text-creamy-white/50 text-sm mb-8 leading-relaxed">
              We encountered a fatal error while rendering this protocol. This event has been logged and our engineers have been notified.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="group relative px-8 py-3 overflow-hidden rounded-full border border-white/10 bg-white/5 transition-all duration-500 hover:border-neon-yellow"
            >
              <div className="absolute inset-0 bg-neon-yellow/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative z-10 font-ibm text-[10px] tracking-[0.3em] uppercase text-creamy-white group-hover:text-neon-yellow flex items-center gap-2">
                <RefreshCw size={14} /> Re-Initialize Protocol
              </span>
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

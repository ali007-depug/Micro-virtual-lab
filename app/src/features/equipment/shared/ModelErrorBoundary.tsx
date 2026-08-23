import { Component, type ReactNode } from "react"

interface Props { children: ReactNode; fallback: ReactNode }
interface State { hasError: boolean }

export class ModelErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: unknown) {
    console.error("3D model failed to load:", error)
  }

  render() {
    return this.state.hasError ? this.props.fallback : this.props.children
  }
}
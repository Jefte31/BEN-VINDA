import React from 'react';

interface State {
  hasError: boolean;
}

export class SiteErrorBoundary extends React.Component<React.PropsWithChildren, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    console.error('Benviva runtime error', error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="runtime-error">
          <div className="runtime-error-inner">
            <h1>Benviva</h1>
            <p>O site encontrou um erro ao carregar esta versão. Recarregue a página para tentar novamente.</p>
            <button onClick={() => window.location.reload()}>Recarregar página</button>
          </div>
        </main>
      );
    }

    return this.props.children;
  }
}

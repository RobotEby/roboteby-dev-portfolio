interface LoadingStateProps {
  message?: string;
}

const LoadingState = ({ message = 'Carregando' }: LoadingStateProps) => {
  return (
    <div className="text-center py-12 text-muted-foreground">
      <p className="loading-dots">
        {message}
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </p>
    </div>
  );
};

export default LoadingState;

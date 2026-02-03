interface ErrorStateProps {
  message?: string;
}

const ErrorState = ({
  message = 'Erro ao carregar dados. Tente novamente mais tarde.',
}: ErrorStateProps) => {
  return (
    <div className="text-center py-12 text-destructive">
      <p>{message}</p>
    </div>
  );
};

export default ErrorState;

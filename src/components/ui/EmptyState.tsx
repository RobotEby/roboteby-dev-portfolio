interface EmptyStateProps {
  message?: string;
}

const EmptyState = ({ message = 'Nenhum item encontrado.' }: EmptyStateProps) => {
  return (
    <div className="text-center py-12 text-muted-foreground">
      <p>{message}</p>
    </div>
  );
};

export default EmptyState;

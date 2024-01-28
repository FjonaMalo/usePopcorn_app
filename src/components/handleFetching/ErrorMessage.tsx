interface ErrorProps {
  message: string;
}

const ErrorMessage = ({ message }: ErrorProps) => {
  return (
    <p className="error">
      <span>❌</span> {message}
    </p>
  );
};

export default ErrorMessage;

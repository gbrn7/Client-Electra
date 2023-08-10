import { Button } from 'react-bootstrap'

function EButton({
  children,
  action,
  variant,
  size,
  isLoading,
  disabled,
  classname
}) {
  return (
    <Button
      className={classname}
      onClick={action}
      variant={variant}
      disabled={disabled}
      size={size}
    >
      {isLoading ? 'Loading...' : children}
    </Button>
  );
}

export default EButton;
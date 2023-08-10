import { Button } from 'react-bootstrap'

function EButton(
  children,
  action,
  variant,
  size,
  loading,
  disabled,
  classname
) {
  return (
    <Button
      className={classname}
      onClick={action}
      variant={variant}
      disabled={disabled}
      size={size}
    >
      {loading ? 'Loading...' : children}
    </Button>
  );
}

export default EButton;
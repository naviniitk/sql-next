const Button = ({
  disabled = false,
  name,
  handleClick,
}: {
  disabled?: boolean;
  name: string;
  handleClick?: () => void;
}) => {
  return (
    <button
      type="submit"
      className={`${
        disabled ? "bg-gray-300" : "bg-red-400"
      } rounded w-24 h-12 self-center flex items-center justify-center`}
      disabled={disabled}
      {...(handleClick && { onClick: handleClick })}
    >
      {disabled ? <div className="loader"></div> : name}
    </button>
  );
};

export default Button;

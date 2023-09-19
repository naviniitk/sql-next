import { Strings } from "@/constants";

const Button = ({ disabled }: { disabled: boolean }) => {
  return (
    <button
      type="submit"
      className={`${
        disabled ? "bg-gray-300" : "bg-red-400"
      } rounded w-24 h-12 self-center flex items-center justify-center`}
      disabled={disabled}
    >
      {disabled ? <div className="loader"></div> : Strings.SUBMIT}
    </button>
  );
};

export default Button;

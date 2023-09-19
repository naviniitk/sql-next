import { ChangeEvent } from "react";

const FormInput = ({
  query,
  handleChange,
  error,
  disabled
}: {
  query: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error: string;
  disabled: boolean;
}) => {
  return (
    <>
      <input
        className={`p-2 w-full ${
          error ? "border-red-600" : "border-gray-500"
        } border-2 rounded focus:border-yellow-500 hover:border-yellow-500 outline-none`}
        name="query"
        placeholder="write your query"
        value={query}
        onChange={(e) => handleChange(e)}
        disabled={disabled}
      />
      {error && <span className="text-red-600 text-xs relative">{error}</span>}
    </>
  );
};

export default FormInput;

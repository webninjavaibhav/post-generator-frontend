type InputProp = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder: string;
  style: string;
};

const Input = ({ handleChange, value, placeholder, style }: InputProp) => {
  return (
    <input
      className={`outline-none border-[1px] border-slate-400 rounded-md p-4 py-4 h-[50px] ${style}`}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
};

export default Input;

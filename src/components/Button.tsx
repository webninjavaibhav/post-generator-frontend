const Button = ({
  disable,
  children,
}: {
  disable: boolean;
  children: JSX.Element;
}) => {
  return (
    <button
      disabled={disable}
      type="submit"
      className="bg-slate-200 px-2 ms-4 rounded-md"
    >
      {children}
    </button>
  );
};

export default Button;

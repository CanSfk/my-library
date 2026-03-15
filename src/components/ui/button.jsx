export const Button = ({ text, ...props }) => {
  return (
    <button
      {...props}
      className="rounded-md font-bold transition-all duration-300 h-9 px-5"
    >
      {text}
    </button>
  );
};

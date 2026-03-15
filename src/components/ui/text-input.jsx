export const TextInput = ({ type = "text", ...props }) => {
  return (
    <input
      {...props}
      type={type}
      className="h-10 outline-none border border-gray-300 focus:!border-customBordo focus:ring-1 focus:ring-customBordo rounded-md shadow-sm w-full transition duration-300 pl-3 pr-3 inline-block"
    />
  );
};

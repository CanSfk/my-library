export const Textarea = ({ value, rows = 5, ...props }) => {
  return (
    <textarea
      {...props}
      value={value}
      rows={rows}
      className="outline-none border border-gray-300 focus:!border-primary focus:ring-1 focus:ring-primary rounded-md shadow-sm w-full transition duration-300 px-3 py-1.5 inline-block"
    >
      {value}
    </textarea>
  );
};

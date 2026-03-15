export const Label = ({ className = "", text, ...props }) => {
  return (
    <label {...props} className="font-medium text-text-primary">
      {text}
    </label>
  );
};

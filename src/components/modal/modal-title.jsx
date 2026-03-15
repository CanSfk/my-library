export const ModalTitle = ({ text, ...props }) => {
  return (
    <h4 {...props} className="text-text-primary">
      {text}
    </h4>
  );
};

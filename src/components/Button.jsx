const Button = ({ children, onClick, ...rest }) => {
  return (
    <button
      {...rest}
      onClick={onClick}
      className="font-lato bg-primary border-b-2 border-grey text-white uppercase text-center px-6 py-2 rounded-md"
    >
      {children}
    </button>
  );
};

export default Button;

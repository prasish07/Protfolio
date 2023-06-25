const Button = ({ styles, text }) => {
  return (
    <button
      type={`button`}
      className={`py-4 px-6 font-poppins font-medium text-[18px] outline-none ${styles} rounded-xl`}
    >
      {text}
    </button>
  );
};

export default Button;

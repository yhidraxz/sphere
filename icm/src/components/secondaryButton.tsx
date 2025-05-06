interface buttonProps {
  type: "submit" | "reset" | "button";
  text: string;
  customCss?: string;
  onClick?: () => void;
}

export const SecondaryButton: React.FC<buttonProps> = ({
  text,
  type,
  customCss,
  onClick,
}) => {
  return (
    <button
      type={type}
      className={`p-3 rounded-md text-white cursor-pointer text-base font-bold text-center 
 bg-lightBlue rounded-[10px] outline-none border-none transition-all duration-200 
 ease-in-out delay-0 transform hover:bg-navy hover:scale-80`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

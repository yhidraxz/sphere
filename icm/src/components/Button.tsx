interface buttonProps {
  type: "submit" | "reset" | "button";
  text: string;
  customCss?: string;
  onClick?: () => void;
}

export const PrimaryButton: React.FC<buttonProps> = ({
  text,
  type,
  customCss,
  onClick,
}) => {
  return (
    <button
      type={type}
      className={`bg-midBlue p-6 ${customCss}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

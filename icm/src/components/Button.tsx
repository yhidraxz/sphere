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
    <div className="relative w-64 h-12 rounded-md overflow-hidden group ">
      {/* Gradient Background Layer (visible behind) */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-700 z-1" />

      {/* Solid Overlay Layer (fades out on hover) */}
      <div className="absolute inset-0 bg-lightBlue z-10 transition-opacity duration-500 ease-in-out group-hover:opacity-0" />

      {/* Input Field */}
      <button
        type={type}
        className={`relative z-20 w-full h-full px-4 py-2 text-white bg-transparent outline-none placeholder-white`}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

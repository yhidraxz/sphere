import { Children } from "react"

interface modalProps {
    isOpen: boolean
    onClose: () => void
    children: React.ReactNode
}

export const Modal:React.FC<modalProps> = ({isOpen, onClose, children}) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
          <button
            className="absolute top-2 right-2 text-gray-600 hover:text-black"
            onClick={onClose}
          >
            X
          </button>
          {children}
        </div>
      </div>
    )
}
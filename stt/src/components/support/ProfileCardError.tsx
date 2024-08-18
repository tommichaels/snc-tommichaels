import React from "react";
import { AiOutlineExclamationCircle } from "react-icons/ai"; // Import an error SVG icon

const ProfileCardError: React.FC = () => {
  return (
    <div className="w-full max-w-sm min-w-[290px] mx-auto bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center justify-center h-64">
      <AiOutlineExclamationCircle size={48} className="text-red-600" />
      <h2 className="text-gray-700 text-xl font-semibold mt-4 text-center">
        Sorry, an error occurred
      </h2>
    </div>
  );
};

export default ProfileCardError;

import React from "react";

const ProfileCardSkeleton: React.FC = () => {
  return (
    <div className="w-full min-w-[265px] mx-auto bg-white shadow-lg rounded-lg overflow-hidden animate-pulse">
      {/* Profile Banner Placeholder */}
      <div className="w-full h-32 bg-gray-300" />

      {/* Profile Picture and Name Placeholder */}
      <div className="flex items-center px-6 py-3 bg-gray-900">
        <div className="w-12 h-12 bg-gray-400 rounded-full" />
        <div className="ml-3 h-6 w-1/2 bg-gray-400 rounded" />
      </div>

      {/* Job Title and Stats Placeholder */}
      <div className="py-4 px-6">
        <div className="h-6 bg-gray-400 rounded w-3/4" />

        <div className="flex items-center mt-4">
          <div className="h-4 bg-gray-400 rounded w-1/4" />
          <div className="mx-4 w-1 h-1 bg-gray-500 rounded-full" />
          <div className="h-4 bg-gray-400 rounded w-1/4" />
        </div>
      </div>
    </div>
  );
};

export default ProfileCardSkeleton;

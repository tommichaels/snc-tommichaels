import Image from "next/image";
import React from "react";

interface ProfileCardProps {
  name: string;
  profileBanner: string;
  profilePicture: string;
  jobTitle: string;
  followers: number;
  following: number;
}

// Function to format numbers
const formatNumber = (num: number) => {
    if (num >= 1000 && num < 1000000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
    }
    return num.toString();
};

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  profileBanner,
  profilePicture,
  jobTitle,
  followers,
  following,
}) => {
  return (
    <div className="w-full max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <Image
        className="w-full h-32 object-cover"
        src={profileBanner}
        alt="Profile Banner"
          width={600}
          height={200}
      />
      <div className="flex items-center px-6 py-3 bg-gray-900">
        <Image
          className="w-12 h-12 object-cover rounded-full border-2 border-gray-300"
          src={profilePicture}
          alt="Profile"
          width={50}
          height={50}
        />
        <h1 className="mx-3 text-white font-semibold text-lg">{name}</h1>
      </div>
      <div className="py-4 px-6">
        <h2 className="text-gray-700 text-xl font-semibold">{jobTitle}</h2>
        <div className="flex items-center space-x-20 sm:space-x-24 mt-4 text-gray-700">
          <p className="flex flex-col text-sm font-bold">{formatNumber(followers)}<span className="font-normal">Followers</span></p>
          <p className="flex flex-col text-sm font-bold">{formatNumber(following)}<span className="font-normal">Following</span></p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;

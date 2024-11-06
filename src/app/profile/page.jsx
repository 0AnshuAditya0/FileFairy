// components/Profile.js
import Image from 'next/image';

export default function Profile() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-pink-400">
      <div className="w-full max-w-md p-8 space-y-4 bg-white rounded-lg shadow-lg">
        <div className="flex items-center space-x-4">
          <Image
            src="" 
            alt="User Profile"
            width={80}
            height={80}
            className="rounded-full"
          />
          <div>
            <h2 className="text-xl font-bold text-gray-800">John Doe</h2>
            <p className="text-gray-500">johndoe@example.com</p>
          </div>
        </div>
        <div className="space-y-2">
          <p className="text-gray-700">
            <span className="font-semibold">Documents Uploaded:</span> 5
          </p>
          <button className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
}

import React from 'react';

const Profile = ({ name, email }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4">User Profile</h2>
      <div className="space-y-2">
        <p>
          <span className="font-medium">Name:</span> {name}
        </p>
        <p>
          <span className="font-medium">Email:</span> {email}
        </p>
      </div>
    </div>
  );
};

export default Profile;
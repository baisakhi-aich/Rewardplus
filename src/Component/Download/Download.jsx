import React from 'react';

const Download = () => {
  return (
    <div className="bg-white text-center py-20 px-4">
      <h1 className="text-3xl font-bold mb-4 text-blue-900">Download Page</h1>
      <p className="text-lg text-gray-600">Here you can download our app or access your rewards.</p>
      <a
        href="/path-to-your-app.apk" // replace with actual file URL
        download
        className="mt-6 inline-block px-6 py-2 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700"
      >
        Download App Now
      </a>
    </div>
  );
};

export default Download;

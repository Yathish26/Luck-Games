import axios from 'axios';
import React, { useState, useEffect } from 'react';

export default function Profile() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/data');
      setData(response.data);
    } catch (error) {
      console.error("Error Fetching Data", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg border border-gray-200">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">User Profile</h2>
      <div className="space-y-4">
        <div>
          <span className="block text-sm font-medium text-gray-600">Name</span>
          <p className="text-lg font-semibold text-gray-800">{data.name}</p>
        </div>
        <div>
          <span className="block text-sm font-medium text-gray-600">Email Address</span>
          <p className="text-lg font-semibold text-gray-800">{data.email}</p>
        </div>
        <div>
          <span className="block text-sm font-medium text-gray-600">Balance</span>
          <p className="text-lg font-semibold text-gray-800">{data.balance}</p>
        </div>
      </div>
    </div>
  );
}

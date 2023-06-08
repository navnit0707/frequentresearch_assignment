import React, { useState, useEffect } from "react";

const UserDetails = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUserDetails();
  }, []);

  const fetchUserDetails = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/v1/getuser");
      const data = await response.json();
      console.log("Data received from API:", data.data);
      setUsers(data.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  if (loading) {
    return <div>Loading user details...</div>;
  }

  return (
    <div className="flex flex-col w-full">
      <h2 className="font-bold text-xl m-5">User Details</h2>
      <table className=" m-5 pr-5 bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 bg-gray-100 border-b">First Name</th>
            <th className="py-2 px-4 bg-gray-100 border-b">Last Name</th>
            <th className="py-2 px-4 bg-gray-100 border-b">Email</th>
            <th className="py-2 px-4 bg-gray-100 border-b">Country</th>
            <th className="py-2 px-4 bg-gray-100 border-b">State</th>
            <th className="py-2 px-4 bg-gray-100 border-b">City</th>
            <th className="py-2 px-4 bg-gray-100 border-b">Gender</th>
            <th className="py-2 px-4 bg-gray-100 border-b">Date of Birth</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="py-2 px-4 border-b">{user.firstName}</td>
              <td className="py-2 px-4 border-b">{user.lastName}</td>
              <td className="py-2 px-4 border-b">{user.email}</td>
              <td className="py-2 px-4 border-b">{user.country}</td>
              <td className="py-2 px-4 border-b">{user.state}</td>
              <td className="py-2 px-4 border-b">{user.city}</td>
              <td className="py-2 px-4 border-b">{user.gender}</td>
              <td className="py-2 px-4 border-b">{user.dateOfBirth}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserDetails;

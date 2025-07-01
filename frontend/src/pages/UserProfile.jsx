import React, { useEffect, useState } from 'react';
import api from '../../utils/axios'; // axios instance
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
  const [user, setUser] = useState(null);

  const navigate = useNavigate()
  useEffect(() => {

    const fetchProfile = async () => {
      try {
        const res = await api.get('auth/profile'); // No manual token
        setUser(res.data);
      } catch (err) {
        console.error(err.response?.data || err.message);
      }
    };

    fetchProfile();
  }, []);

  const logoutHandle = async () => {
  
      const res = await api.post('/auth/logout')
      navigate('/auth/sign-in')
      console.log(res.data)
  }

  if (!user) return <p className="text-center mt-10">Loading profile...</p>;

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow bg-white">
      <h2 className="text-2xl font-bold mb-4 text-center">User Profile</h2>
      <div className="space-y-2">
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
        {user.bio && <p><strong>Bio:</strong> {user.bio}</p>}
        {user.profilePicture && (
          <div>
            <strong>Profile Picture:</strong>
            <img src={user.profilePicture} alt="Profile" className="mt-2 w-32 h-32 object-cover rounded-full" />
          </div>
        )}

        <p><strong>Joined:</strong> {new Date(user.createdAt).toLocaleDateString()}</p>
        <button onClick={logoutHandle}>Logout</button>
      </div>
    </div>
  );
};

export default UserProfile;

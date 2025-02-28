import { useState } from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import Counter from './components/Counter';


function App() {
  const [userProfile, setUserProfile] = useState({
    name: 'Hassan Faruq',
    email: 'name@example.com'
  });

  const updateProfile = () => {
    const newName = prompt('Enter new name:');
    const newEmail = prompt('Enter new email:');
    
    if (newName && newEmail) {
      setUserProfile({
        name: newName,
        email: newEmail
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header title="React Assignment" />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Profile name={userProfile.name} email={userProfile.email} />
            <button 
              onClick={updateProfile}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mt-4"
            >
              Update Profile
            </button>
          </div>
          
          <Counter />
        </div>
      </main>
    </div>
  );
}

export default App;
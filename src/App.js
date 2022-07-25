import { Routes, Route, Navigate } from 'react-router-dom';

import NewPlace from './places/pages/NewPlace';
import UpdatePlace from './places/pages/UpdatePlace';
import UserPlaces from './places/pages/UserPlaces';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import Users from './user/pages/Users';
import Auth from './user/pages/Auth';
import { AuthContext } from './shared/context/auth-context';
import { useCallback, useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      <MainNavigation />
      <main>
        <Routes>
          <Route path='/' element={<Users />} />
          <Route path='/:userId/places' element={<UserPlaces />} />
          <Route path='/places/new' element={<NewPlace />} />
          <Route path='/places/:placeId' element={<UpdatePlace />} />
          <Route path='/auth' element={<Auth />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </main>
    </AuthContext.Provider>
  );
}

export default App;

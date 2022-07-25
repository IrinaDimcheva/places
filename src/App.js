import { Routes, Route, Navigate } from 'react-router-dom';

import NewPlace from './places/pages/NewPlace';
import UpdatePlace from './places/pages/UpdatePlace';
import UserPlaces from './places/pages/UserPlaces';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import Users from './user/pages/Users';
import Auth from './user/pages/Auth';

function App() {
  return (
    <>
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
    </>
  );
}

export default App;

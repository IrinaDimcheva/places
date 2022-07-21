import { Routes, Route, Navigate } from 'react-router-dom';
import NewPlace from './places/pages/NewPlace';
import Users from './user/pages/User';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Users />} />
      <Route path='/places/new' element={<NewPlace />} />
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
}

export default App;

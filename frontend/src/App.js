import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard.jsx';
import Login from './components/Login.jsx';
import Users from './pages/Users.jsx';
import Ideas from './pages/Ideas.jsx';
import AddUser from './pages/AddUser.jsx';
import EditUser from './pages/EditUser.jsx';
import AddIdea from './pages/AddIdea.jsx';
import EditIdea from './pages/EditIdea.jsx';
import React from 'react';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/users' element={<Users />} />
          <Route path='/users/add' element={<AddUser />} />
          <Route path='/users/edit/:id' element={<EditUser />} />
          <Route path='/ideas' element={<Ideas />} />
          <Route path='/ideas/add' element={<AddIdea />} />
          <Route path='/ideas/edit/:id' element={<EditIdea />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

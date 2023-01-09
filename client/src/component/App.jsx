import { Route, Routes } from 'react-router-dom';
import '../App.css';
import Admin from './admin/Admin';
import AdminHome from './admin/AdminHome';
import LoginFailed from './admin/LoginFailed';
import FrontPage from './FrontPage';
import User from './user/User';

function App() {
  return (
    <>
    <Routes>
      <Route path = '/' element = {<FrontPage/>}/>
      <Route path = 'user' element = {<User/>}/>
      <Route path = 'admin' element = {<Admin/>}/>
      <Route path = 'adminhome' element = {<AdminHome/>}/>
      <Route path = 'loginfailed' element = {<LoginFailed/>} />
    </Routes>
    </>
  );
}

export default App;
 
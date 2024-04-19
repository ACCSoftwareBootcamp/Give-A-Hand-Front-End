import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import TasksPage from './pages/TasksPage/TasksPage.jsx';
import CreateTaskPage from './pages/CreateTaskPage/CreateTaskPage.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';
import ProfilePage from './pages/ProfilePage/ProfilePage.jsx';
import PrivateRoutes from './components/PrivateRoutes.jsx';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route element={<PrivateRoutes />}>
          <Route path='/tasks' element={<TasksPage />} />
          <Route path='/create-task' element={<CreateTaskPage />} />
        </Route>
      </Routes>
      <div className='banner'></div>

      <Footer />
    </>
  );
}

export default App;

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import TasksPage from './pages/TasksPage/TasksPage.jsx';
import CreateTaskPage from './pages/CreateTaskPage/CreateTaskPage.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';

function App() {
  // const { userId, getToken } = useAuth();

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/tasks' element={<TasksPage />} />
        <Route path='/create-task' element={<CreateTaskPage />} />
      </Routes>
      <div className='banner'></div>
      <Footer />
    </>
  );
}

export default App;

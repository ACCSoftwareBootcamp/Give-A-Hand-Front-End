import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer.jsx';
import { Route, Routes } from 'react-router-dom';
import TasksPage from './pages/TasksPage/TasksPage.jsx';
import CreateTaskPage from './pages/CreateTaskPage/CreateTaskPage.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';
import PrivateRoutes from './components/PrivateRoutes.jsx';
import UserTasksPage from './pages/UserTasksPage/UserTasksPage.jsx';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage.jsx';

function App() {
  return (
    <>
      <Header />
      <main className='main'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about-us' element={<AboutUsPage />} />
          <Route element={<PrivateRoutes />}>
            <Route path='/tasks' element={<TasksPage />} />
            <Route path='/create-task' element={<CreateTaskPage />} />
            <Route path='/user-tasks' element={<UserTasksPage />} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;

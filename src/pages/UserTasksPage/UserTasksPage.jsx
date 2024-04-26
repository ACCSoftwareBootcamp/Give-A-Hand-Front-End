import './UserTasksPage.scss';
import RequestCard from '../../components/RequestCard.jsx';
import { useEffect, useState } from 'react';
import { useAuth } from '@clerk/clerk-react';

const UserTasksPage = () => {
  const { getToken, userId } = useAuth();
  const [tasks, setTasks] = useState();

  useEffect(() => {
    async function fetchTasks() {
      const token = await getToken();
      console.log({ token, userId });

      try {
        const request = await fetch('http://localhost:3000/user-tasks', {
          headers: { Authorization: `Bearer ${token}` }
        });
        const data = await request.json();
        console.log(data);
        setTasks(data.results);
      } catch (error) {
        console.log('Error searching for Request: ', error);
      }
    }

    fetchTasks();
  });

  return (
    <div className='tasks-section container'>
      <h2 className='tasks-title text-center'>My Tasks</h2>
      {!tasks ? (
        <p>Loading...</p>
      ) : (
        <div className='tasks-container'>
          {tasks &&
            tasks.map((task) => (
              <RequestCard
                userTasksPage={true}
                key={task._id}
                name={task.name}
                description={task.description}
                taskType={task.taskType}
              />
            ))}
        </div>
      )}
    </div>
  );
};

export default UserTasksPage;

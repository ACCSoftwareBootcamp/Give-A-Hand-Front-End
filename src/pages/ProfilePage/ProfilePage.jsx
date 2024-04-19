import { SignedIn, SignedOut, useUser } from '@clerk/clerk-react';
import { useEffect, useState } from 'react';
import RequestCard from '../../components/TaskCard';

const ProfilePage = () => {
  const { user } = useUser();
  const [tasks, setTasks] = useState([]);
  const [userTasks, setUserTasks] = useState([]);
  console.log(user);

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:3000/task?userId=${user.id}`)
        .then((res) => res.json())
        .then((data) => {
          setUserTasks(data.results);
        })
        .catch((err) => {
          console.log('Error:', err);
        });
    }
  }, [user]);

  console.log(tasks);

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/task/${id}`, {
      method: 'DELETE'
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === 'Success') {
          setTasks(tasks.filter((item) => item._id !== id));
        }
      })
      .catch((error) => console.log('Error:', error));
  };

  const handleUpdate = (id) => {
    fetch(`http://localhost:3000/task/${id}`, {
      method: 'PUT'
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === 'Success') {
          let copyOfTasks = [...tasks];
          let Item = copyOfTasks.find((item) => item.id === id);
          Item.isComplete = !Item.isComplete;
          setTasks(copyOfTasks);
        }
      })
      .catch((error) => console.log('Error:', error));
  };

  return (
    <>
      <SignedOut>
        <div className='profile-top'>
          <h3>Hello, Guest!</h3>
        </div>
        <h1>Please Log-in To See your Page!</h1>
      </SignedOut>
      <SignedIn>
        <div className='profile-top-bkground'>
          <div className='profile-top'>
            {!user ? <p>Loading...</p> : <h3>Hello, {user.firstName}</h3>}
            <h6>Active Task: {userTasks.length}</h6>
            {!user ? (
              <p>Loading...</p>
            ) : (
              <p>
                Email: <b>{user.emailAddresses[0].emailAddress}</b>
              </p>
            )}

            <p></p>
          </div>
        </div>
        <div className='active-task'>
          <h1>Your Current Tasks</h1>
          {!userTasks ? (
            <p>Loading...</p>
          ) : (
            userTasks.map((task) => {
              return (
                <div className='col-md-4 taskCard-display' key={task._id}>
                  <div
                    className='d-grid gap-2 d-md-flex deletebtn'
                    onClick={(event) => {
                      event.stopPropagation();
                      handleDelete(task._id);
                      handleUpdate(task._id);
                    }}
                  >
                    <button
                      type='button'
                      className='btn-close justify-content-md-end hover-text'
                      aria-label='Close'
                      style={{ marginTop: '20px' }}
                    >
                      <span className='tooltip-text top'>Delete Task</span>
                    </button>
                  </div>
                  <RequestCard
                    userId={task.userId}
                    id={task._id}
                    name={task.name}
                    description={task.description}
                    taskType={task.taskType}
                  />
                </div>
              );
            })
          )}
        </div>
      </SignedIn>
      <div>ProfilePage</div>
    </>
  );
};

export default ProfilePage;

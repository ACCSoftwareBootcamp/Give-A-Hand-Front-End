import PropTypes from 'prop-types';

const TaskCard = ({ name, id, taskType, description }) => {
  return (
    <div className='searchCardcontainer'>
      <div className='border taskCard' key={id}>
        <h4>{taskType}</h4>
        <p>{name}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

TaskCard.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  taskType: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default TaskCard;

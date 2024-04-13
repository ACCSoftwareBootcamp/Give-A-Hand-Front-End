import PropTypes from 'prop-types';

const RequestCard = ({ name, id, taskType, description }) => {
  return (
    <div className='searchCardcontainer'>
      <div className='border' key={id}>
        <h4>{name}</h4>
        <p>{taskType}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

RequestCard.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  taskType: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default RequestCard;

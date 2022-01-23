import FeebackItem from "./FeedbackItem";
import PropTypes from 'prop-types'

const FeedbackList = ({ feedback }) => {
    if (!feedback || feedback.length === 0) {
        return <p>No Feedback yet.</p>
    }
    return (
        <div className="feedback-list">
            {feedback.map((item) => (
                <FeebackItem key={item.id} item={item} />
            ))}
        </div>
    );
}

FeedbackList.propTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
        })
    )
}

export default FeedbackList;
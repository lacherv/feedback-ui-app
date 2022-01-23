import Card from "./shared/Card";
import PropTypes from 'prop-types'


const FeebackItem = ({ item }) => {

    return (
        <Card>
            <div className="num-display">{item.rating}</div>
            <div className="text-display">{item.text}</div>
        </Card>
    );
}

FeebackItem.propTypes  ={
    item : PropTypes.object.isRequired
}

export default FeebackItem;
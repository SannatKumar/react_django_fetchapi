import {Link} from 'react-router-dom';

//button with id parameters linked to the url
const Button = ({name}) => {
    return (
        <>
        <Link to={`/users/${name}`}>
            <button className="btn btn-primary">Add To Baskets</button>
        </Link>
        </>
    );
};


export default Button;
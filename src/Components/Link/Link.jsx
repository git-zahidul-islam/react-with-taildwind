import PropTypes from 'prop-types';

const Link = ({ link }) => {
    return (
        <div>
            <li className="mr-5 hover:bg-purple-400 p-1"><a href={link.path}>{link.name}</a></li>
        </div>
    );
};

Link.propTypes = {
    link: PropTypes.object.isRequired
};

export default Link;
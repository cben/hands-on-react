import React, {PropTypes} from 'react';

const Header = (props) => {
    return (
        <header class="header">
            {props.title}
            <button >+</button>
            <button >&minus;</button>
            <button onClick={props.onChangeLayout.bind(null, "list")}>List</button>
            <button onClick={props.onChangeLayout.bind(null, "grid")}>Grid</button>
        </header>
    );
    function inc() {

    }
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
    onChangeLayout: PropTypes.func.isRequired
};

Header.defaultProps = {
    onChangeLayout: ()=> {}
};


export default Header;

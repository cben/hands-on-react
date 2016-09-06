// step 1.A - Add simple footer class in function style (see Header)
import React, { PropTypes } from 'react';

const Footer = (props) =>
    <footer className="footer">Total: {props.count}</footer>;

export default Footer;

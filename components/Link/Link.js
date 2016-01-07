import React, { Component, PropTypes } from 'react';
import router from '../../router';

class Link extends Component {
    static propTypes = {
        route: PropTypes.string.isRequired,
        params: PropTypes.object,
        className: PropTypes.string
    };

    constructor(props) {
        super(props);
        this._url = router.makePath(props.route, props.params);
    }

    _navigate = (e) => {
        e.preventDefault();
        console.log('Clicked Link component', this._url);
        let history = require('../../history');
        history.push(this._url);
    };

    render() {
        return (
            <a href={this._url} onClick={this._navigate} className={this.props.className}>{this.props.children}</a>
        );
    }
}

export default Link;

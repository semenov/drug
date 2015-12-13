import React from 'react';
import style from './Task.css';
import repeat from 'lodash/string/repeat';

export default function Task(props) {
    return (
        <div className={style.container}>
            <input type="checkbox" className={style.checkbox} />
            {props.text}
        </div>
    );
}

Task.propTypes = {
    id: React.PropTypes.number,
    done: React.PropTypes.bool,
    text: React.PropTypes.string
};

Task.propDemos = {
    default: {
        id: 1,
        done: false,
        text: 'Important things'
    },
    done: {
        id: 1,
        done: true,
        text: 'Very long and informative name with many words'
    },
    long: {
        id: 1,
        done: true,
        text: repeat('Very long and informative name with many words. ', 10)
    }
};

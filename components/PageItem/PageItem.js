import React from 'react';
import style from './PageItem.css';

export default function PageItem(props) {
    return (
        <div className={style.container}>
            {props.name}
        </div>
    );
}

PageItem.propDemos = {
    simple: {
        id: 1,
        name: 'Important things'
    },
    long: {
        id: 1,
        name: 'Very long and informative name with many words'
    }
};

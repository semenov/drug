import React from 'react';
import style from './PageItemList.css';
import PageItem from '../PageItem/PageItem';
import range from 'lodash/utility/range';

export default function PageItemList(props) {

    return (
        <div className={style.container}>
            {props.pages.map(page => <PageItem {...page} />)}
        </div>
    );
}

PageItemList.propTypes = {
    pages: React.PropTypes.array
};

PageItemList.propDemos = {
    default: {
        pages: [
            {
                id: 1,
                name: 'Important things'
            },
            {
                id: 2,
                name: 'Very long and informative name with many words'
            },
            {
                id: 3,
                name: 'Another page'
            }
        ]
    },
    empty: {
        pages: []
    },
    many: {
        pages: range(17).map(i => ({
            id: i,
            name: `Item ${i}`
        }))
    }
};

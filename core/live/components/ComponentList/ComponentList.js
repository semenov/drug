import React from 'react';
import style from './ComponentList.css';

export default function ComponentList(props) {
    let components = props.components || {};
    return (
        <div>
            <div className={style.header}>Components</div>
            <div className={style.components}>
                {Object.keys(components).map(component =>
                    <a className={style.component} href={`/live/${component}`}>{component}</a>
                )}
            </div>
        </div>
    );
}

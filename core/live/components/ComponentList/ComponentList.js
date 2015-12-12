import React from 'react';
import style from './ComponentList.css';

function makeComponentItem(name, component) {
    let demos = Object.keys(component.propDemos).map(demoName => {
        let link = `/live/${name}/${demoName}`;
        return (
            <a className={style.demo} href={link} key={demoName}>{demoName}</a>
        );
    });

    return (
        <div className={style.component} key={name}>
            <div className={style.name}>{name}</div>
            {demos}
        </div>
    );
}

export default function ComponentList(props) {
    let components = props.components || {};
    return (
        <div>
            <div className={style.header}>Components</div>
            <div className={style.components}>
                {
                    Object.keys(components).map(name =>
                        makeComponentItem(name, components[name])
                    )
                }
            </div>
        </div>
    );
}

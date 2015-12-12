import React from 'react';
import style from './LivePage.css';
import ComponentList from '../../components/ComponentList/ComponentList';

export default function LivePage(props) {
    let activeComponent;
    if (props.activeComponentName) {
        let ActiveComponent = props.components[props.activeComponentName];
        activeComponent = <ActiveComponent />;
    } else {
        activeComponent = <div>Choose component for preview</div>;
    }

    return (
        <div className={style.container}>
            <div className={style.menu}>
                <ComponentList components={props.components} />
            </div>
            <div className={style.preview}>
                {activeComponent}
            </div>
        </div>
    );
}

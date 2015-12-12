import React from 'react';
import style from './LivePage.css';
import ComponentList from '../../components/ComponentList/ComponentList';

export default function LivePage(props) {
    let activeComponent;
    if (props.componentName) {
        let ActiveComponent = props.components[props.componentName];
        let activeProps = ActiveComponent.propDemos[props.demoName];
        activeComponent = <ActiveComponent {...activeProps} />;
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

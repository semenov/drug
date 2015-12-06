import React from 'react';
import Link from '../Link/Link';
import styles from './App.css';


export default function App(props) {
    let content;
    console.log(props.state.toJS());
    if (props.state.get('lists')) {
        content = <ul>
            {
                props.state.get('lists').toJS()/*.map(item => <li>{item.name}</li>)*/
            }
        </ul>
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>App component</h1>
            <blockquote>{props.state.get('moto')}</blockquote>
            <Link route="hello" params={{ name: 'Bro' }}>Go to hello</Link>
            {content}
        </div>
    );
}

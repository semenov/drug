import React from 'react';
import Link from '../Link/Link';
import styles from './App.css';


export default function App(props) {
    let content;
    if (props.state.get('lists')) {
        content = <ul>
            {
                props.state.get('lists').map(item => <li key={item.get('id')}>{item.get('name')}</li>)
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

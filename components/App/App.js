import React from 'react';
import Link from '../Link/Link';
import styles from './App.css';


export default function App(props) {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>App component</h1>
            <blockquote>{props.state.get('moto')}</blockquote>
            <Link route="hello" params={{ name: 'Bro' }}>Go to hello</Link>
        </div>
    );
}

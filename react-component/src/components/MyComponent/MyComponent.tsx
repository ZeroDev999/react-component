import React from 'react';
import styles from './MyComponent.module.css';

interface MyComponentProps {
    title: string;
    description: string;
}

const MyComponent: React.FC<MyComponentProps> = ({ title, description }) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.description}>{description}</p>
        </div>
    );
};

export default MyComponent;
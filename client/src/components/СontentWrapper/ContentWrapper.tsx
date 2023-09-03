import React from 'react';
import styles from './styles.module.scss';

type Props = {
  children: React.ReactNode;
  className: string;
}

const ContentWrapper = ({ children, className = '' }: Props) => {
  return (
    <div className={`${styles.container} ${className}`}>{ children }</div>
  )
}

export default ContentWrapper;
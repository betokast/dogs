import React from 'react'
import styles from './Input.module.css'

export const Input = ({label, type, name, value, onChange, error, onBlur}) => {
  return (
    <div className={styles.wraper}>
      <label className={styles.label} htmlFor="name">{label}</label>
      <input
        id={name}
        name={name}
        className={styles.input}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  )
}

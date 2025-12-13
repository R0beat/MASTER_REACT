import React from 'react'
import Styles from './styles.module.css'

export const Alert = ({ className, children ,variant='default'}) => {

      return (
          <div className={`${Styles['alert']} ${Styles[variant]} ${className}`} >
              {children}
          </div>
      )
}

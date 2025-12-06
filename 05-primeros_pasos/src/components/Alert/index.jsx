import React from 'react'
import Styles from './styles.module.css'

export const Alert = ({ className, children ,variant}) => {
      const variantList = {
          "primary": `${Styles.alert} ${Styles.primary}`,
          "secondary": `${Styles.alert} ${Styles.secondary}`,
          "success": `${Styles.alert} ${Styles.success}`,
          "danger": `${Styles.alert} ${Styles.danger}`,
          "warning": `${Styles.alert} ${Styles.warning}`,
          "info": `${Styles.alert} ${Styles.info}`,
          "light": `${Styles.alert} ${Styles.light}`,
          "dark": `${Styles.alert} ${Styles.dark}`,
          "gray": `${Styles.alert} ${Styles.gray}`,
      }
  
      const vaiantSelected = variantList[variant] ||  `${Styles.card}`
  
      return (
          <div className={`${vaiantSelected} ${className}`} >
              {children}
          </div>
      )
}

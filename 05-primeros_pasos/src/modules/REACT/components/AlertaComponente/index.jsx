import React from 'react'
import { Alert } from '../../../../components'

export const AlertaComponente = ({ msg, className }) => {
    return (
        <Alert className={className} variant={`${msg === 'montado' ? 'success' : 'danger'}` }>
            <p>El componente se ha {msg}</p>
        </Alert>
    )
}

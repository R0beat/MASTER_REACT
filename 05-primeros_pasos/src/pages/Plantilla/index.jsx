import React from 'react'
import { Card } from '../../components/Card'
import { Alert } from '../../components/Alert'
import { Button } from '../../components/Button'
import { DropButton, ToggleButton } from '../../components'

const items = [
    { label: "Inicio", onClick: "#" },
    { label: "Fin", onClick: "#" },
    { label: "Inicio", onClick: "#" }
]
export const Plantilla = () => {
    return (
        <div className="container d-grid col-12 gap-2">

            <div className="span-12">
                <h1>Card</h1>
            </div>

            <div className="span-12 span-md-4"><Card variant='primary' /></div>
            <div className="span-12 span-md-4"><Card variant='secondary' /></div>
            <div className="span-12 span-md-4"><Card variant='success' /></div>
            <div className="span-12 span-md-4"><Card variant='warning' /></div>
            <div className="span-12 span-md-4"><Card variant='danger' /></div>
            <div className="span-12 span-md-4"><Card variant='info' /></div>
            <div className="span-12 span-md-4"><Card variant='light' /></div>
            <div className="span-12 span-md-4"><Card variant='dark' /></div>
            <div className="span-12 span-md-4"><Card variant='gray' /></div>

            <div className="span-12">
                <h1>Alert</h1>
            </div>

            <div className="span-12 span-md-4"><Alert >Alert</Alert></div>
            <div className="span-12 span-md-4"><Alert variant='primary'>Alert</Alert></div>
            <div className="span-12 span-md-4"><Alert variant='secondary'>Alert</Alert></div>
            <div className="span-12 span-md-4"><Alert variant='success'>Alert</Alert></div>
            <div className="span-12 span-md-4"><Alert variant='danger'>Alert</Alert></div>
            <div className="span-12 span-md-4"><Alert variant='info'>Alert</Alert></div>
            <div className="span-12">
                <h1>Buttons</h1>
            </div>

            <div className="span-12 span-md-3"><Button>Button</Button></div>
            <div className="span-12 span-md-3"><Button variant='btn-primary'>Button</Button></div>
            <div className="span-12 span-md-3"><Button variant='btn-secondary'>Button</Button></div>
            <div className="span-12 span-md-3"><Button variant='btn-success'>Button</Button></div>
            <div className="span-12 span-md-3"><Button variant='btn-info'>Button</Button></div>
            <div className="span-12 span-md-3"><Button variant='btn-danger'>Button</Button></div>
            <div className="span-12 span-md-3"><Button variant='btn-primary-outline'>Button</Button></div>
            <div className="span-12 span-md-3"><Button variant='btn-secondary-outline'>Button</Button></div>
            <div className="span-12 span-md-3"><Button variant='btn-success-outline'>Button</Button></div>
            <div className="span-12 span-md-3"><Button variant='btn-info-outline'>Button</Button></div>
            <div className="span-12 span-md-3"><Button variant='btn-danger-outline'>Button</Button></div>


            <div className="span-12 span-md-3"><ToggleButton /></div>
            <div className="span-12 span-md-3"><DropButton items={items} /></div>
        </div>


    )
}
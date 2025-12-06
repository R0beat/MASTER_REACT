import React from 'react'
import { Card } from '../../components/Card'
import { Alert } from '../../components/Alert'
import { Button } from '../../components/Button'


export const Plantilla = () => {
    return (
        <div className="container d-grid col-12 gap-2 margin-1">

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

            <div className="span-12 span-md-4"><Alert variant='primary'>Alert</Alert></div>
            <div className="span-12 span-md-4"><Alert variant='secondary'>Alert</Alert></div>
            <div className="span-12 span-md-4"><Alert variant='success'>Alert</Alert></div>
            <div className="span-12 span-md-4"><Alert variant='warning'>Alert</Alert></div>
            <div className="span-12 span-md-4"><Alert variant='danger'>Alert</Alert></div>
            <div className="span-12 span-md-4"><Alert variant='info'>Alert</Alert></div>
            <div className="span-12 span-md-4"><Alert variant='light'>Alert</Alert></div>
            <div className="span-12 span-md-4"><Alert variant='dark'>Alert</Alert></div>
            <div className="span-12 span-md-4"><Alert variant='gray'>Alert</Alert></div>

            <div className="span-12">
                <h1>Buttons</h1>
            </div>

            <div className="span-12 span-md-3"><Button element='btn' modifier='btn--primary' >Button</Button></div>
            <div className="span-12 span-md-3"><Button element='btn' modifier='btn--secondary' >Button</Button></div>
            <div className="span-12 span-md-3"><Button element='btn' modifier='btn--success' >Button</Button></div>
            <div className="span-12 span-md-3"><Button element='btn' modifier='btn--warning' >Button</Button></div>
            <div className="span-12 span-md-3"><Button element='btn' modifier='btn--danger' >Button</Button></div>
            <div className="span-12 span-md-3"><Button element='btn' modifier='btn--info' >Button</Button></div>
            <div className="span-12 span-md-3"><Button element='btn' modifier='btn--light' >Button</Button></div>
            <div className="span-12 span-md-3"><Button element='btn' modifier='btn--dark' >Button</Button></div>
            <div className="span-12 span-md-3"><Button element='btn' modifier='btn--gray' >Button</Button></div>

            <div className="span-12 span-md-3"><Button element='shine' modifier='shine--primary' >Button</Button></div>
            <div className="span-12 span-md-3"><Button element='shine' modifier='shine--secondary' >Button</Button></div>
            <div className="span-12 span-md-3"><Button element='shine' modifier='shine--success' >Button</Button></div>
            <div className="span-12 span-md-3"><Button element='shine' modifier='shine--warning' >Button</Button></div>
            <div className="span-12 span-md-3"><Button element='shine' modifier='shine--danger' >Button</Button></div>
            <div className="span-12 span-md-3"><Button element='shine' modifier='shine--info' >Button</Button></div>
            <div className="span-12 span-md-3"><Button element='shine' modifier='shine--light' >Button</Button></div>
            <div className="span-12 span-md-3"><Button element='shine' modifier='shine--dark' >Button</Button></div>
            <div className="span-12 span-md-3"><Button element='shine' modifier='shine--gray' >Button</Button></div>

            <div className="span-12 span-md-3"><Button element='shine' modifier='shine--primary-outline' >Button</Button></div>
            <div className="span-12 span-md-3"><Button element='shine' modifier='shine--secondary-outline' >Button</Button></div>
            <div className="span-12 span-md-3"><Button element='shine' modifier='shine--success-outline' >Button</Button></div>
            <div className="span-12 span-md-3"><Button element='shine' modifier='shine--warning-outline' >Button</Button></div>
            <div className="span-12 span-md-3"><Button element='shine' modifier='shine--danger-outline' >Button</Button></div>
            <div className="span-12 span-md-3"><Button element='shine' modifier='shine--info-outline' >Button</Button></div>
            <div className="span-12 span-md-3"><Button element='shine' modifier='shine--light-outline' >Button</Button></div>
            <div className="span-12 span-md-3"><Button element='shine' modifier='shine--dark-outline' >Button</Button></div>
            <div className="span-12 span-md-3"><Button element='shine' modifier='shine--gray-outline' >Button</Button></div>

        </div>


    )
}
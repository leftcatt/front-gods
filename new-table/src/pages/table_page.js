import { Router } from 'next/router'
import Table from '../../components/table'

function HomePage() {
    return (
        <div>
            <h1>
                Welcome to our home page
            </h1>
            <button onClick={() => Router.push('../../')}>Go to table page</button>
        </div>
    )
}
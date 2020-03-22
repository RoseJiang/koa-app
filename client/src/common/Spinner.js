import React from 'react'
import timg from './timg.gif'

function Spinner() {
    return (
        <div style={{ margin: '0 auto', width: '40%' }}>
            <img src={timg} alt="Loading" />
        </div>
    )
}

export default Spinner

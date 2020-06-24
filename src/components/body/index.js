import React, { useState, useEffect } from 'react'
import api from '../../services/api'
const Body = () => {
    const [vehicles, setVehicles] = useState([])

    useEffect(() => {
        api.get('OnlineChallenge/Make').then(res => {
            setVehicles(res.data)
        })
    }, [])
    return (
        <div>
            {
                vehicles.map(item => (
                    <p key={item.ID}>{item.Name}</p>
                ))
            }
        </div>
    )
}

export default Body

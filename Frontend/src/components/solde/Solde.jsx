import React, { useEffect, useState } from 'react';


function Solde() {
    const [solde, setSolde] = useState([])

    useEffect(()=> {
        fetch('http://localhost:3000/solde')
        .then(res => res.json())
        .then(data => setSolde(data))
        .catch(err => console.log(err))
    }, [])

    return (
        <span className='solde'>
            {solde.length > 0 && solde.map((d) => (
                d.solde
            ))}
        </span>
    )
}

export default Solde
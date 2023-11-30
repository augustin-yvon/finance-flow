import React, { useEffect, useState } from 'react';

function Solde() {
    const [solde, setSolde] = useState([])

    useEffect(()=> {
        fetch('http://localhost:3000/solde')
        .then(response => response.json())
        .then(data => setSolde(data))
        .catch(error => console.log(error))
    }, [])

    return (
        <div className='solde-actuel'>
            <h2>Solde actuel :</h2>

            <span className='solde'>
                {solde.length > 0 && solde.map((d) => (
                    d.solde + "€"
                ))}
            </span>
        </div>
    )
}

export default Solde
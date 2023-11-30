import React, { useEffect, useState } from 'react';
import Solde from './components/solde/Solde';
import SendModal from './components/modal/SendModal';

function App() {
    const [solde, setSolde] = useState([]);

    useEffect(()=> {
        fetch('http://localhost:3000/solde')
        .then(response => response.json())
        .then(data => setSolde(data))
        .catch(error => console.log(error))
    }, [])

    const handleSubmitAdd = async (event) => {
        event.preventDefault();
        const currentSolde = solde[0]?.solde || 0;

        const today = new Date();
        const date = today.toISOString().split('T')[0];

        const title = "Approvisionnement"
        const description = "Approvisionnement du compte"
        const montant = event.target.elements.montant.value;
        const direction = "reçu";
        const categorie = 8;

        const newSolde = currentSolde + parseInt(montant, 10);

        try {
            const response = await fetch('http://localhost:3000/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ solde: newSolde }),
            });
            
            const result = await response.text();
            console.log(result);
        } catch (error) {
            console.error('Erreur lors de la mise à jour du solde :', error);
        }
        
        try {
            const response = await fetch('http://localhost:3000/add-transaction', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ date, title, description, montant, direction, categorie }),
            });

            const result = await response.text();
            console.log(result);
        } catch (error) {
            console.error('Erreur lors de la mise à jour du solde :', error);
        }
        location.reload();
    };

    return (
        <div>
            <header>
                <h1>GoodBank</h1>

                <Solde></Solde>
            </header>
            
            <div className="form-add-container">
                <form className='form-add' onSubmit={handleSubmitAdd}>
                    <label className='form-add-montant-label' htmlFor="montant">
                        Ajouter :
                        <input className='form-add-montant' type="text" name="montant" id='montant'/>
                    </label>

                    <input className='form-add-submit' type="submit" value="Add" />
                </form>
            </div>
            <SendModal></SendModal>
        </div>
    );
}

export default App;

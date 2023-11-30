import React, { useEffect, useState } from 'react';
import Solde from './components/solde/Solde';
import SendModal from './components/modal/SendModal';

function App() {
    const [solde, setSolde] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/solde')
            .then(res => res.json())
            .then(data => setSolde(data))
            .catch(err => console.log(err));
    }, []);

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

                <div className='solde-actuel'>
                    <h2>Solde actuel :</h2>
                    <Solde></Solde>
                </div>
            </header>

            
            <div className="top">
                
                
                <form className='add-form' onSubmit={handleSubmitAdd}>
                    <label className='add' htmlFor="montant">
                        Ajouter :
                        <input type="text" id="montant" name="montant" />
                    </label>

                    <input type="submit" value="Add" />
                </form>

                <SendModal></SendModal>
            </div>
        </div>
    );
}

export default App;

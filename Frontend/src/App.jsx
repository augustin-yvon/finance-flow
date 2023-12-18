import React, { useEffect, useState } from 'react';
import './App.css';
import SendModal from './components/modal/Modal';
import Modal from "react-bootstrap/esm/Modal";
import History from './components/history/History';

function App() {
    const [solde, setSolde] = useState([]);
    const [montantInputValue, setMontantInputValue] = useState('');
    const [show, setShow] = useState(false);

    const today = new Date();
    const formattedDate = new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }).format(today);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
        const direction = "reçu";
        const categorie = 8;

        const montantInput = event.target.elements.montant.value;
        
        let newSolde;
        let montant;
    
        if (!isNaN(montantInput)) {
            montant = parseFloat(montantInput, 10);
            newSolde = currentSolde + montant;
        } else {
            montant = event.target.elements.montant.value.replace(',', '.');
            newSolde = currentSolde + parseFloat(montant, 10);
        }

        try {
            const response = await fetch('http://localhost:3000/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ solde: newSolde }),
            });
            
            const result = await response.text();
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
        } catch (error) {
            console.error('Erreur lors de la mise à jour du solde :', error);
        }

        setSolde([{ solde: newSolde }]);
        setShow(false);
    };

    return (
        <div className='main-container'>
            <header>
                <span className='solde'>
                    <span>Total des avoirs au {formattedDate}</span>
                    {solde.length > 0 && solde.map((d) => (
                        d.solde + "€"
                    ))}
                </span>

                <button className='form-add-button' onClick={handleShow}>Approvisionner</button>

                <Modal className="form-add-container" show={show} onHide={handleClose}>
                    <form className='form-add' onSubmit={handleSubmitAdd}>
                        <h2>Approvisionnement</h2>

                        <label className='form-add-montant-label' htmlFor="montant">Montant : <input className='form-add-montant' type="text" name="montant" id='montant'/></label>
                        

                        <input className='form-add-submit' type="submit" value="Add" />
                    </form>

                    <svg className="close-btn" onClick={handleClose} xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512">f<path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                </Modal>
                
                <div className="filtres">
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M0 416c0 17.7 14.3 32 32 32l54.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 448c17.7 0 32-14.3 32-32s-14.3-32-32-32l-246.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 384c-17.7 0-32 14.3-32 32zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM320 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32-80c-32.8 0-61 19.7-73.3 48L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l246.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-54.7 0c-12.3-28.3-40.5-48-73.3-48zM192 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm73.3-64C253 35.7 224.8 16 192 16s-61 19.7-73.3 48L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l86.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L265.3 64z"/></svg>
                </div>
            </header>

            <div className='corner'>
                <div className='corner-left'></div>
                
                <div className='corner-right'></div>
            </div>

            <div className="history">
                {/* <History></History> */}
            </div>
            
            <SendModal></SendModal>
        </div>
    );
}

export default App;

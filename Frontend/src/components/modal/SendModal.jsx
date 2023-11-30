import { useState, useEffect  } from "react";
import Modal from "react-bootstrap/esm/Modal";


function SendModal({ }) {
    const [solde, setSolde] = useState([])

    useEffect(()=> {
        fetch('http://localhost:3000/solde')
        .then(response => response.json())
        .then(data => setSolde(data))
        .catch(error => console.log(error))
    }, [])

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmitSend = async (event) => {
        event.preventDefault();
        const currentSolde = solde[0]?.solde || 0;
        
        const newSolde = currentSolde - parseInt(montant, 10);

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

        const today = new Date();
        
        const date = today.toISOString().split('T')[0];
        const title = event.target.elements.title.value;
        const description = event.target.elements.description.value;
        const montant = event.target.elements.montant.value;
        const direction = "émis";
        const categorie = event.target.elements.categorie.value;

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
        <>
            <button onClick={handleShow}>
                Virement
            </button>

            <Modal show={show} onHide={handleClose}>
                <div className="form-modal-container">
                    <h1>Virement</h1>
                    <form onSubmit={handleSubmitSend}>
                        <select className="form-modal-beneficiaire" name="send">
                            <option value="">Choisir un bénéficiare :</option>
                            <option value="Lucas">Lucas</option>
                            <option value="Augustin">Augustin</option>
                        </select>

                        <input className="form-modal-title" type="text" name="title" placeholder="Title" />

                        <select className="form-modal-categorie" name="categorie">
                            <option value="">Catégorie :</option>
                            <option value="1">Abonnement</option>
                            <option value="2">Éducation</option>
                            <option value="3">Loisirs</option>
                            <option value="4">Logements</option>
                            <option value="5">Santé</option>
                            <option value="6">Vie quotidienne</option>
                            <option value="7">Autres</option>
                        </select>

                        <textarea className="form-modal-description" name="description" rows="3" cols="25" placeholder="Description..."></textarea>

                        <input className="form-modal-montant" type="text" name="montant" placeholder="Montant"/>

                        <input className="form-modal-submit" type="submit" value="Faire le virement"/>
                    </form>
                </div>
                <svg className="close-btn" onClick={handleClose} xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512">f<path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
            </Modal>
        </>
    );
}

export default SendModal;
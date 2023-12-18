import React, { useEffect, useState } from "react";
import "./History.css";

function History() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/transactions")
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div className="history">
            <table className= "table-history">
                <thead className="table-history-head">
                    <tr>
                        <th className="date-th">Date</th>
                        <th className="title-th">Title</th>
                        <th className="description-th">Description</th>
                        <th className="value-th">Value</th>
                        <th className="direction-th">Direction</th>
                        <th className="categorie-th">Categorie</th>
                    </tr>
                </thead>
                <tbody className="table-history-body">
                    {data.map(transaction => (
                        <tr key={transaction.id}>
                            <td className="date">{transaction.date}</td>
                            <td className="title">{transaction.title}</td>
                            <td className="description">{transaction.description}</td>
                            <td className="value">{transaction.value}</td>
                            <td className="direction">{transaction.direction}</td>
                            <td className="categorie">{transaction.categorie}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default History;


import "./Fabrique.css";
import React, { useEffect, useState } from 'react';

const Fabrique = () => {
    const [data, setData] = useState([]);
    const title = "";
   

    useEffect(() => {
        // Charger le fichier JSON (assurez-vous d'importer correctement le fichier JSON)
        fetch('fabriques.json')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Erreur lors du chargement du JSON : ', error));
    }, []);

    return (
        <div className='fabrique' >
            {data.map((fabrique, index) =>
                <div className="fabrique" key={index}>
                    <h1>{fabrique.factoryName}</h1>
                    <p>Factory ID: {fabrique.factoryId}</p>
                    <p>Region ID: {fabrique.regionId}</p>
                    <p>Region Name: {fabrique.regionName}</p>
                    <p>Country ID: {fabrique.countryId}</p>
                    <p>Country Name: {fabrique.countryName}</p>
                    <p>Address: {fabrique.address}</p>
                    <p>City: {fabrique.city}</p>
                    <p>Department: {fabrique.departement}</p>
                    <p>Post Code: {fabrique.postCode}</p>
                    <p>Country Code: {fabrique.countryCode}</p>
                    <p>Latitude: {fabrique.lat}</p>
                    <p>Longitude: {fabrique.lng}</p>
                    <p>Button Text: {fabrique.btn_text}</p>
                    <p>Button URL: {fabrique.btn_url}</p>
                    <p>Partner: {fabrique.partner}</p>
                </div>
            )}

        </div>
    );
};

export default Fabrique;

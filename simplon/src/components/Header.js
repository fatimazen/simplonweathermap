
import React from 'react';
import"./Header.css"
const Header = () => {
 const title = "Simplon près de chez vous"; // Ajoutez ici le titre que vous souhaitez afficher

    return (
        <div className="main">
            <div className="header">
                <h1>{title}</h1>
            </div>
        </div>
    );
};

export default Header;

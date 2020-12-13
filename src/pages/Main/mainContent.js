import React from 'react'
import { Link, BrowserRouter, Redirect } from 'react-router-dom';

import product_card from '../../data/product_data';
console.log(product_card)
const MainContent = () => {
    console.log(product_card);

    const goToVotePage = (id) => {
        window.location.href = 'http://localhost:3000/vote/' + id;
    }

    const listItems = product_card.map((item) => 
        <div className="card" key={item.id}>
            <div className="card_img">
                <img src={item.thumb} alt='thumbnail do item'/>
            </div>
            <div className="card_header">
                <h2>{item.product_name}</h2>
                <p>{item.description}</p>
                <p className="price">{item.price}<span>{item.currency}</span></p>
                <BrowserRouter>
                    <div className="btn" onClick={() => {
                        goToVotePage(item.id)
                    }}>
                        <Link to={"/vote/" + item.id} style={{ textDecoration: 'none', color: 'rgba(255, 255, 255, 0.5)' }}>Votar</Link>
                    </div>
                </BrowserRouter>
            </div>
        </div>
    );
    return (
        <div className="main_content">
            <h3>VOTE AQUI</h3>
            {/* <h3>IDEIAS DE CERVEJAS</h3> */}
            {listItems}
        </div>
    );
}

export default MainContent;
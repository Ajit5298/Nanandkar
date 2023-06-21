import React from 'react';
import { Navbar } from './Navbar';
import Sidebar from './Sidebar';
import { Footer } from './Footer';
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const ProductData = require('../Components/JSON/ProductN.json');

export const New = () => {
    const [Product, setProduct] = useState();

    useEffect(() => {
        setProduct(ProductData);
    }, [ProductData]);

    const router = useNavigate();

    function handleChat() {
        router('/Chat');
    }

    return (
        <>
            <Navbar />
            <div id="mainmen">
                <div id="menside">
                    <Sidebar />
                </div>
                <div className="bestseller">
                    {Product && Product.length > 0 ? (
                        Product.map((e, i) => (
                            <div id="maindi" key={e.id}>
                                <div id="sibdi1">{e.type}</div>
                                <div id="sibdi2">
                                    <img id="imgfs" src={e.img} alt={e.type} />
                                </div>
                                <div id="sibdi3">{e.info}</div>
                                <div id="sibdi4">{e.mrp}</div>
                                <div id="sibdi6">{e.dis}</div>
                                <div id="sibdi5">{e.tax}</div>
                            </div>
                        ))
                    ) : (
                        <div>No More Products</div>
                    )}
                </div>
                <div className="corner-div" onClick={handleChat}>
                    Need help?
                </div>
            </div>
            <Footer />
        </>
    );
};

import React from 'react';

export const Address = () => {
    return (
        <>
            <div id="mapmaindiv">
                <div id="map">
                    <iframe
                        id="mapf"
                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d827.0343307604358!2d76.75091669999999!3d18.117138899999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDA3JzAxLjciTiA3NsKwNDUnMDMuMyJF!5e1!3m2!1sen!2sin!4v1686554962874!5m2!1sen!2sin"
                        width="1000vh"
                        height="630"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <div id="address">
                    <div id="mapicon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
                            <path
                                d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"
                            ></path>
                        </svg>
                        Address
                    </div>
                    <address id="address1">
                        Nilanga, Latur, Maharashtra<br />
                        Nanandkar Shoe Mart,<br />
                        Indira Chowk, Main Road, Nilanga,<br />
                        Latur, Maharashtra, 413521<br />
                        <div>
                            <p>Contact Number: 9403008925</p>
                        </div>
                    </address>
                </div>
            </div>
        </>
    );
};

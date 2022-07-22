import React , { useEffect, useState }from 'react';
import { BrowserRouter as Router, Route, Link, useNavigate } from 'react-router-dom';
import { Container , Row, Col, Button, Card, } from 'react-bootstrap';

function AboutUs() {
    const navigate = useNavigate(); 
    let lang = localStorage.getItem("lang");

    if (lang === "French") {
        return (<div>
            <h3 className='mx-3 mt-3'>Qui sommes-nous</h3>
            <p className='mx-3 mt-3'>PC Builder est un site Web créé pour tous, allant de ceux qui n'ont aucune idée de comment démonter un ordinateur aux passionnés qui se consacrent
                beaucoup d'heures et d'argent pour réaliser leur PC de rêve.</p>

            <p className='mx-3 mt-3'>Notre objectif est de fournir une communauté pour que tous puissent profiter de l'art de la construction de PC et de tous les domaines pertinents, où les utilisateurs peuvent avoir
            discussions sur divers sujets avec des personnes partageant les mêmes idées.</p>
        </div>
        )}

    return (
        <div>
            <h3 className='mx-3 mt-3'>About us</h3>
            <p className='mx-3 mt-3'>PC builder is a website created for all, ranging from who have no idea how to take apart a computer to enthusiasts who dedicate 
                many hours and money to achieve their dream PC build.</p>

            <p className='mx-3 mt-3'>We aim to provide a community for all to enjoy the art of PC building and all relevant fields, where users can have 
            discussions about various topics with likeminded people.</p>
        </div>
    )
}

export default AboutUs
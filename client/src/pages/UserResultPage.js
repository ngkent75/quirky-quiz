import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Bubbles from '../components/Bubbles';
import API from '../utils/API';


const UserResultPage = () => {
    let { id } = useParams(); 
    const [userName, setUserName] = useState('')
    const [results, setResults] = useState([]);

    useEffect(() => {
        API.getResults(id)
        .then(results => {
            console.log(results)
            setUserName(results.data.username)
            setResults(results.data.user_results)
        })
    }, [id]);

    return (
        <>
            <Bubbles/>
            <Navigation />
            <h1 className="results-page-header">{userName}</h1>
            <ul className="results-list">
            {results.map(result => <li key={result.id} classname="result-item">{result.quiz_title}{result.result}</li>)}
            </ul> 
        </>
    )
}

export default UserResultPage;
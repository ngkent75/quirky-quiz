import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Bubbles from '../components/Bubbles';
import API from '../utils/API';


const CategoryPage = () => {
    let { id } = useParams(); 
    const [category, setCategory] = useState('');
    const [quizzes, setQuizzes] = useState([]);

    useEffect(() => {
        API.getCategory(id)
        .then(category => {
            console.log(category)
            setCategory(category.data.category)
            setQuizzes(category.data.quizzes)
        })
    }, [id]);

    return (
        <>
            <Bubbles/>
            <Navigation />
            <h1 className="category-page-header">{category}</h1>
            <ul className="quiz-list">
            {quizzes.map(quiz => <li key={quiz.id} className="quiz-list-button"><Link to={'/quiz/' + quiz.id }>{quiz.title}</Link></li>)}
            </ul>
        </>
    )
}

export default CategoryPage;
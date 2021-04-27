import React, { useEffect, useState } from 'react';
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
      <Bubbles />
      <Navigation />
      <div className='past-results'>
        <h1 className="results-page-header">{userName}'s Results</h1>
        <div className='user-results'>
        <table className='results-table'>
          <thead className='results-table-header'>
            <tr>
              <th>Quiz title</th>
              <th>Your Result</th>
            </tr>
          </thead>
          <tbody className='results-table-body'>
            {results.map((result) => {
              return (
                <tr key={result.id} className="result-item">
                  <td>{result.quiz_title}</td>
                  <td>{result.result}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
        </div>
      </div>
    </>
  )
}

export default UserResultPage;
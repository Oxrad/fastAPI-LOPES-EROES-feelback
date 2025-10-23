import React, { useState, useEffect } from 'react'
import '../style/Dashboard.scss'

function Dashboard() {

  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let fakeData = {
      total_answers: 6,
      average_grades: [
        { question_id: 1, name: "Délai de livraison", average_grade: 4.2, maximum_grade: 5 },
        { question_id: 2, name: "État du colis", average_grade: 3.8, maximum_grade: 5 },
        { question_id: 3, name: "Comportement du livreur", average_grade: 4.5, maximum_grade: 5 }
      ]
    }
    setData(fakeData)
    setLoading(false)
  }, [])

  return (
    <main className='dashboard'>
      <button className='secondary' onClick={() => window.location.href = '/'}>REVENIR SUR LA PAGE D'ACCUEIL</button>
      <h1>Tableau de bord</h1>
      <p>Cette page regroupe des statistiques moyennes sur l'ensemble des réponses données</p>


      {loading ? <p id='loading'>Loading...</p> : (
        <div className='stats-container'>
          <div className='stat-card'>
            <p className='stat-value'>{data.total_answers}</p>
            <h2>Réponses</h2>
          </div>
          {data.average_grades && data.average_grades.map((item) => (
            <div className='stat-card' key={item.question_id}>
              <p className='stat-value'>{item.average_grade} / {item.maximum_grade}</p>
              <h2>{item.name}</h2>
            </div>
          ))}
        </div>
      )}

    </main>
  )
}

export default Dashboard

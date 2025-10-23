import React, { useEffect, useState } from 'react'
import '../style/FeelbackForm.scss'

function FeelbackForm() {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let fakeData = [
      { id: 1, question: "Évaluer de 1 à 5 le respect du délai de livraison", maximum_grade: 5 },
      { id: 2, question: "Évaluer de 1 à 5 l'état de votre colis à sa réception", maximum_grade: 5 },
      { id: 3, question: "Évaluer de 1 à 5 le comportement du livreur", maximum_grade: 5 }
    ]
    setData(fakeData)
    setLoading(false)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)
    const responses = []

    // mettre question_id et la valeur sélectionnée dans responses
    for (let [key, value] of formData.entries()) {
      const questionId = parseInt(key.split('-')[1], 10)
      responses.push({ question_id: questionId, grade: parseInt(value, 10) })
    }
    
    console.log("Réponses utilisateur :", responses)


    // Tu peux ici faire une requête API :
    // fetch('/api/submit-feedback', { method: 'POST', body: JSON.stringify(responses) })
    //   .then(res => res.json())
    //   .then(data => console.log('Réponse serveur:', data))
  }

  return (
    <main className='feelback-form'>
      <button className='secondary' onClick={() => window.location.href = '/'}>REVENIR SUR LA PAGE D'ACCUEIL</button>
      <h1>Donner votre avis</h1>
      {loading ? <p>Loading...</p> : (
        <form onSubmit={handleSubmit}>
          {data.length > 0 ?
            data.map((item) => (
              <div key={item.id} className="question-block">
                <label htmlFor={`question-${item.id}`}>{item.question}</label>
                <div className="radio-group">
                  {[...Array(item.maximum_grade)].map((_, i) => {
                    const value = i + 1;
                    return (
                      <label key={value}>
                        <input
                          type="radio"
                          name={`question-${item.id}`}
                          required
                          value={value}
                        />
                        {value}
                      </label>
                    );
                  })}
                </div>
              </div>
            ))

            : <p>Aucune question disponible.</p>
          }
          <button type="submit" className='primary'>ENVOYER</button>
        </form>
      )}
    </main>
  )
}

export default FeelbackForm

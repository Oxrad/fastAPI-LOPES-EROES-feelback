import React from 'react'
import '../style/Home.scss'

function Home() {
  return (
    <main>
        <button className='secondary'>CONSULTER LE TABLEAU DE BORD</button>
        <h1>Bienvenue sur l'application FeelBack</h1>
        <p>Cette application vous permet d'évaluer la livraison de votre commande</p>
        <button className='primary'>CRÉER UNE COMMANDE FICTIVE ET RÉPONDRE AU QUESTIONNAIRE DE SATISFACTION</button>
    </main>
  )
}

export default Home

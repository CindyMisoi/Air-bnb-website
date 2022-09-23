import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import cardData from './cardData';

 




export default function App() {

  const cardElements = cardData.map((cards)=>{
    
    return (
      
      <Card 
      key = {cards.id}
      {...cards}
 
       />
    )
      
    
  })
  return (
    <div>
      <Navbar/>
      <Hero/> 

      <section className='card--list'>
      {cardElements}
      </section>
      
    </div>
    
  ); 
  
}



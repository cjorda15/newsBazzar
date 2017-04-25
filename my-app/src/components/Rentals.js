import React from 'react'

function RentalCards({article,title,description,urlToImage}){
  return(
    <article className = "rental-cards">
      <div className = "top-of-card">
      {title}
      </div>
      <div className = "middle-of-card">
      {description}
      </div>
      <img className ="bottom-of-card" src= {urlToImage}/>
    </article>
  )
}

function Rentals({data}){


  return (
    <section className = "rentals-container">
    {

      Object.keys(data.articles).map((section,index) =>{
        console.log(data.articles[section])
        let article = data.articles[section]
        console.log(article)
          return (

            <RentalCards
             title= {article.title}
             description = {article.description}
             image = {article.urlToImage}
             file  = {article}
              />
          )
      })


    }


    </section>
  )
}



export default Rentals

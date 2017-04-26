import React from 'react'

function RentalCards({article,title,description,image}){
  return(
    <article className = "rental-cards">
     <div
     className = "top-of-card"
     style={{ backgroundImage: `url(${image})` }}
      >
      <div className="card-content">
        <span className="card-background-container">{title}</span>
      </div>
      </div>
      <a className="middle-of-card-link" src="http://www.google.com">Link to article</a>
      <div className = "bottom-card">
        <div className="bottom-card-content">{description}
        </div>
      </div>
    </article>
  )
}

function Rentals({data}){


  return (
    <section className = "rentals-container">
    {

      Object.keys(data.articles).map((section,index) =>{
        let article = data.articles[section]
          return (

            <RentalCards
            index={index}
            key={index}
             title= {article.title}
             description = {article.description}
             image = {article.urlToImage}
             url  = {article.url}
              />
          )
      })


    }


    </section>
  )
}



export default Rentals

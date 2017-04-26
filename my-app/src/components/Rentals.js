import React from 'react'

function RentalCards({article,title,description,image}){

  function  handleClick(){
    console.log("!!!")
  }

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
      <div className = "middle-of-card">
        <a className = "middle-of-card-link" href="http://www.google.com">Link to article</a>
        <div className = "middle-of-card-button-container">
          <button onClick={()=>handleClick()} className= "middle-of-card-button commentBtn">10</button>
          <button className= "middle-of-card-button likeBtn">3</button>
        </div>
      </div>
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

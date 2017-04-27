import React,{Component} from 'react'

class RentalCards extends Component{

  render(){
  return(
    <article className = "rental-cards">
     <div
     className = "top-of-card"
     style={{ backgroundImage: `url(${this.props.image})` }}
      >
      <div className="card-content">
        <span className="card-background-container">{this.props.title}</span>
      </div>
      </div>
      <div className = "middle-of-card">
        <a className = "middle-of-card-link" href={this.props.url}>link to article</a>
        <div className = "middle-of-card-button-container">
          <button className= "middle-of-card-button commentBtn">10</button>
          <button className= "middle-of-card-button likeBtn">3</button>
        </div>
      </div>
      <div className = "bottom-card">
        <div className="bottom-card-content">{this.props.description}
        </div>
      </div>
    </article>
  )
  }
}

class Rentals extends Component{


render(){
  return (
    <section className = "rentals-container">
    {

      Object.keys(this.props.data.articles).map((section,index) =>{
        let article = this.props.data.articles[section]
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
}



export default Rentals

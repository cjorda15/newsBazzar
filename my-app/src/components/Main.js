import React,{Component} from "react"
import apiKey from './apiKey.js'

export default class Main extends Component{
  constructor(){
    super()
    this.state = {
      searchInput:"",
      data:""
    }
  }

  getApiData(){
 const endpoint =
 `https://newsapi.org/v1/articles?source=reddit-r-all&sortBy=top&apiKey=f70d7cc4b6fe40b3bd3b8d246eed13f9`



    fetch(endpoint).then(resp =>resp.json()).then(data => {
  this.props.getList(data)  })
.catch(e => console.log(e))

  }


  render(){
    return(
      <main className = "main-container">
        <div className ="input-container">
          <div className ="search-container">
            <input onChange ={(e)=> this.setState({searchInput:e.target.value}) }
            className = "search-input"
            type = "text" placeholder = "search by cities in Colorado" />
            <button onClick={()=>{this.getApiData()}} className ="submit-btn">submit</button>
          </div>
          <div className="search-option-container">
            <h3>Search by..</h3>
            <div className= "search-options">
           <input
            type="checkbox"/><p className ="search-options-text">Most expensive</p>
           </div>

           <div
            className= "search-options">
           <input type="checkbox"/><p className ="search-options-text">Least expensive</p>
           </div>

           <div className= "search-options">
           <input type="checkbox"/><p className ="search-options-text">Highest Rated</p>
           </div>

           <div className= "search-options">
           <input type="checkbox"/><p className ="search-options-text">Animals allowed</p>
           </div>
          </div>
        </div>
      </main>
    )
  }
}

import React,{Component} from "react"
import apiKey from './apiKey.js'
import ListSource from './ListSource.js'

export default class Main extends Component{
  constructor(){
    super()
    this.state = {
      searchInput:"abc-news-au",
      data:"",
      searchBy:"popular"
    }
  }
  getApiData(){
 const endpoint =
 `https://newsapi.org/v1/articles?source=${this.state.searchInput}&sortBy=top&apiKey=f70d7cc4b6fe40b3bd3b8d246eed13f9`
    fetch(endpoint).then(resp =>resp.json()).then(data => {
  this.props.getList(data)  })
.catch(e => console.log(e))
  }


  handleOptions(value){
    this.setState({searchInput:value})
  }


  render(){
    return(
      <main className = "main-container">
      <div className= "header-title">
        <h1>Jordan & <span>Jordan</span></h1>
        <h3>Your News headaches are over</h3>
      </div>
        <div className ="input-container">
            <button onClick={()=>{this.getApiData()}} className ="submit-btn">submit</button>
              <ListSource handleOptions={this.handleOptions.bind(this)}/>
        </div>
          <div className="search-by-container">
            <div className= "search-by-content">
              <p>popular</p>
              <input type= "checkbox"
              className="search-by-input"/>

            <div className= "search-by-content">
              <p>latest</p>
              <input type= "checkbox"
              className="search-by-input"/>
            </div>
          </div>
          </div>
      </main>
    )
  }
}

import React, { Component } from 'react'
import axios from 'axios'

class GetPostList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts:[],
         errorMsg:''
      }
    }
    
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response =>{
                console.log(response)
                this.setState({posts : response.data})
            })
            .catch(error =>{
                console.log(error)
                this.setState({errorMsg: "Error retriving data"})
            })
    }
  render() {
    const {posts} = this.state
    return (
      <div>
        List of Posts
        {
            posts.length ?
            posts.map(post => <div Key={post.id}>{post.title}</div>)
            :<h2>{this.state.errorMsg}</h2>
        }
      </div>
    )
  }
}

export default GetPostList

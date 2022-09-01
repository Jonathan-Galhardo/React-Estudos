import './App.css';
import { Component } from "react";

class App extends Component {
  state = {

    posts: []
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => this.setState({ posts }))

  }

  render() {
    const { posts } = this.state;

    return (
      <div className='dados'>

        {posts.map(post => (
          <div className='posts__content' key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>

        ))}
      </div>
    );
  }
}

export default App;

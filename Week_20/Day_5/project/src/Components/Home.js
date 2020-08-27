import React from 'react';
import image from '../blog.png';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Home extends React.Component{
  render(){
  console.log(this.props);
  const {posts} = this.props;
  const post_list = posts.length ? (
    posts.map(post=>{
      return(
        <div className="post card" key={post.id}>
          <img src={image}/>
          <div className="card-content">
            <Link to={'/' + post.id}><span className="card-title red-text">{post.title}</span></Link>
            <p>{post.body}</p>
          </div>
        </div>
      )
    })
  ): (
      <div className="center">
        <p>No posts to show</p>
      </div>
  )
  return(
    <div className="container home">
      <h4 className="center">Home</h4>
      {post_list}
    </div>
  )
}
}

const mapStateToProps = (state) =>{
  return{
    posts: state.posts
  }
}
export default connect(mapStateToProps,null)(Home);

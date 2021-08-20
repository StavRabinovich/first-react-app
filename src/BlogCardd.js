import React /*, { Component }*/ from 'react';
import { dumpLogs } from './Utls';

// import './BlogCardd.css';
import classes from './BlogCardd.module.css';


/*class BlogCardd extends Component{*/
const BlogCardd = (props) => {
  /*state = {
     lCount: 0
  }*/

  // onLBtnClick = () => {
  //   this.setState((prevState, prevProp) => {
  //     return {lCount: prevState.lCount + 1}});
  // }

  /*  render(){
    
    dumpLogs(this.props);
    
    return(
      //  <div className="BlogCard">
      <div className={classes.NewBlogCardd}>
        {/* <h2>Blog Title</h2> }
        <h2>{this.props.title}</h2>
        {/* <p>Blog Description</p> }
        <p>{this.props.description}</p>

        <p>Like Count: <span className={classes.lCount}>{this.state.lCount}</span> </p>
        <button onClick={this.onLBtnClick}>Like</button>
      </div>
    )
  }*/
  dumpLogs(props);

  return(
    //  <div className="BlogCard">
    <div className={classes.NewBlogCardd}>
      {/* <h2>Blog Title</h2> */}
      <h2>{props.title}</h2>
      {/* <p>Blog Description</p>*/ }
      <p>{props.description}</p>

      <p>Like Count: <span className={classes.lCount}>{props.lCount}</span> </p>
      <button onClick={props.onLikeButtonClick}>Like</button>
    </div>
  )
 
} 

export default BlogCardd;
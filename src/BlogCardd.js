import React from 'react';
import { dumpLogs } from './Utls';

// import './BlogCardd.css';
import classes from './BlogCardd.module.css';

const BlogCardd = (props) => {
  // console.log(props);
  dumpLogs(props);


  return(
    // <div className="BlogCard">
    <div className={classes.NewBlogCardd}>
    {/* <h2>Blog Title</h2> */}
    <h2>{props.title}</h2>
    {/* <p>Blog Description</p> */}
    <p>{props.description}</p>
  </div>
  )
} 

export default BlogCardd;
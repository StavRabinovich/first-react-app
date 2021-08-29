import React from 'react';
import { dumpLogs } from './Utls';
import classes from './BlogCardd.module.css';

const BlogCardd = (props) => {

  dumpLogs(props);

  return(
    <div className={classes.NewBlogCardd}>
      <h2>{props.title}</h2>
      <p>{props.description}</p>

      <p>Like Count: <span className={classes.lCount}>{props.lCount}</span> </p>
      <button onClick={() => props.onLikeButtonClick(props.position)}>Like</button>
    </div>
  )
 
} 

export default BlogCardd;
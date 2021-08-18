import React from 'react';

const BlogCardd = (props) => {
  console.log(props);


  return(
    <div className="BlogCard">
    {/* <h2>Blog Title</h2> */}
    <h2>{props.title}</h2>
    {/* <p>Blog Description</p> */}
    <p>{props.description}</p>
  </div>
  )
} 

export default BlogCardd;
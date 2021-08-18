import logo from './logo.svg';
import './App.css';
// import BlogCardd from './BlogCardd';
import BlogItem from './BlogCardd';
import {isArrayEmpty} from './Utls';
import './BlogCardd.css';
import classes from './BlogCardd.module.css'
import React from 'react';

class App extends React.Component {
  state = {
    showBlogs: true
  }

  blogObj = {
    title: 'Blog Title 1',
    description: 'Blah blah paka paka'
  }
  fName = 'Stav';
  lName = 'Rabinovich';
  age = 23; 
  dgree = 'SW Engineering';

  getFulName = (fName, lName) => `${fName} ${lName}`;
  inpPlaceHolder = 'Enter details:';
  detailsInputBox = <input placeholder={this.inpPlaceHolder} autoComplete/> 
  mArr = [1,2,3,4]

  styles=
    {
      margin: '16px',
      padding: '16px',
      boxSizing: 'border-box',
      borderRadius: '5px',
      boxShadow: '0 2px 5px #ccc'
    }

  blogArr = [
    {
      title: 'Blog Title 1',
      description: 'Blah blah paka paka'
    },
    {
      title: 'Blog Title 2',
      description: 'Blah paka paka'
    },
    {
      title: 'Blog Title 1',
      description: 'Blah blah paka'
    }
  ]

  // const blogCards = blogArr.map((item, pos)=>{
  blogCards = isArrayEmpty(this.blogArr)? [] : this.blogArr.map((item, pos)=>{
    // console.log(item);
    
    return(
      //<BlogCardd key={pos} title="Test Title" description="Test desctription"/>
      <BlogItem key={pos} title={item.title} description={item.description} id={item.id}/>
      // <div className="BlogCard">
      //   <h2>Title: {item.title}</h2>
      //   <p>Description: {item.description} </p>
      // </div>
    )

  })

  onHideBtnClick = () => {
    // alert('Button Clicked');
    // this.showBlogs = false;
    // this.setState({showBlogs: false});
    // let updatedState = !this.state.showBlogs;
    // this.setState({showBlogs: updatedState});
    this.setState((prevState, prevProps)=> {
      return {showBlogs: !prevState.showBlogs}
    });

    // console.log(this.showBlogs);
  }

  // /*let*/showBlogs = true;
  // /*let*/showBlogs = false;

  render(){
    console.log('Render Called');
    return (
      <div className="App">
        {/* <button onClick={this.onHideBtnClick}>Hide List</button> */}
        <button onClick={this.onHideBtnClick}>{this.state.showBlogs ? 'Hide': 'Show'} List</button>
        <br></br>
        {
          // this.showBlogs ? this.blogCards : null
          this.state.showBlogs ? this.blogCards : null
        }
        {/* {this.blogCards} */}
        
        <div className="BlogCard">
          <h2>Full Name: {this.fName} {this.lName}</h2>
          <h3>Full Name: {`${this.fName} ${this.lName}`}</h3>
          <h4>Full Name: {this.getFulName(this.fName, this.lName)} </h4>
        </div>
        <hr></hr>
        <div style={this.styles}>
          <h2>{this.blogObj.title}</h2>
          <p>{this.blogObj.description}</p>
        </div>
        <hr></hr>
        <div className="BlogCard">
          <h2>Full Name: {this.fName} {this.lName}</h2>
          <h3>Full Name: {`${this.fName} ${this.lName}`}</h3>
          <h4>Full Name: {this.getFulName(this.fName, this.lName)} </h4>
        </div>
        <hr></hr>
        <div className="BlogCard">
          <p>Aged: {this.age}</p>
          <p>Degree: {this.dgree}</p> 
          {this.mArr[0]}
          {this.detailsInputBox}
        </div>
      </div>
    );
  }
}

export default App;

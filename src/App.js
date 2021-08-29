import './App.css';
import BlogItem from './BlogCardd';
import {isArrayEmpty} from './Utls';
import './BlogCardd.css';
import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showBlogs: true,
      blogArr: [
        {
          id: 1,
          title: 'Blog Title 1',
          description: 'Blah blah paka paka',
          lCount: 10
        },
        {
          id: 2,
          title: 'Blog Title 2',
          description: 'Blah paka paka',
          lCount: 0,
        },
        {
          id: 3,
          title: 'Blog Title 1',
          description: 'Blah blah paka',
          lCount: 0,
        }
      ],
   }
   console.log('Inside Constructor');
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
  onLikeButtonClick = (pos) => {
    const updatedBlogLst = this.state.blogArr;
    const updatedBlogObj = updatedBlogLst[pos];
    updatedBlogObj.lCount = updatedBlogObj.lCount + 1;
    updatedBlogLst[pos] = updatedBlogObj;
    this.setState({blogArr: updatedBlogLst});
    console.log(updatedBlogObj);
  }
  onHideBtnClick = () => {
    this.setState((prevState, prevProps)=> {
      return {showBlogs: !prevState.showBlogs}
    });
  }

  componentDidMount(){
    console.log('Component Did Mount');
  }
  componentWillUnmount(){
    console.log('Component Unmounting');
  }
  componentDidUpdate(){
    console.log('Component Did Update');
  }
  render(){
    console.log('Render Called');
    console.log(this.state);

    const blogCards = isArrayEmpty(this.state.blogArr)? [] : this.state.blogArr.map((item, pos)=>{
      return(
      <BlogItem key={pos} title={item.title} description={item.description} id={item.id} 
      lCount={item.lCount} onLikeButtonClick={() =>this.onLikeButtonClick(pos)} />
      ) 
    })

    return (
      <div className="App">
        <button onClick={this.onHideBtnClick}>{this.state.showBlogs ? 'Hide': 'Show'} List</button>
        <br></br>
        { this.state.showBlogs ? blogCards : null }
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

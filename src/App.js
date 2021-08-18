import logo from './logo.svg';
import './App.css';
// import BlogCardd from './BlogCardd';
import BlogItem from './BlogCardd';
import {isArrayEmpty} from './Utls';

function App() {
  const blogObj = {
    title: 'Blog Title 1',
    description: 'Blah blah paka paka'
  }
  const fName = 'Stav';
  const lName = 'Rabinovich';
  const age = 23; 
  const dgree = 'SW Engineering';

  const getFulName = (fName, lName) => `${fName} ${lName}`
  const inpPlaceHolder = 'Enter details:'
  const detailsInputBox = <input placeholder={inpPlaceHolder} autoComplete/> 
  const mArr = [1,2,3,4]

  const styles=
    {
      margin: '16px',
      padding: '16px',
      boxSizing: 'border-box',
      borderRadius: '5px',
      boxShadow: '0 2px 5px #ccc'
    }

  const blogArr = [
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
  const blogCards = isArrayEmpty(blogArr)? [] : blogArr.map((item, pos)=>{
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

  return (
    <div className="App">
      {blogCards}
      <div className="BlogCard">
        <h2>Full Name: {fName} {lName}</h2>
        <h3>Full Name: {`${fName} ${lName}`}</h3>
        <h4>Full Name: {getFulName(fName, lName)} </h4>
      </div>
      <hr></hr>
      <div style={styles}>
        <h2>{blogObj.title}</h2>
        <p>{blogObj.description}</p>
      </div>
      <hr></hr>
      <div className="BlogCard">
        <h2>Full Name: {fName} {lName}</h2>
        <h3>Full Name: {`${fName} ${lName}`}</h3>
        <h4>Full Name: {getFulName(fName, lName)} </h4>
      </div>
      <hr></hr>
      <div className="BlogCard">
        <p>Aged: {age}</p>
        <p>Degree: {dgree}</p> 
        {mArr[0]}
        {detailsInputBox}
      </div>
    </div>
  );
}

export default App;

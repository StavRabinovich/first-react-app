import logo from './logo.svg';
import './App.css';

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

  return (
    <div className="App">
      <div style={
        {
          margin: '16px',
          padding: '16px',
          boxSizing: 'border-box',
          borderRadius: '5px',
          boxShadow: '0 2px 5px #ccc'
        }
      }>
        <h2>Full Name: {fName} {lName}</h2>
        <h3>Full Name: {`${fName} ${lName}`}</h3>
        <h4>Full Name: {getFulName(fName, lName)} </h4>
      </div>
      <hr></hr>
      <div>
        <h2>{blogObj.title}</h2>
        <p>{blogObj.description}</p>
      </div>
      <hr></hr>
      <div>
        <h2>Full Name: {fName} {lName}</h2>
        <h3>Full Name: {`${fName} ${lName}`}</h3>
        <h4>Full Name: {getFulName(fName, lName)} </h4>
      </div>
      <hr></hr>
      <div>
        <p>Aged: {age}</p>
        <p>Degree: {dgree}</p> 
        {mArr[0]}
        {detailsInputBox}
      </div>
    </div>
  );
}

export default App;

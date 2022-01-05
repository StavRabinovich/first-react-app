import './App.css';
import './folder_podcast/Podcast';
import {isArrayEmpty} from './Utls';
import React from 'react';

// styles=
//   {
//     margin: '16px',
//     padding: '16px',
//     boxSizing: 'border-box',
//     borderRadius: '5px',
//     boxShadow: '0 2px 5px #ccc'
//   }

const Signup = () => {
  // pod1 = {
  //   pod_name: 'Podcast1',
  //   pod_type: 'PDC',
  //   pod_genre: 'WW2',
  //   pod_author: 'Adam Amir',
  // }  
  const handleSubmit = async function (event) {
    event.preventDefault();
    };
  return (
    <div>
      <form>    
        <div>
          <br/>
          <label>Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <input type="email" name="email"></input>
        </div>
        <br/>
        <div>
          <label>Domain:&nbsp;&nbsp;&nbsp;</label>
          <input type="text" name="domain"></input>
        </div>
        <br/>
        <div>
          <label>Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <input type="text" name="name"></input>
        </div>
        <br/>
        <input type="checkbox" value="ADMIN">Admin ?</input>
      </form>
      <br/><br/>
	  <input className="button" type="submit" onClick={(event) => handleSubmit(event)} />
		<br/>

    </div>
    );
  };

export default Signup;
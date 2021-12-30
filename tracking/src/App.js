import avatar from './images/image-jeremy.png'
import './App.css';
import data from './data.json';
import './main.css';
import React from 'react';

function App() {
const [time, setTime]=React.useState('daily')

  console.log(data)
  return (
    <div className="App">
      <div className="about">
        <div className="avatar">
          <img className='avatar-img' src={avatar} alt="avatar"/>

       
        <p className='report-for'>Report for</p>
        <h2 className='person-name'>Jeremy Robson</h2>
        </div>
        <div className="timing">
          <p className="daily" onClick={()=>{setTime('daily'); }}>Daily</p>
          <p className="weekly" onClick={()=>setTime('weekly')}>Weekly</p>
          <p className="monthly" onClick={()=>setTime('monthly')}>Monthly</p>
        </div>
      </div>
      <div className="track">
      {data.map((obj)=>{
        var temp = obj.timeframes;
        return(
        <div className="tiles">
         <h3 className="title-tiles">{obj.title}</h3>
         
         <h2 className="time-tiles">{temp[time].current}hrs</h2>
         <p className='last-time-tiles'>Last {time}: {temp[time].previous}</p>
       </div>
        )
      })}
      </div>
    </div>
  );
}

export default App;

import './App.css';
import Cards from './Card';
import dark from "./images/dark.jpg";
import Sdata from './SData';
function myFun(val){
  return(
    <Cards imgsrc={val.imgsrc} name={val.name} link={val.link}/>
  );
}
function App() {
  return (
    <>
      <div className='headingDiv'>
        <h1 className='heading'>APUN KA NETFLIX</h1>
      </div>
      <div className='cardList'>
        
        {Sdata.map(myFun)}
      </div>
      <div></div>
    </>
  );
}

export default App;

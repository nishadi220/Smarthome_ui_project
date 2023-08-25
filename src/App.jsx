import './App.css';
import ProfileImg from './assets/Images/IMG_4286.jpg';

function App() {
  
  const name = "Nishadi"

  return (
    <div className="App">
      <div className="sidebar"></div>
      <div className="widgets"></div>
      <div className="home">
        <div className="header">
          <div>
            <h1>Hi, {name} </h1>
            <p>Your devices are under your control.</p>
          </div>
          <div>
            <img src={ProfileImg} alt="" className='profile_img'/>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default App;
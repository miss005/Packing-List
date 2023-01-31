import './App.css';
import image from './first.jpg';
import imageTwo from './second.jpg';
import {PackingList} from './PackingList';


function App () {
  return (
    <div className='app'>
      <div className='container'>
      <img src= { image } width="200px" alt="firstPicture"/>
      </div>
      <div className='container'>
      <h1>Packing List</h1>
      </div>
      <PackingList/>
      <div className='container'>
      <img src= { imageTwo } width="300px" alt='secondPicture'/>
      </div>
      <div className='container'>
        <p>The journey of a thousand miles begins with a single step</p>
      </div>
    </div>
  );
}
export default App;

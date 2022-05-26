/* eslint-disable jsx-a11y/anchor-is-valid */
import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber } from './actions';
import './App.css';
import changeTheNumber from './reducers/upDown';



function App() {
  const myState = useSelector(state => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <div className="App">
    <h1>Increment/Decrement</h1>
    <h4>using React and Redux</h4>
    <div className="quantity">
      <a  className="quantity_minus" 
      onClick={() => dispatch(incNumber())}><span>-</span></a>
      <input type="text" name='quantity' className='quantity_input' value={myState} />
      <a  className="quantity_plus"  
      onClick={() => dispatch(decNumber())}><span>+</span></a>
    </div>
    </div>
  );
}

export default App;

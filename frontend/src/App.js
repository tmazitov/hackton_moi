import './App.css';
import Main from './pages/Main/Main.js';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation.js';
import Services from './pages/Services/Services.js';

function App() {
  return (

    <div className="App">
			<Routes>
				<Route path='/' element={<Main/>}/>
				<Route path='/media'/>
				<Route path='/services' element={<Services/>}/>
				<Route path='/help'/>
				<Route path='/profile'/>
			</Routes>
			<Navigation/>
    </div>
  );
}

export default App;

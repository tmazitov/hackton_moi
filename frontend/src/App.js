import './App.css';
import Main from './pages/Main/Main.js';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation.js';
import Services from './pages/Services/Services.js';
import Media from './pages/Media/Media.js';
import Profile from './pages/Profile/Profile.js';
import Help from './pages/Help/Help.js';

function App() {
  return (

    <div className="App">
			<Routes>
				<Route path='/' element={<Main/>}/>
				<Route path='/media' element={<Media/>}/>
				<Route path='/services' element={<Services/>}/>
				<Route path='/help' element={<Help/>}/>
				<Route path='/profile' element={<Profile/>}/>
			</Routes>
			<Navigation/>
    </div>
  );
}

export default App;

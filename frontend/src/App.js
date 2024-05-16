import './App.css';
import Main from './pages/Main/Main.js';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation.js';
import Services from './pages/Services/Services.js';
import Media from './pages/Media/Media.js';
import Profile from './pages/Profile/Profile.js';
import Help from './pages/Help/Help.js';
import SearchPopUp from './components/SearchPopUp/SearchPopUp.js';
import React from 'react';
import TrafficFines from './pages/TrafficFines/TrafficFines.js';
import Completion from './pages/TrafficFines/Completion/Completion.js';

//{ data: [], func : f, guide: []}
const initialData = {
	search : [],
	setData : ()=>{},
	guide : []
}
export const Store = React.createContext()
function Context({children}){
	const [data, setData] = React.useState(initialData);
	const value = {data: data, setData: setData}
	return (
		<Store.Provider value={value}>
			{children}
		</Store.Provider>
	)
}

function App() {
  return (
		<Context>
		<div className="App">
				<Routes>
					<Route path='/' element={<Main/>}/>
					<Route path='/media' element={<Media/>}/>
					<Route path='/services' element={<Services/>}/>
					<Route path='/help' element={<Help/>}/>
					<Route path='/profile' element={<Profile/>}/>
					<Route path='/search' element={<SearchPopUp/>}/>
					<Route path='/traffic-fines' element={<TrafficFines/>}/>				
					<Route path='/traffic-fines/completion' element={<Completion/>}/>				
				</Routes>
				<Navigation/>
		</div>
		</Context>
  );
}

export default App;

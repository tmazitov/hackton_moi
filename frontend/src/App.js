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
export const initialData = {
	search : [],
	setData : ()=>{},
	guide : [],
	launched : false,
	currentStep : null
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
				<div className="touch">
					<svg xmlns="http://www.w3.org/2000/svg" height="64" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.227 7.79V3.578c0-.872-.692-1.579-1.545-1.579c-.854 0-1.546.707-1.546 1.579v10.487l-1.669-1.711a1.71 1.71 0 0 0-2.586.146a1.816 1.816 0 0 0-.033 2.182l3.095 4.23c.702.96 1.053 1.439 1.476 1.812c.645.57 1.417.965 2.248 1.152c.545.123 1.13.123 2.301.123c2.232 0 3.348 0 4.237-.35a5.2 5.2 0 0 0 2.954-3.027c.341-.91.341-2.055.341-4.342v-2.603c0-1.029-.728-1.907-1.722-2.076l-.353-.06a.88.88 0 0 0-1.016.88m-6.182-2.633l.595-.304c.287-.146.607-.24.918-.164a2.1 2.1 0 0 1 1.578 2.047m-3.09-1.579v2.632m3.09-1.053v1.053m0-1.053c0-.58.462-1.052 1.03-1.052c1.138 0 2.061.942 2.061 2.105m0 0v1.053" color="currentColor"/></svg>
				</div>
		</div>
		</Context>
  );
}

export default App;

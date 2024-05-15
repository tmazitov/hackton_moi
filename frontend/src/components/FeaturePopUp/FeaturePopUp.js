import React from 'react';
import "./FeaturePopUp.scss"

const FeaturePopUp = (props) => {
	const [search, setSearch] = React.useState('');
	console.log(search)
	//setSearch(props.searchValue);
	React.useEffect(()=>{
		const element = document.getElementById(props.el_id)
		const button = document.getElementById("button")
		const button_search = document.getElementById("button_search");
		const windowListen = (event)=>{
			console.log(event.target);

			if(((event.target !== element) && (element.classList.contains("feature-popup_true"))) && !element.contains(event.target))
				{
					console.log("lol")

					element.classList.remove("feature-popup_true")
					element.parentElement.classList.remove("shadow_active")
				}
			else if ((event.target === button) | (event.target === button_search)) {
				element.classList.add("feature-popup_true")
				element.parentElement.classList.add("shadow_active")
				setSearch(props.searchValue)
			}
		}
		document.addEventListener("click", windowListen)
		return () => {
			document.removeEventListener("click", windowListen);
		}
	})
	return (
		<div className="shadow">

			<div id={props.el_id} className='feature-popup_false'>
				<div className="feature-popup__search">
					<div className="search_container">
						<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="black" d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396l1.414-1.414l-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8s3.589 8 8 8m0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6s-6-2.691-6-6s2.691-6 6-6"/></svg>
						<input value={search} onChange={(e)=>{setSearch(e.target.value)}} type="text" className="search_input" />
					</div>
				</div>
				<div className="feature-popup__results">

				</div>
			</div>
		</div>
	);
};

export default FeaturePopUp;
import '../styles/Dashboard.scss';
import menuItems from '../api/menuItems.json';
import { useState } from 'react';
import { Link, Outlet } from 'react-router';

export const DashboardLayout = () => {
	// console.log(menuItems);
	const [hoverState, setHoverState] = useState(null);
	const [currentSelection, setCurrentSelection] = useState(0);

	const pui = (item) => {
		alert(`Hello ${item}`);
	};

	return (
		<div className='wrapper'>
			<nav>
				<img className='logoimage'  alt="" />
				<div className="menu-items">
					{menuItems.map((item, index) => {
						return (
							<Link to={item.name === "Dashboard" ? "/dashboard" : `/dashboard/${item.name}`} key={index}
								onClick={() => setCurrentSelection(index)}
								onMouseEnter={() => setHoverState(index)}
								onMouseLeave={() => setHoverState(null)}
								className={`list ${hoverState === index ? 'hover-on' : 'hover-off'} ${currentSelection === index ? 'selected' : ''}`}>

								<img src={item.icon} alt="" />
								<p className={currentSelection === index ? 'selected' : ''}>{item.name}</p>
							</Link>
						);
					})}
				</div>
				<hr />
			</nav>
			<Outlet />
		</div>
	);
};
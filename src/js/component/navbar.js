import React, { useState } from "react";
import { useContext } from "react";
import { Favorites } from "../views/favorites";
import "../../styles/navbar.scss";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const f = useContext(Favorites);
	const [drop, setDrop] = useState(false);
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">
					STAR WARS
				</a>
				<div className="people">
					<Link to="/people">PEOPLE</Link>
				</div>
				<div className="planets">
					<Link to="/planets">PLANETS</Link>
				</div>
				<div className="vehicles">
					<Link to="/vehicles">VEHICLES</Link>
				</div>

				<div className="dropdown ">
					<button
						onClick={() => setDrop(!drop)}
						className="btn btn-secondary dropdown-toggle"
						type="button"
						id="dropdownMenuButton1"
						data-bs-toggle="dropdown"
						aria-expanded="false">
						Favorites
					</button>
					<ul className={"dropdown-menu" + (drop ? " show" : "")} aria-labelledby="dropdownMenuButton1">
						{f.favorites.map((item, index) => {
							return (
								<li key={index}>
									<a className="dropdown-item" href="#">
										{item}
									</a>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</nav>
	);
};

import PropTypes from "prop-types";
import React from "react";
import { Favorites } from "../views/favorites";
import { Link } from "react-router-dom";
import { vehiclesImgs } from "./images";

export function CardVehicle(props) {
	const f = React.useContext(Favorites);

	return (
		<div className="card col">
			<img src={vehiclesImgs["vehicles_" + props.uid]} className="card-img-top" style={{ width: 200 }} />
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<Link to={"/vehicles/" + props.uid} className="btn btn-primary">
					Learn More
				</Link>
				{f.favorites.includes(props.name) ? (
					<button
						onClick={() => {
							f.setFavorites(f.favorites.filter(item => item !== props.name));
						}}
						type="button"
						className="btn btn-warning">
						<i className="far fa-heart" />
					</button>
				) : (
					<button
						onClick={() => {
							f.setFavorites([...f.favorites, props.name]);
						}}
						type="button"
						className="btn btn-outline-warning">
						<i className="far fa-heart" />
					</button>
				)}
				<p className="card-text">
					<small className="text-muted">Last updated 3 mins ago</small>
				</p>
			</div>
		</div>
	);
}

CardVehicle.propTypes = {
	name: PropTypes.string,
	uid: PropTypes.string
};

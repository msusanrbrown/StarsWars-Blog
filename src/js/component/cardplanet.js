import PropTypes from "prop-types";
import React from "react";
import { Favorites } from "../views/favorites";

export function CardPlanet(props) {
	const [planet, setPlanet] = React.useState(null);
	const f = React.useContext(Favorites);

	React.useEffect(() => {
		fetch(`https://www.swapi.tech/api/planets/${props.uid}`)
			.then(res => res.json())
			.then(data => {
				setPlanet(data.result.properties);
			})
			.catch(err => console.error(err));
	}, []);

	return (
		<div className="card col">
			<img src="" className="card-img-top" />
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text">
					Population:
					{planet !== null ? planet.population : null}
				</p>
				<p className="card-text">
					Terrain:
					{planet !== null ? planet.terrain : null}
				</p>

				<a href={"/planets/" + props.uid} className="btn btn-primary">
					<button>Learn More</button>
				</a>
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

CardPlanet.propTypes = {
	name: PropTypes.string,
	uid: PropTypes.string
};

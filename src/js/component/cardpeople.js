import PropTypes from "prop-types";
import React from "react";
import { Favorites } from "../views/favorites";
import { peopleImgs } from "./images";
import { Link } from "react-router-dom";

export function CardPeople(props) {
	const [people, setPeople] = React.useState(null);
	const f = React.useContext(Favorites);

	React.useEffect(() => {
		let url = `https://www.swapi.tech/api/people/${props.uid}`;
		fetch(url)
			.then(res => res.json())
			.then(data => {
				setPeople(data.result.properties);
			})
			.catch(err => console.error(err));
	}, []);

	return (
		<div className="card col">
			<img src={peopleImgs["people_" + props.uid]} className="card-img-top" style={{ width: 200 }} />
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text">
					Gender:
					{people !== null ? people.gender : null}
				</p>
				<p className="card-text">
					Hair Color:
					{people !== null ? people.hair_color : null}
				</p>
				<p className="card-text">
					Eye Color:
					{people !== null ? people.eye_color : null}
				</p>
				<Link to={"/people/" + props.uid} className="btn btn-primary">
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

CardPeople.propTypes = {
	name: PropTypes.string,
	uid: PropTypes.string
};

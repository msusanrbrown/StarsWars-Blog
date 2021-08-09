import React, { useState, useEffect } from "react";
import { CardPlanet } from "../component/cardplanet";

export function Planets() {
	const [planet, setPlanet] = useState([]);

	useEffect(() => {
		let url = "https://www.swapi.tech/api/planets";
		fetch(url)
			.then(res => res.json())
			.then(data => {
				setPlanet(data.results);
			})
			.catch(err => console.error(err));
	}, []);

	return (
		<div>
			{planet.map((item, i) => {
				return <CardPlanet key={i} name={item.name} uid={item.uid} />;
			})}
		</div>
	);
}

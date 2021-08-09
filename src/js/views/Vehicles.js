import React, { useState, useEffect } from "react";
import { CardVehicle } from "../component/cardvehicle";
import { Link } from "react-router-dom";
import { Favorites } from "./favorites";

export function Vehicles() {
	const [vehicle, setVehicle] = useState([]);

	useEffect(() => {
		fetch("https://www.swapi.tech/api/vehicles")
			.then(res => res.json())
			.then(data => {
				setVehicle(data.results);
			})
			.catch(err => console.error(err));
	}, []);

	return (
		<div>
			{vehicle.map((item, i) => {
				return <CardVehicle key={i} name={item.name} uid={item.uid} />;
			})}
		</div>
	);
}

import React from "react";
import { planetsImgs } from "../component/images";

import { useParams } from "react-router-dom";

export function PlanetsIndividual() {
	const params = useParams();

	const [planet, setPlanet] = React.useState(null);
	const [extra, setExtra] = React.useState(null);

	React.useEffect(() => {
		fetch(`https://www.swapi.tech/api/planets/${params.id}`)
			.then(res => res.json())
			.then(data => {
				setPlanet(data.result.properties);
				setExtra(data.result);
			})
			.catch(err => console.error(err));
	}, []);

	return (
		<div>
			<div className="card">
				<img
					src={planetsImgs["planets_" + params.id]}
					className="rounded mx-auto"
					alt="..."
					style={{ width: 500, margin: 0 }}
				/>
				<p>{extra !== null ? extra.description : null}</p>
			</div>
			<table className="table">
				<thead>
					<tr>
						<th scope="col">Name</th>
						<th scope="col">Climate</th>
						<th scope="col">Population</th>
						<th scope="col">Orbital Period</th>
						<th scope="col">Rotation Period</th>
						<th scope="col">Diameter</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{planet !== null ? planet.name : null}</td>
						<td>{planet !== null ? planet.climate : null}</td>
						<td>{planet !== null ? planet.population : null}</td>
						<td>{planet !== null ? planet.orbital_period : null}</td>
						<td>{planet !== null ? planet.rotation_period : null}</td>
						<td>{planet !== null ? planet.diameter : null}</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

import React from "react";
import { vehiclesImgs } from "../component/images";

import { useParams } from "react-router-dom";

export function VehiclesIndividual() {
	const params = useParams();

	const [vehicle, setVehicle] = React.useState(null);
	const [extra, setExtra] = React.useState(null);

	React.useEffect(() => {
		fetch(`https://www.swapi.tech/api/vehicles/${params.id}`)
			.then(res => res.json())
			.then(data => {
				setVehicle(data.result.properties);
				setExtra(data.result);
			})
			.catch(err => console.error(err));
	}, []);

	return (
		<div>
			<div className="card">
				<img
					src={vehiclesImgs["vehicles_" + params.id]}
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
						<th scope="col">Model</th>
						<th scope="col">Vehicle Class</th>
						<th scope="col">Manufacturer</th>
						<th scope="col">Passengers</th>
						<th scope="col">Cargo Capacity</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{vehicle !== null ? vehicle.name : null}</td>
						<td>{vehicle !== null ? vehicle.model : null}</td>
						<td>{vehicle !== null ? vehicle.vehicle_class : null}</td>
						<td>{vehicle !== null ? vehicle.manufacturer : null}</td>
						<td>{vehicle !== null ? vehicle.passengers : null}</td>
						<td>{vehicle !== null ? vehicle.cargo_capacity : null}</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

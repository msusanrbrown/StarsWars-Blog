import React from "react";
import { peopleImgs } from "../component/images";

import { useParams } from "react-router-dom";

export function PeoplePageIndividual(props) {
	const params = useParams();

	const [people, setPeople] = React.useState(null);
	const [extra, setExtra] = React.useState(null);

	React.useEffect(() => {
		fetch(`https://www.swapi.tech/api/people/${params.id}`)
			.then(res => res.json())
			.then(data => {
				setPeople(data.result.properties);
				setExtra(data.result);
			})
			.catch(err => console.error(err));
	}, []);
	console.log(people);

	return (
		<div>
			<div className="card">
				<img
					src={peopleImgs["people_" + params.id]}
					className="rounded mx-auto"
					alt="..."
					style={{ width: 300, margin: 0 }}
				/>
				<p>{extra !== null ? extra.description : null}</p>
			</div>
			<table className="table">
				<thead>
					<tr>
						<th scope="col">Name</th>
						<th scope="col">Birth Year</th>
						<th scope="col">Gender</th>
						<th scope="col">Height</th>
						<th scope="col">Skin Color</th>
						<th scope="col">Eye Color</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{people !== null ? people.name : null}</td>
						<td>{people !== null ? people.birth_year : null}</td>
						<td>{people !== null ? people.gender : null}</td>
						<td>{people !== null ? people.height : null}</td>
						<td>{people !== null ? people.skin_color : null}</td>
						<td>{people !== null ? people.eye_color : null}</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

import React, { useState, useEffect } from "react";
import { CardPeople } from "../component/cardpeople";

export function PeoplePage() {
	const [people, setPeople] = useState([]);

	useEffect(() => {
		let url = "https://www.swapi.tech/api/people";
		fetch(url)
			.then(res => res.json())
			.then(data => {
				setPeople(data.results);
			})
			.catch(err => console.error(err));
	}, []);

	return (
		<div>
			{people.map((item, i) => {
				return <CardPeople key={i} name={item.name} uid={item.uid} />;
			})}
		</div>
	);
}

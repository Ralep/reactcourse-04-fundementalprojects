import data from "./data";
import { useState } from "react";

const App = () => {
	const [people, setPeople] = useState(data);

	const handleIgnorePerson = (id) => {
		const newPeople = people.filter((person) => person.id != id);
		setPeople(newPeople);
	};

	const deletePeople = () => {
		setPeople([]);
	};

	return (
		<>
			<h2>{people.length} birthdays today</h2>
			<button className="btn" type="button" onClick={deletePeople}>
				Delete All
			</button>
			<br />
			{people.map((person) => {
				const { id, name, age, image } = person;
				return (
					<div key={id}>
						<img style={{ width: "150px" }} src={image} />
						<p>{name}</p>
						<p>{age} years</p>
						<button
							className="btn"
							type="button"
							onClick={() => handleIgnorePerson(id)}
						>
							Ignore
						</button>
						<br />
					</div>
				);
			})}
		</>
	);
};
export default App;

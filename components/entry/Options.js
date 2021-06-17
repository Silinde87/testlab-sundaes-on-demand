import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ScoopOption from './ScoopOption';
import { Row } from 'react-bootstrap';

export default function options({ optionType }) {
	const [items, setItems] = useState([]);

	// optionType is 'scoops' or 'toppings'
	useEffect(() => {
		axios
			.get(`http://localhost:3030/${optionType}`)
			.then((response) => setItems(response.data))
			.catch((err) => {
				// TODO: handle error response
			});
	}, [optionType]);

	// TODO: Replace 'null' with ToppingOption when available
	const ItemComponent = optionType === 'scoops' ? ScoopOption : null;

	const optionItems = items.map((item) => (
		<ItemComponent key={item.name} name={item.name} imagePath={item.magePath} />
	));

	return <Row>{optionItems}</Row>;
}

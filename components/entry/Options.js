import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ScoopOption from './ScoopOption';
import ToppingOption from './ToppingOption';
import { Row } from 'react-bootstrap';
import AlertBanner from '../common/AlertBanner';

export default function options({ optionType }) {
	const [items, setItems] = useState([]);
	const [error, setError] = useState(false);

	// optionType is 'scoops' or 'toppings'
	useEffect(() => {
		axios
			.get(`http://localhost:3030/${optionType}`)
			.then((response) => setItems(response.data))
			.catch((err) => setError(true));
	}, [optionType]);

	if (error) return <AlertBanner />;

	const ItemComponent = optionType === 'scoops' ? ScoopOption : ToppingOption;

	const optionItems = items.map((item) => (
		<ItemComponent key={item.name} name={item.name} imagePath={item.magePath} />
	));

	return <Row>{optionItems}</Row>;
}

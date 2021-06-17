import { render, screen } from '@testing-library/react';

import Options from './../Options';

test('displays image for each scoop from server', async () => {
	render(<Options optionType="scoops" />);

	// Find images
	const scoopImages = await screen.findAllByRole('img', { name: /scoop$/i });
	expect(scoopImages).toHaveLength(2);

	// Confirm alt text of images
	const altText = scoopImages.map((el) => el.alt);
	expect(altText).toEqual(['Chocolate scoop', 'Vanilla scoop']);
});

test('displays image for each topping from server', async () => {
	render(<Options optionType="toppings" />);

	// Find images
	const toppingImages = await screen.findAllByRole('img', { name: /topping$/i });
	expect(toppingImages).toHaveLength(3);

	// Confirm alt text of images
	const altText = toppingImages.map((el) => el.alt);
	expect(altText).toEqual(['Cherries topping', 'M&Ms topping', 'Hot fudge topping']);
});

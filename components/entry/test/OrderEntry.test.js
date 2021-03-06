import { render, screen, waitFor } from '@testing-library/react';
import OrderEntry from '../OrderEntry';
import { rest } from 'msw';
import { server } from '../../../mocks/server';

test('handles error for scoops and toppings routes', async () => {
	//Two server callings that generates two errors
	//that generates two Alerts
	server.resetHandlers(
		rest.get('http://localhost:3030/scoops', (req, res, ctx) => res(ctx.status(500))),
		rest.get('http://localhost:3030/toppings', (req, res, ctx) => res(ctx.status(500)))
	);

	render(<OrderEntry setOrderPhase={jest.fn()} />);

	// waits until both errors are generated
	await waitFor(async () => {
		const alerts = await screen.findAllByRole('alert');
		expect(alerts).toHaveLength(2);
	});
});

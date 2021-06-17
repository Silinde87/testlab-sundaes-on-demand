import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SummaryForm from './../SummaryForm';

describe('Checkbox functionality', () => {
	test('Initial state', () => {
		render(<SummaryForm />);
		const checkbox = screen.getByRole('checkbox', { name: /terms and conditions/i });
		const confirmButton = screen.getByRole('button', { name: /confirm order/i });

		//check initial state of checkbox and button
		expect(checkbox).not.toBeChecked();
		expect(confirmButton).toBeDisabled();
	});

	test('checkbox enables button when checked and disables button when unchecked', () => {
		render(<SummaryForm />);

		const checkbox = screen.getByRole('checkbox', { name: /terms and conditions/i });
		const confirmButton = screen.getByRole('button', { name: 'Confirm order' });

		//check initial state of checkbox and button
		expect(checkbox).not.toBeChecked();
		expect(confirmButton).toBeDisabled();

		//Checks button is enable when click on checkbox
		userEvent.click(checkbox);
		expect(confirmButton).toBeEnabled();

		//Checks button is disabled when click on checkbox again
		userEvent.click(checkbox);
		expect(confirmButton).toBeDisabled();
	});
});

describe('Popover functionality', () => {
	test('responds to hover and unhover', async () => {
		render(<SummaryForm />);

		//popover starts out hidden
		const nullPopover = screen.queryByText(/no ice cream will actually be delivered/i);
		expect(nullPopover).not.toBeInTheDocument();

		//popover appears upon mouseover of checkbox label
		const termsAndConditions = screen.getByText(/terms and conditions/i);
		userEvent.hover(termsAndConditions);

		const popover = screen.getByText(/no ice cream will actually be delivered/i);
		expect(popover).toBeInTheDocument();

		//popover disappears when we mouse out
        //unhover is happening asynchronously. We use this method to do the assertion.
		userEvent.unhover(termsAndConditions);
		await waitForElementToBeRemoved(() => screen.queryByText(/no ice cream will actually be delivered/i));
	});
});

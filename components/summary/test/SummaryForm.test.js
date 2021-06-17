import { fireEvent, render, screen } from '@testing-library/react';
import SummaryForm from './../SummaryForm';

test('checbox has correct initial state', () => {
	render(<SummaryForm />);

	const checkbox = screen.getByRole('checkbox', { name: 'I agree to Tems and Conditions' });
	expect(checkbox).not.toBeChecked();
});

test('checkbox enables button when checked and disables button when unchecked', () => {
	render(<SummaryForm />);

	const checkbox = screen.getByRole('checkbox', { name: 'I agree to Tems and Conditions' });
	const confirmButton = screen.getByRole('button', { name: 'Confirm order' });

    //check initial state of checkbox and button
    expect(checkbox).not.toBeChecked();
    expect(confirmButton).toBeDisabled();

    //Checks button is enable when click on checkbox
    fireEvent.click(checkbox);
    expect(confirmButton).toBeEnabled();

    //Checks button is disabled when click on checkbox again
    fireEvent.click(checkbox);
    expect(confirmButton).toBeDisabled();
});

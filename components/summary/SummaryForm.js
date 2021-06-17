import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

export default function SummaryForm() {
	const [tcChecked, setTcChecked] = useState(false);

	const checkboxLabel = (
		<span>
			I agree to <span style={{ color: 'blue' }}> Terms and Conditions</span>
		</span>
	);

	return (
		<form>
			<div className="form-check mb-3">
				<input
					id="check-terms"
					className="form-check-input"
					type="checkbox"
					defaultChecked={tcChecked}
					aria-checked={tcChecked}
					onChange={(e) => setTcChecked(e.target.checked)}
				/>
				<label htmlFor="check-terms" className="form-check-label">
					{checkboxLabel}
				</label>
			</div>
			<Button variant="primary" type="submit" disabled={!tcChecked}>
				Confirm order
			</Button>
		</form>
	);
}

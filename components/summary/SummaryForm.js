import React, { useState } from 'react';
import { Popover, Button, OverlayTrigger } from 'react-bootstrap';

export default function SummaryForm() {
	const [tcChecked, setTcChecked] = useState(false);

	const popover = (
		<Popover id="popover-basic">
			No ice cream will actually be delivered
		</Popover>
	);

	const checkboxLabel = (
		<span>
			I agree to
			<OverlayTrigger placement="right" overlay={popover}>
				<span style={{ color: 'blue' }}> Terms and Conditions</span>
			</OverlayTrigger>
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

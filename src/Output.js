import React from "react"
import "./Output.css"
function Output({ result }) {
	return (
		<div className='output-container'>
			<div className='output-results'>
				<div>
					<p>
						<span className='output-label'>Email</span>: {result.email}
					</p>
				</div>
				<div>
					<p>
						<span className='output-label'>Full Name:</span> {result.name}
					</p>
				</div>
				<div>
					<p>
						<span className='output-label'>Address:</span> {result.address + result.address2}
					</p>
				</div>
				<div>
					<p>
						<span className='output-label'>City:</span> {result.city}
					</p>
				</div>
				<div>
					<p>
						<span className='output-label'>Province:</span> {result.province}
					</p>
				</div>
				<div>
					<p>
						<span className='output-label'>Postal Code:</span> {result.postal_code}
					</p>
				</div>
			</div>
		</div>
	)
}

export default Output

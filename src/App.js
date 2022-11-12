import { useState } from "react"
import Output from "./Output"
import "./App.css"

function App() {
	const provinces = [
		"Alberta",
		"British Columbia",
		"Manitoba",
		"New Brunswick",
		"Newfoundland and Labrador",
		"Northwest Territories",
		"Nova Scotia",
		"Nunavut",
		"Ontario",
		"Prince Edward Island",
		"Quebec",
		"Saskatchewan",
		"Yukon Territory"
	]

	const [click, setClick] = useState(false)
	const [result, setResult] = useState({})
	console.log(click)
	console.log(result)
	const handleClick = () => {
		const email = document.querySelector("#email-input").value
		const name = document.querySelector("#name-input").value
		const address = document.querySelector("#address").value
		const address2 = document.querySelector("#address2").value
		const city = document.querySelector("#city-input").value
		const province = document.querySelector("#provinces-input").value
		const postal_code = document.querySelector("#postal-code-input").value
		setResult({ email, name, address, address2, city, province, postal_code })
		setClick(true)
	}
	return (
		<div className='App'>
			<h1>Data Entry Form</h1>
			<div className='information'>
				<div className='email'>
					<label id='email-label' for='email'>
						Email
					</label>
					<input type='email' id='email-input' name='email' placeholder='Enter email' required />
				</div>
				<div className='name'>
					<label htmlFor='name-label'>Full Name</label>
					<input type='text' id='name-input' name='name' placeholder='Enter your full Name' />
				</div>
			</div>
			<br />
			<div className='addresses'>
				<label id='address-label' htmlFor='address'>
					Address
				</label>

				<input type='text' id='address' name='address' />
				<br />
				<label htmlFor='address2' id='address2-label'>
					Address 2
				</label>
				<input type='text' id='address2' name='address2' />
			</div>
			<br />

			<div className='location'>
				<div className='city'>
					<label htmlFor='city-input'>City</label>
					<input type='text' id='city-input' name='city' />
				</div>
				<div className='province'>
					<label htmlFor='provinces-input'>Provinces</label>
					<select name='provinces' id='provinces-input'>
						<option value='' disabled>
							Choose...
						</option>
						{provinces.map(province => (
							<option key={province} value={province}>
								{province}
							</option>
						))}
					</select>
				</div>
				<div className='postal-code'>
					<label htmlFor='postal-code-input'>Postal Code</label>
					<input type='text' id='postal-code-input' name='postal-code' />
				</div>
			</div>
			<br />
			<div className='submit'>
				<div className='terms-and-conditions'>
					<input type='checkbox' className='terms-and-conditions'></input>
					<label htmlFor='checkbox' style={{ display: "inline" }}>
						Agree to Terms & Conditions
					</label>
				</div>
				<br />
				<span href='/' className='submit-button' onClick={handleClick}>
					Submit
				</span>
			</div>
			{click && <Output result={result} />}
		</div>
	)
}

export default App

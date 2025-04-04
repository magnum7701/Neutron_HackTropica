import '../styles/SignUpCard.scss'

export const SignUpCard = ()=>{
	return(
		<>
			<div className="card">
				<h3>Welcome to <span>Neutron</span></h3>
				<h1>Sign Up</h1>
				<div className="email-signup">
						<h6>Enter your username or email address</h6>
						<input type="text" placeholder='Username or email address' />
				</div>
				<div className="password-signup">
						<h6>Enter your password</h6>
						<input type="text" placeholder='Password' />
				</div>
				<div className="button-signup">
						<button>Sign Up</button>
						<p>Already have an account? <span>Login</span></p>
				</div>
			</div>
		</>
	);
}
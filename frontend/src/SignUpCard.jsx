import '../styles/SignUpCard.scss';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { supabase } from "./main.jsx";

export const SignUpCard = () => {
	const handleGithubSignIn = async () => {
		const { data, error } = await supabase.auth.signInWithOAuth({
			provider: 'github',
		});
	};

	return (
		<>
			<div className="card">
				<h3>Welcome to <span>Neutron</span></h3>
				<h1>Sign In</h1>
				<div>
					<button onClick={handleGithubSignIn}><FaGithub /></button>
					<button><FaGoogle /></button>
				</div>
				{/* <div className="email-signup">
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
				</div> */}
			</div>
		</>
	);
};
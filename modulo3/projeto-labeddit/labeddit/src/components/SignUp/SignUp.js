import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { signUp } from "../../services/user";

const SignUp = ({setLoginButton}) => {
    const [form, onChange, clear] = useForm({ username: "", email: "", password: "" });
    const navigate = useNavigate();
    
    const onSubmitSignUp = (event) => {
        event.preventDefault();
        signUp(form, clear, navigate, setLoginButton)
    }
    
    return (
        <div>
            <form
                onSubmit={onSubmitSignUp}
            >
                <input
                    placeholder="Username"
                    name="username"
                    value={form.username}
                    onChange={onChange}
                    required
                />
                <input
                    placeholder="Email"
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    type="email"
                    required
                />
                <input
                    placeholder="Senha"
                    name="password"
                    value={form.password}
                    onChange={onChange}
                    type="password"
                    required
                />
                <button
                    type="submit"
                >Enviar</button>
            </form>

        </div>
    );
};

export default SignUp;
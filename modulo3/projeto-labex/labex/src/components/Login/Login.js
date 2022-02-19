import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../../constants/baseurl';
import { InputContainer, TitleContainer } from './style';
import useForm from '../../hooks/useForm';
import { MainStyle } from '../../style-app';

const Login = () => {

    const navigate = useNavigate();

    const { form, onChange, cleanFields } = useForm({
        email: "",
        password: "",
    });

    const goToAdminHome = () => {
        navigate('/admin/trips/list');
    };

    const submitLogin = (event) => {
        event.preventDefault();
        login();
        cleanFields();
    }

    const login = async () => {
        const url = `${BASE_URL}/login`

        try {
            const response = await axios.post(url, form)
            localStorage.setItem('token', response.data.token)
            goToAdminHome()
            navigate('/admin/trips/list')

        } catch (error) {
            alert(`Ocorreu um erro. Tente novamente. ${error.response.data.message}!`)
        };
    };



    return (
        <MainStyle>
            <TitleContainer>
                <h2>Login</h2>
            </TitleContainer>
            <InputContainer>
                <form onSubmit={submitLogin}>
                    <input
                        placeholder="Email"
                        name={"email"}
                        value={form.email}
                        type="email"
                        onChange={onChange}
                        required
                    >
                    </input>
                    <input
                        placeholder="Senha"
                        name={"password"}
                        type="password"
                        value={form.password}
                        onChange={onChange}
                        required
                    >
                    </input>
                    <button>Entrar</button>
                </form>
            </InputContainer>
        </MainStyle>
    )
};

export default Login;
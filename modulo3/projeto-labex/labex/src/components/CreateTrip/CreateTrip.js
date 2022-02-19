import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "../../constants/baseurl";
import { token } from "../../constants/token";
import useForm from "../../hooks/useForm";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { MainStyle } from "../../style-app";
import { Loading } from "../ApplicationForm/style";
import { InputContainer, TitleContainer } from "./style";

const CreateTrip = () => {
    const [isLoading, setIsLoading] = useState("");

    useProtectedPage();

    const { form, onChange, cleanFields } = useForm({
        name: "",
        planet: "",
        date: "",
        description: "",
        durationInDays: "",
    });

    const submitTrip = (event) => {
        event.preventDefault();
        createTrip();
        cleanFields();
    };

    const createTrip = async () => {
        setIsLoading(true)
        const url = `${BASE_URL}/trips`
        const config = {
            headers: {
                auth: token
            }
        };

        try {
            await axios.post(url, form, config)
            alert("Viagem criada com sucesso!")
            setIsLoading(false)

        } catch (error) {
            alert(`Ocorreu um erro. Tente novamente. ${error.response.data.message}`)
            setIsLoading(false)
        };
    };

    const dateToday = new Date().toISOString().slice(0, 10)

    return (
        <MainStyle>

            <TitleContainer>
                <h2>Crie sua Viagem!</h2>
            </TitleContainer>

            <InputContainer>
                <form onSubmit={submitTrip}>
                    <input
                        placeholder="Nome"
                        name="name"
                        value={form.name}
                        onChange={onChange}
                        pattern={"^.{5,}"}
                        title="Inclua no mínimo 5 letras."
                        required
                    />

                    <input
                        placeholder="Planeta"
                        name="planet"
                        value={form.planet}
                        onChange={onChange}
                        required
                    />

                    <input
                        placeholder="Data (dd/mm/aa)"
                        name="date"
                        value={form.date}
                        onChange={onChange}
                        type="date"
                        min={dateToday}
                        required
                    />

                    <input
                        placeholder="Descrição"
                        name="description"
                        value={form.description}
                        onChange={onChange}
                        rows="5"
                        pattern={"^.{30,}"}
                        title="A descrição precisa ter no mínimo 30 letras."
                        required
                    />

                    <input
                        placeholder="Duração em dias"
                        name="durationInDays"
                        value={form.durationInDays}
                        onChange={onChange}
                        type="number"
                        min={50}
                        required
                    />

                    {isLoading &&
                        <Loading>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </Loading>}
                    {!isLoading && <button>Enviar</button>}
                </form>

            </InputContainer>
        </MainStyle>
    )
};

export default CreateTrip;
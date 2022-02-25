import axios from 'axios';
import { useState, useMemo } from "react";
import Select from 'react-select';
import countryList from "react-select-country-list";
import { BASE_URL } from '../../constants/baseurl';
import useForm from '../../hooks/useForm';
import useRequestData from '../../hooks/useRequestData';
import { MainStyle } from '../../style-app';
import { FormContainer, SelectContainer, TitleContainer, Loading } from './style';

const customStyles = {
    option: () => ({
        borderBottom: '1px solid lightgray',
        padding: 10,
    }),
}

const ApplicationForm = () => {
    const options = useMemo(() => countryList().getData(), []);
    const [idValue, setIdValue] = useState("");
    const [countryValue, setCountryValue] = useState("");
    const [trips] = useRequestData(`${BASE_URL}/trips`);
    const [isLoading, setIsLoading] = useState("");

    const { form, onChange, cleanFields } = useForm({
        name: "",
        age: "",
        applicationText: "",
        profession: "",
    });

    const submitToTrip = (event) => {
        event.preventDefault();
        applyToTrip();
        cleanFields();
    };


    const applyToTrip = async () => {
        setIsLoading(true)
        const url = `${BASE_URL}/trips/${idValue}/apply`
        const body = {
            name: form.name,
            age: form.age,
            applicationText: form.applicationText,
            profession: form.profession,
            country: countryValue.label,
        };

        try {
            await axios.post(url, body)
            setCountryValue("");
            alert("Você foi inscrito na viagem com sucesso!")
            setIsLoading(false)

        } catch (error) {
            alert(`Ocorreu um erro. Tente novamente.${error.response}`)
            setIsLoading(false)
        };
    };

    const changeTrip = (event) => {
        setIdValue(event.target.value);
    };

    const countryHandler = (value) => {
        const country = `${value.label}-${value.value}`;
        setCountryValue(value);
    };

    const renderTripSelect = trips && trips.map((trip) => {
        return (
            <option
                value={trip.id}
                key={trip.id}>{trip.name}
            </option>
        )
    });

    return (
        <MainStyle>
            <TitleContainer>
                <h2>Inscreva-se</h2>
            </TitleContainer>
            <FormContainer>
                <form onSubmit={submitToTrip}>
                    <select onChange={changeTrip} defaultValue="">
                        <option value="" disabled>Escolha a viagem</option>
                        {renderTripSelect}
                    </select>

                    <input
                        placeholder="Nome"
                        name="name"
                        value={form.name}
                        onChange={onChange}
                        pattern={"^.{3,}"}
                        title="O nome precisa ter no mínimo 3 letras."
                        required
                    />

                    <input
                        placeholder="Idade"
                        name="age"
                        value={form.age}
                        onChange={onChange}
                        type="number"
                        min={18}
                        required
                    />

                    <input
                        placeholder="Texto de Candidatura"
                        name="applicationText"
                        value={form.applicationText}
                        onChange={onChange}
                        rows="5"
                        pattern={"^.{30,}"}
                        title="O texto precisa ter no mínimo 30 caracteres"
                        required
                    />

                    <input
                        placeholder="Profissão"
                        name="profession"
                        value={form.profession}
                        onChange={onChange}
                        pattern={"^.{4,}"}
                        title="A profissão precisa ter no mínimo 4 caracteres"
                        required
                    />

                    <SelectContainer>
                        <Select
                            styles={customStyles}
                            options={options}
                            value={countryValue}
                            onChange={countryHandler}
                        />
                    </SelectContainer>
                    {isLoading &&
                        <Loading>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </Loading>}
                    {!isLoading && <button>Enviar</button>}
                </form>

            </FormContainer>

        </MainStyle>
    );
};

export default ApplicationForm;
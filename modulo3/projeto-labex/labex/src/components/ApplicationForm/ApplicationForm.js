import axios from 'axios';
import { useState, useMemo } from "react";
import Select from 'react-select';
import countryList from "react-select-country-list";
import { BASE_URL } from '../../constants/baseurl';
import { ApplicationContainer, InputContainer, FormContainer, SelectContainer } from './style';

const customStyles = {
    option: (provided, state) => ({
        borderBottom: '1px solid lightgray',
        padding: 10,
    }),
}

const ApplicationForm = (props) => {
    const options = useMemo(() => countryList().getData(), []);
    const [idValue, setIdValue] = useState("");
    const [inputName, setInputName] = useState("");
    const [inputAge, setInputAge] = useState("");
    const [inputApplicationText, setInputApplicationText] = useState("");
    const [inputProfession, setInputProfession] = useState("");
    const [countryValue, setCountryValue] = useState("");


    const applyToTrip = async () => {
        const url = `${BASE_URL}/trips/${idValue}/apply`
        const body = {
            name: inputName,
            age: inputAge,
            applicationText: inputApplicationText,
            profession: inputProfession,
            country: countryValue.label,
        };

        try {
            const response = await axios.post(url, body)
            setIdValue("");
            setInputName("");
            setInputAge("");
            setInputApplicationText("");
            setInputProfession("");
            setCountryValue("");
            console.log(response.data)

        } catch (error) {
            console.log(error)
        };
    };

    const changeTrip = (event) => {
        setIdValue(event.target.value);
    };

    const changeName = (event) => {
        setInputName(event.target.value);
        console.log(inputName)
    };

    const changeAge = (event) => {
        setInputAge(event.target.value);
        console.log(inputAge)
    };

    const changeApplicationText = (event) => {
        setInputApplicationText(event.target.value);
        console.log(inputApplicationText)
    };

    const changeProfession = (event) => {
        setInputProfession(event.target.value);
        console.log(inputProfession)
    };

    const countryHandler = (value) => {
        const country = `${value.label}-${value.value}`;
        setCountryValue(value);
        console.log(countryValue.label)
    };

    console.log(idValue);

    const renderTripSelect = props.trips.map((trip) => {
        return (
            <option
                value={trip.id}
                key={trip.id}>{trip.name}
            </option>
        )
    });

    return (
        <ApplicationContainer>
            <h2>Inscreva-se</h2>
            <FormContainer>
            <select onChange={changeTrip} defaultValue="">
                <option value="" disabled>Escolha a viagem</option>
                {renderTripSelect}
            </select>
            <InputContainer>
            <form>
                <input
                    placeholder="Nome"
                    value={inputName}
                    onChange={changeName}
                />

                <input
                    placeholder="Idade"
                    value={inputAge}
                    onChange={changeAge}
                />

                <textarea
                    placeholder="Texto de Candidatura"
                    value={inputApplicationText}
                    onChange={changeApplicationText}
                    rows="5"
                />

                <input
                    placeholder="Profissão"
                    value={inputProfession}
                    onChange={changeProfession}
                />

            </form>
            </InputContainer>
            <SelectContainer>
            <Select
            styles={customStyles}
                options={options}
                value={countryValue}
                onChange={countryHandler}
            />
            </SelectContainer>

            <button onClick={() => applyToTrip()}>Enviar</button>
            </FormContainer>
        </ApplicationContainer>
    );
};

export default ApplicationForm;
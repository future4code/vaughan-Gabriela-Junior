import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/baseurl";
import { token } from "../../constants/token";
import { useProtectedPage } from "../../hooks/useprotectedpage";

const CreateTrip = () => {

    useProtectedPage();

    const [inputName, setInputName] = useState("");
    const [inputPlanet, setInputPlanet] = useState("");
    const [inputDate, setInputDate] = useState("");
    const [inputDescription, setInputDescription] = useState("");
    const [inputDuration, setInputDuration] = useState("");

    const navigate = useNavigate();

    const changeName = (event) => {
        setInputName(event.target.value);
        console.log(inputName);
    };
    const changePlanet = (event) => {
        setInputPlanet(event.target.value);
        console.log(inputPlanet);
    };
    const changeDate = (event) => {
        setInputDate(event.target.value);
        console.log(inputDate);
    };
    const changeDescription = (event) => {
        setInputDescription(event.target.value);
        console.log(inputDescription);
    };
    const changeDuration = (event) => {
        setInputDuration(event.target.value);
        console.log(inputDuration);
    };

    const createTrip = async () => {
        const url = `${BASE_URL}/trips`
        const body = {
            name: inputName,
            planet: inputPlanet,
            date: inputDate,
            description: inputDescription,
            durationInDays: inputDuration,
        }
        const config = {
            headers: {
                auth: token
            }
        };

        try {
            const response = await axios.post(url, body, config)
            console.log(response.data)
            setInputName("")
            setInputPlanet("")
            setInputDate("")
            setInputDescription("")
            setInputDuration("")

        } catch (error) {
            console.log(error.response)
        };
    };

    return (
        <div>
            <input
                placeholder="Nome"
                value={inputName}
                onChange={changeName}
            />

            <input
                placeholder="Planeta"
                value={inputPlanet}
                onChange={changePlanet}
            />

            <input
                placeholder="Data (dd/mm/aa)"
                value={inputDate}
                onChange={changeDate}
            />

            <input
                placeholder="Descrição"
                value={inputDescription}
                onChange={changeDescription}
            />

            <input
                placeholder="Duração em dias"
                value={inputDuration}
                onChange={changeDuration}
            />
            <button onClick={createTrip}>Enviar</button>
        </div>
    )
}

export default CreateTrip
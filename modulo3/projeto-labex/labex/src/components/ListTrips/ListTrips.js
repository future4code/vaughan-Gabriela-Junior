import { BASE_URL } from '../../constants/baseurl';
import { TripCard, TripContainer } from './style';
import useRequestData from '../../hooks/useRequestData';
import { Loading } from '../../style-app';

const ListTrips = () => {

    const [trips, isLoading, errorTrips] = useRequestData(`${BASE_URL}/trips`);

    const renderTrips = trips && trips.map((trip) => {
        return (
            <TripCard key={trip.id}>
                <p>Nome: {trip.name}</p>
                <p>Planeta: {trip.planet}</p>
                <p>Descrição: {trip.description}</p>
                <p>Duração: {trip.durationInDays} dias</p>
                <p>Data: {trip.date}</p>
            </TripCard>
        )
    });

    return (
        <TripContainer>
            {isLoading &&
                <Loading>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </Loading>}

            {!isLoading && errorTrips && <p>Ocorreu um erro. Tente de novo.</p>}
            {!isLoading && trips && renderTrips}
            {!isLoading && trips && trips.length === 0 && (<p>Não há viagens.</p>)}
        </TripContainer>
    );
};

export default ListTrips;
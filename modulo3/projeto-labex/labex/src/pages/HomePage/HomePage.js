import Header from '../../components/Header/Header';
import SpaceImage from '../../assets/imgs/space_trip.jpg';
import spaceBackground from '../../assets/imgs/space-background.jpg';
import { Div, Image, HomeContainer } from './style';

const HomePage = () => {

    return (
        <Div>
            <Header />
            <HomeContainer>
                <Image src={spaceBackground} alt="Imagem de Foguete" />
                <p>Anim anim esse laboris elit sint labore. Consequat velit irure minim consectetur aliqua et pariatur laborum id.
                    Quis in eiusmod deserunt dolore pariatur tempor sint. Consequat sint nostrud do quis.
                    Fugiat anim laboris nostrud officia. Ullamco ut ex enim eu laboris aliquip mollit veniam ea ea officia Lorem. 
                    Sunt est minim exercitation ea veniam.Esse sunt incididunt anim exercitation incididunt velit et ad laboris dolor est in. 
                    Consequat minim nostrud ut consectetur cupidatat mollit minim id minim officia aliqua quis dolore anim. Labore cillum labore proident consectetur laborum 
                    pariatur labore nisi culpa pariatur. Velit laboris ullamco excepteur commodo ullamco deserunt. <br/>

                    Adipisicing nostrud exercitation qui ea amet sit nisi irure. Cupidatat do ipsum veniam excepteur excepteur incididunt laborum irure esse. 
                    Id duis est ex eu cupidatat. Occaecat velit velit sint nulla reprehenderit pariatur veniam culpa laboris. Culpa nostrud et ipsum do consequat quis 
                    eiusmod officia mollit dolor. Quis cupidatat laboris sit elit nisi. Proident cillum ex in ad excepteur reprehenderit culpa eu duis.<br/></p>
            </HomeContainer>
        </Div>
    )
}

export default HomePage
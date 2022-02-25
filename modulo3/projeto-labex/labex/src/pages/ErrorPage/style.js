import styled from 'styled-components';
import { secondColor } from '../../constants/colors';
import NebulaImage from '../../assets/imgs/orion-nebula.webp';

export const ErrorContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    color: ${secondColor};
    background-image: url(${NebulaImage});
    background-size: 100%;
`
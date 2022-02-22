import styled from 'styled-components';
import { mainColor } from '../../constants/colors';

export const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50vw;
    border: 1px solid ${mainColor};
    border-radius: .5em;
    margin: 10px;
`

export const UserContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
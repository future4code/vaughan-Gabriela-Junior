import { Button } from '@material-ui/core';
import styled from 'styled-components';
import { mainColor } from '../../constants/colors';

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px;
    width: 40vw;
    border: 1px solid ${mainColor};
    border-radius: .5em;
    form{
        display: flex;
        flex-direction: column;
        width: 35vw;
    }
`
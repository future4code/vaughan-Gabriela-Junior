import styled from 'styled-components';
import { mainColor } from '../../constants/colors';

export const PostContainer = styled.div`
    width: 50vw;
    border: 1px solid ${mainColor};
    border-radius: .3em;
    text-align: center;
`

export const PostDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
`

export const UserContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

export const CommentContainer = styled.div`
    max-width: 50vw;
    margin: 10px;
`
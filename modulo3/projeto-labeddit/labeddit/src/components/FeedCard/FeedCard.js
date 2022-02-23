import { useNavigate } from "react-router-dom";
import { goToPost } from "../../routes/coordinator";
import { changePostVote, createPostVote, deletePostVote } from "../../services/posts";
import { PostContainer, ButtonContainer, CardButton, SearchContainer } from "./styled";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import { Button, CircularProgress, makeStyles, Tooltip, Typography, alpha, TextField, InputBase } from "@material-ui/core";
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import CommentIcon from '@material-ui/icons/Comment';
import SearchIcon from '@material-ui/icons/Search';
import useForm from "../../hooks/useForm";
import { MainStyle } from "../../styled-app";

const useStyles = makeStyles((theme) => ({
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: "#ffffff",
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

const FeedCard = ({ posts, getPosts, isLoading, error }) => {
    const classes = useStyles();
    const [form, onChange] = useForm({ search: "" });
    const navigate = useNavigate();
    console.log(posts);

    const changeToPost = (id) => {
        goToPost(navigate, id);
    };

    const renderPosts = posts && posts
        .filter((post) => {
            return post.title.toLowerCase().includes(form.search.toLowerCase()) ||
                post.body.toLowerCase().includes(form.search.toLowerCase())
        })
        .map((post) => {
            const date = new Date(post.createdAt)
            const fullDate = date.toDateString();
            const time = `${date.getHours()}:${date.getMinutes()}`;
            return (
                <PostContainer key={post.id}>
                    <CardButton onClick={() => changeToPost(post.id)}><Typography paragraph variant="caption">Criado por <b>{post.username}</b> em {fullDate} às {time}</Typography>
                        <Typography variant="h5" paragraph>{post.title} </Typography>
                        <Typography variant="body1" paragraph>{post.body} </Typography></CardButton>
                    <ButtonContainer>
                        {post.userVote === 1 || post.userVote === -1 ? <Button onClick={() => changePostVote(post.id, getPosts, -1)}> <ThumbDownIcon /></Button> :
                            <Button onClick={() => createPostVote(post.id, getPosts, -1)}> <ThumbDownIcon /> </Button>
                        }
                        <Tooltip title="Delete seu voto" >
                            <Button onClick={() => deletePostVote(post.id, getPosts)}>{post.voteSum == null ? 0 : (post.voteSum)}</Button>
                        </Tooltip>
                        {post.userVote === 1 || post.userVote === -1 ? <Button onClick={() => changePostVote(post.id, getPosts, 1)}> <ThumbUpIcon /></Button> :
                            <Button onClick={() => createPostVote(post.id, getPosts, 1)}> <ThumbUpIcon /> </Button>
                        }
                        <Button onClick={() => changeToPost(post.id)}> <CommentIcon /> {post.commentCount == null ? 0 : (post.commentCount)} comentários</Button>
                    </ButtonContainer>

                </PostContainer>
            )
        });

    return (
        <MainStyle>
            {!isLoading && <SearchContainer className={classes.search}>
                <div className={classes.searchIcon}>
                    <SearchIcon color="primary" />
                </div>
                <InputBase
                    placeholder="Pesquisar…"
                    label="Pesquisar..."
                    name="search"
                    value={form.search}
                    onChange={onChange}
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                />
            </SearchContainer>}
            {isLoading && <CircularProgress />}
            {!isLoading && error && <p>Ocorreu um erro.</p>}
            {!isLoading && posts && renderPosts}
        </MainStyle>
    );
};

export default FeedCard;


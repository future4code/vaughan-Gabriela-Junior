enum GENRE {
    ACTION = "action",
    DRAMA = "drama",
    COMEDY = "comedy",
    ROMANCE = "romance",
    HORROR = "horror"
};

type Movie = {
    name: string,
    releaseDate: number,
    genre: GENRE,
    score?: number
};

const movieName: string = "";
const movieReleaseDate: number = 0;
const movieGenre: string = "";

const returnMovieInType = (movieName: string, movieReleaseDate: number, movieGenre: GENRE, movieScore?: number): Movie => {
    return {name: movieName, releaseDate: movieReleaseDate, genre: movieGenre, score: movieScore }
};

console.table(returnMovieInType("Rocky Horror Picture Show", 1975, GENRE.HORROR, 7.4));
console.table(returnMovieInType("Scott Pilgrim vs. the World", 2010, GENRE.ACTION));
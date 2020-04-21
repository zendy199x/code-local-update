/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
MovieContainer connect Redux with MovieComponent
*/
import { connect } from 'react-redux';
import MovieComponent from '../components/MovieComponent';

//Actions ?
import { addMovieAction, fetchMoviesAction, fetchSuccessAction, fetchFailedAction } from '../actions';

const mapStateToProps = (state) => {        
    return {        
        movies: state.movieReducers
    }
};

const mapDispatchToProps = (dispatch) => {
    return {    
        onFetchMovies: () => {                        
            dispatch(fetchMoviesAction());
        }, 
        //Not necessary !   
        // onSuccessFetch: () => {                        
        //     dispatch(fetchSuccessAction());
        // }, 
        onAddMovie: (newMovie) => {                        
            dispatch(addMovieAction(newMovie));
        }
    };
}
const MovieContainer = connect(mapStateToProps, mapDispatchToProps)(MovieComponent);
export default MovieContainer;
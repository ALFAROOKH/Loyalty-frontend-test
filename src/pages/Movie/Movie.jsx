import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import * as actions from "../../store/actions";



const Movie = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.GetMovieList());
    }, [dispatch]);

    const result = useSelector((state) => state.movie.movieList) || []
    console.log(result)

    const buttonMovieId = (id) => {
        console.log(id)
    }


    return (
        <>
            <div>
                <h1>MOVIES</h1>
                {
                    result.map((data, i) => (
                        <ul key={i}>
                            {/* eslint-disable-next-line */}
                            <li><a onClick={() => buttonMovieId(data.id)} >{data.title}</a></li>
                        </ul>
                    ))
                }

                {/* {
                    result.map((data, i) => (
                        <div className="card" key={i}>
                            <label className="card-header label">{data.title}</label><br />
                            <div className="card-body">
                                <img src={data.poster_path} alt="movie" />
                            </div>

                        </div>
                    ))
                } */}
            </div>
        </>
    )
}

export default Movie
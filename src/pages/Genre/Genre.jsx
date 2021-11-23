import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import * as actions from "../../store/actions";



const Genre = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.GetGenreList());
    }, [dispatch]);

    const result = useSelector((state) => state.genre.genreList) || []
    console.log(result)


    return (
        <>
            <div>
                <h1>GENRES</h1>

                {
                    result.map((data, i) => (
                        <button key={i}>{data.name}</button>
                    ))
                }
            </div>
        </>
    )
}

export default Genre
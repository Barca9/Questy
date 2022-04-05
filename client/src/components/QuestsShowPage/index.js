import {useState, useEffect} from "react";
import {useDispatch} from "react-redux";
import {ACTION_GET_DATA_LIST_REQUESTED} from "../../ducks/quests/actions";


const QuestsShowPage = () => {
    const dispatch = useDispatch()

    const url = '/api/quest/get'

    useEffect(()=>{
        dispatch(ACTION_GET_DATA_LIST_REQUESTED(url))
    },[])


    return (
        <div>
            <input type="text" />
        </div>
    )
}

export default QuestsShowPage
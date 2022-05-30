import {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {ACTION_GET_DATA_LIST_REQUESTED} from "../../ducks/quests/actions";
import {getQuestsListSaga} from "../../ducks/quests/sagas";
import {loadingDataSelector} from "../../ducks/quests/selectors";
import Loader from "../helpers/Loader";


const QuestsShowPage = () => {

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(ACTION_GET_DATA_LIST_REQUESTED())
    },[])

    const questsList = useSelector(getQuestsListSaga)

    const loading = useSelector(loadingDataSelector)

    const url = '/api/quest/get'


    return (

        <div>
            {loading
                ? <Loader/>
                : <div>Ку ку</div>
            }

        </div>
    )
}

export default QuestsShowPage
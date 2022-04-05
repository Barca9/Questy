import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {getFinallyBlockSelector} from "../../../ducks/blocksConstructor/selectors";
import {ACTION_RECORD_FINALLY_BLOCK} from "../../../ducks/blocksConstructor/actions";
import {Input, Button} from "@mui/material";

const FinallyBlock = () => {

    const dispatch = useDispatch()
    const getFinallyBlock = useSelector(getFinallyBlockSelector)
    const [isShowResultVue, setIsShowResultVue] = useState(false)
    const [finallyForm, setFinallyForm] = useState({finallyMessage: ''});

    const handlerInputsChange = ({target}) => setFinallyForm(prevState => ({
        ...prevState,
        [target.name]: target.value,
    }))

    /*const handlerInputsChange = ({target}) => setFinallyForm({...finallyForm, [target.name]: target.value})*/

    const handleAddClick = (e) => {
        e.preventDefault()
        console.log(finallyForm)
        dispatch(ACTION_RECORD_FINALLY_BLOCK(finallyForm))
        setIsShowResultVue(true)
    }

    const showResultVue = () => {
        return <div className='text_block'>
            <div className='step_name'>{finallyForm.finallyMessage}</div>
        </div>
    }


    return isShowResultVue ? showResultVue()
        :<div className='finally_block'>Финальный блок
        <form className='form_inputs'>
            <Input type="text" placeholder='Результат квеста'
                   name='finallyMessage'
                   value={finallyForm.message}
                   onChange={handlerInputsChange}
            />
            <Button onClick={handleAddClick}
                    variant="outlined">
                Добавить</Button>
        </form>
    </div>
}

export default FinallyBlock
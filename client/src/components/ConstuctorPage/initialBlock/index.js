import {useState} from "react";
import {useDispatch} from "react-redux";
import {ACTION_RECORD_INITIAL_BLOCK} from "../../../ducks/blocksConstructor/actions";
import {Button, Input} from "@mui/material";

const InitialBlock = () => {

    const dispatch = useDispatch()
    const [isShowResultVue, setIsShowResultVue] = useState(false)
    const [initialForm, setInitialForm] = useState({name: '', title: '', target: ''});

    const handlerInputsChange = ({target}) => setInitialForm(prevState => ({
        ...prevState,
        [target.name]: target.value,
    }))

    const handleAddClick = (e) => {
        e.preventDefault()
        dispatch(ACTION_RECORD_INITIAL_BLOCK(initialForm))
        setIsShowResultVue(true)
    }

    const showResultVue = () => {
        return <div className='text_block'>
            <div className='step_name'>{initialForm.name}</div>
            <div className='text_content'>{initialForm.title}</div>
            <div className='text_content'>{initialForm.target}</div>
        </div>
    }


    return isShowResultVue ? showResultVue()
        : <div className='initial_block'>Начальный блок
            <div className='form_inputs'>
                <Input type="text" placeholder='Название квеста'
                       name='name'
                       value={initialForm.name}
                       onChange={handlerInputsChange}/>
                <Input type="text" placeholder='Описание'
                       name='title'
                       value={initialForm.title}
                       onChange={handlerInputsChange}/>
                <Input type="text" placeholder='Результат квеста'
                       name='target'
                       value={initialForm.target}
                       onChange={handlerInputsChange}/>
                <Button onClick={handleAddClick}
                        variant="outlined">Добавить</Button>
            </div>
        </div>
}

export default InitialBlock
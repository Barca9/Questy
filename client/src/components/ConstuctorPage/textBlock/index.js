import {useDispatch, useSelector} from "react-redux";
import {getFinallyBlockSelector} from "../../../ducks/blocksConstructor/selectors";
import {useState} from "react";
import {ACTION_DELETE_CONTENT_BLOCK, ACTION_RECORD_CONTENT_BLOCK} from "../../../ducks/blocksConstructor/actions";
import {Button, IconButton, Input, TextField} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import './style.css'

const TextBlock = ({index, id}) => {

    const dispatch = useDispatch()
    const [contentForm, setContentForm] = useState({id:id, order: index, nameStep: '', content: ''});
    const [isShowResultVue, setIsShowResultVue] = useState(false)

    const handlerInputsChange = ({target}) => setContentForm(prevState => ({
        ...prevState,
        [target.name]: target.value,
    }))

    const handlerAddClick = (e) => {
        e.preventDefault()
        dispatch(ACTION_RECORD_CONTENT_BLOCK(contentForm))
        setIsShowResultVue(true)
    }

    const handlerDeleteClick = () => {
        dispatch(ACTION_DELETE_CONTENT_BLOCK(id))
    }


    const showResultVue = () => {
        return <div className='text_block'>
            <div className='step_name'>{contentForm.nameStep}</div>
            <div className='text_content'>{contentForm.content}</div>
            <Button onClick={handlerDeleteClick}>Удалить</Button>
        </div>
    }


    return isShowResultVue ? showResultVue()
        : <div className='text_block'>Контент
            <div className='form_inputs'>
                <Input type="text" placeholder='Название шага'
                       label="Multiline Placeholder"
                       name='nameStep'
                       value={contentForm.nameStep}
                       onChange={handlerInputsChange}
                           margin="dense"/>
                <Input placeholder='Описание'
                       label="Multiline Placeholder"
                          name='content'
                     multiline
                          value={contentForm.content}
                          onChange={handlerInputsChange}
                           margin="dense"
                           rows={3}
                        />
                <Button onClick={handlerAddClick}
                        variant="outlined">
                    Добавить
                </Button>
                <IconButton aria-label="delete" onClick={handlerDeleteClick} classes='btn-delete'>
                    <DeleteIcon />
                </IconButton>
            </div>
        </div>


}


export default TextBlock
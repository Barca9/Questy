import {useDispatch, useSelector} from "react-redux";
import {getFinallyBlockSelector} from "../../../ducks/constructor/selectors";
import {useState} from "react";
import {ACTION_DELETE_CONTENT_BLOCK, ACTION_RECORD_CONTENT_BLOCK} from "../../../ducks/constructor/actions";
import {Button, IconButton, Input} from "@mui/material";
import './style.css'
import DeleteIcon from "@mui/icons-material/Delete";


const MapBlock = ({index, id}) => {

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

    function createMarkup() {
        return {__html: contentForm.content};
    }


    const showResultVue = () => {
        return <div className='text_block'>
            <div className='step_name'>{contentForm.nameStep}</div>
            <div className='divForMap' dangerouslySetInnerHTML={createMarkup()}/>
            <button onClick={handlerDeleteClick}>Удалить</button>
        </div>
    }

    console.log(contentForm.content)

    return isShowResultVue ? showResultVue()
        : <div className='text_block'>Контент
            <div className='form_inputs'>
                <Input type="text" placeholder='Название шага'
                       label="Multiline Placeholder"
                       name='nameStep'
                       value={contentForm.nameStep}
                       onChange={handlerInputsChange}
                       margin="dense"/>
                    <Input placeholder='Введите html-код от iframe'
                           label="Multiline Placeholder"
                           name='content'
                           multiline
                           value={contentForm.content}
                           onChange={handlerInputsChange}
                           margin="dense"
                           rows={3}/>
                </div>
                <Button onClick={handlerAddClick}>Добавить</Button>
            <IconButton aria-label="delete" onClick={handlerDeleteClick} classes='btn-delete'>
                <DeleteIcon />
            </IconButton>
            </div>
}


export default MapBlock
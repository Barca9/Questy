import {Input} from "@mui/material";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {ACTION_DELETE_CONTENT_BLOCK, ACTION_RECORD_CONTENTS_BLOCKS} from "../../../ducks/blocksConstructor/actions";

const ContentBlock = ({id}) => {

    const dispatch = useDispatch()
    const [formInputs, setFormInputs] = useState({id:id, title: '', text: ''});

    const handlerInputsChange = ({target}) => setFormInputs(prevState => ({
        ...prevState,
        [target.name]: target.value,
    }))

    const changeContentOnState = () => {
        dispatch(ACTION_RECORD_CONTENTS_BLOCKS(formInputs))
    }

    const handlerDeleteClick = () => {
        dispatch(ACTION_DELETE_CONTENT_BLOCK(id))
    }

    return (
        <div className='text_block'>Контент
            <div className='form_inputs'>
                <Input type="text" placeholder='Заголовок'
                       label="Multiline Placeholder"
                       name='title'
                       margin="dense"
                        onChange={handlerInputsChange}/>
                <Input placeholder='Текст'
                       label="Multiline Placeholder"
                       name='text'
                       multiline
                       margin="dense"
                       rows={3}
                       onChange={handlerInputsChange}/>
            </div>
            <button onClick={handlerDeleteClick}>Удалить</button>
            <button onClick={changeContentOnState}>Добавить в стэйт</button>
        </div>
    )
}

export default ContentBlock
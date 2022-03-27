import {useDispatch, useSelector} from "react-redux";
import {getFinallyBlockSelector} from "../../../ducks/blocksConstructor/selectors";
import {useState} from "react";
import {ACTION_DELETE_CONTENT_BLOCK, ACTION_RECORD_CONTENT_BLOCK} from "../../../ducks/blocksConstructor/actions";


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

    const showResultVue = () => {
        return <div className='text_block'>
            <div className='step_name'>{contentForm.nameStep}</div>
            <code className='text_content'>{contentForm.content}</code>
            <button onClick={handlerDeleteClick}>Удалить</button>
        </div>
    }

    console.log(contentForm.content)

    return isShowResultVue ? showResultVue()
        : <div className='text_block'>Контент
            <form className='form_inputs'>
                <input type="text" placeholder='Название шага'
                       name='nameStep'
                       value={contentForm.nameStep}
                       onChange={handlerInputsChange}/>
                <input type='text'
                          placeholder='Введите ссылку'
                          name='content'
                          value={contentForm.content}
                          onChange={handlerInputsChange}/>
                <button onClick={handlerAddClick}>Добавить</button>
                <button onClick={handlerDeleteClick}>Удалить</button>
            </form>
        </div>
}


export default MapBlock
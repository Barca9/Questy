import {useDispatch, useSelector} from 'react-redux'
import {getBlocksSelector} from "../../ducks/blocksConstructor/selectors";
import {ACTION_CREATE_CONTENT_BLOCK, ACTION_SAVE_QUEST} from "../../ducks/blocksConstructor/actions";
import MyButton from "../helpers/myButton";
import ContentBlock from "./сontentBlock";
import {generateId} from "../../helpers/helperFunctions";
import './style.css'

const ConstructorPage = () => {

    const dispatch = useDispatch()

    const blocksSelector = useSelector(getBlocksSelector)

    const addContentBlockClick = () => {
        dispatch(ACTION_CREATE_CONTENT_BLOCK({
            id: generateId(),
            title: '',
            text: ''
        }))
    }

    console.log(blocksSelector)

    const saveQuest = () => {
       dispatch(ACTION_SAVE_QUEST())
    }

    return <div className='constructor'>
        <div className='template_area'>
            <div className='vertical_menu'>
                <div className='vertical_menu_item'>
                    <div className='item_inner'>
                    </div>
                </div>
            </div>
            <div className="gallery">
                <div className='gallery_item'>
                    <div className='template' onClick={addContentBlockClick}
                         id='text-block'>Шаблон с текстом
                    </div>
                    <div className='template'
                         id='map-block'>Шаблон с картой
                    </div>
                    <div className='template'>Шаблон с видео</div>
                    <div className='template'>Шаблон с музыкой</div>
                </div>
            </div>
        </div>
        <div className='constructor_area'>
            <div className='buttons_area'>
                <MyButton nameButton='Запустить квест'/>
                <MyButton nameButton='Остановить квест'/>
                <MyButton nameButton='Сохранить' func={saveQuest}/>
            </div>
            <div className='constructor_window'>
                {blocksSelector.map((item) => (
                        <ContentBlock key={item.id} id={item.id}/>
                    )
                )}
            </div>
        </div>
    </div>
}

export default ConstructorPage

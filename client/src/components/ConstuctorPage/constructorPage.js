import {useDispatch, useSelector} from 'react-redux'
import {ACTION_GET_DATA_LIST_REQUESTED, ACTION_SEND_DATA_QUEST} from "../../ducks/quests/actions";
import InitialBlock from "./initialBlock";
import FinallyBlock from "./finallyBlock";
import TextBlock from "./textBlock";
import {getContentBlocksSelector} from "../../ducks/blocksConstructor/selectors";
import {ACTION_CREATE_CONTENT_BLOCK, ACTION_DELETE_CONTENT_BLOCK} from "../../ducks/blocksConstructor/actions";
import {sendQuestSaga} from "../../ducks/quests/sagas";
import MapBlock from "./mapBlock";
import MyButton from "../helpers/myButton";
import './style.css'

const ConstructorPage = () => {

    const generateId = () => {
        return Math.random().toString(32).substr(2, 10)
    }

    const contentBlocks = useSelector(getContentBlocksSelector)
    const dispatch = useDispatch()

    const addContentBlockClick = (e) => {
        console.log(e.target.id)
        dispatch(ACTION_CREATE_CONTENT_BLOCK({
            id: generateId(),
            type: e.target.id,
            nameStep: '',
            content: ''
        }))
    }


    const urlPost = '/api/quest/create'

    const saveQuestClick = () => {
        dispatch(ACTION_SEND_DATA_QUEST(urlPost))
    }


    const renderingContentBlocks = () => {
        return contentBlocks.map((item, index) => {
                switch (item.type) {
                    case 'text-block':
                        return <TextBlock index={index + 1} id={item.id} key={item.id}/>;
                    case 'map-block':
                        return <MapBlock index={index + 1} id={item.id} key={item.id}/>;
                    default:
                        return <TextBlock/>;
                }
            }
        )
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
                    <div className='template' onClick={addContentBlockClick}
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
                <MyButton nameButton='Сохранить' func={saveQuestClick}/>
            </div>
            <div className='constructor_window'>
                <InitialBlock/>
                {renderingContentBlocks()}
                <FinallyBlock/>
            </div>
        </div>
    </div>
}

export default ConstructorPage

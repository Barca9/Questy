import './style.css'

const MyButton = ({nameButton,func}) => {

    return <>
            <button className='button_constructor' onClick={func}>{nameButton}</button>
            </>

}

export default MyButton

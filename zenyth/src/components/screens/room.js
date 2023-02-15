import { ContentDiv, TempBtn, DivBackgroundData } from "../style/exportedStyle";
import { TitlePage } from "../style/textStyle"
import { useNavigate } from 'react-router';

const Room = props => {

    const history = useNavigate();

    return (
        <>
            <DivBackgroundData background={props.background}>
                    <TitlePage>Nom de la room</TitlePage>
                    <h3>Date de la créeation de la room</h3>
                    <TitlePage>Personnages</TitlePage>
                    <TempBtn type='submit' onClick={ () => history('/data-character/:id')}>Afficher stats character</TempBtn>
                    <TempBtn type='submit' onClick={ () => history('/roll-dice')}>Lancée de dés</TempBtn>
            </DivBackgroundData>
        </>
    )
}

export default Room;
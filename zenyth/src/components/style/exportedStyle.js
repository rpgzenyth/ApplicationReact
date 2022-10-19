/*
    Fonctionnement du exported:
    1- Ajouter le style dans un fichier deja créer ou créer un fichier style
    2- Exporter dans ce fichier le style créer
    3- Importer ici le style
    4- Créer un export avec un nom Export... = ...
*/



import { StyledFooter, StyledHeader, HeaderImg, FooterDiv, TempFooter, ContentDiv } from "./layoutStyle"
import { Btn,BigBtn,BtnBlack,BtnWhite,ImgBigBtn,TempBtn, BtnLinkGame, ShareLink, BtnCopy } from "./buttonStyle"
import { FormCreatePerso, DivForm, LabelForm, SubtitleForm, TitleForm, InputStyled, FormCreateGame, InputGame } from "./formStyle"
import { FondPopUp, ContainerPopUp} from './popupStyle'
import { DivBackground, DivBackgroundData, BlurBackground } from "./backgroundStyled"
import { PersoName, ClassRace, DataCharaDiv, DivDataChara, DivPerso, TextDataChara, DivLegend} from './charactereStyle'
import { Titre, Dice, HistoryResult, Hr, ResultDice, SmallText, SubtitleLegend, TextareaStyled, TitleLegend, TitlePage, TitleDiv, Listing} from "./textStyle"
import { DiceDiv, Link, RollHistory } from './styled'

// ./layoutStyle

export const ExportStyleFooter = StyledFooter
export const ExportStyleHeader = StyledHeader
export const ExportHeaderImg = HeaderImg
export const ExportFooterDiv = FooterDiv
export const ExportTempFooter = TempFooter
export const ExportContentDiv = ContentDiv


// ./bouttonStyle


export const ExportBtn = Btn
export const ExportBigBtn = BigBtn
export const ExportBtnBlack = BtnBlack
export const ExportBtnWhite = BtnWhite
export const ExportImgBigBtn = ImgBigBtn
export const ExportTempBtn = TempBtn
export const ExportBtnLinkGame = BtnLinkGame
export const ExportShareLink = ShareLink
export const ExportBtnCopy = BtnCopy


// ./formStyle

export const ExportFormCreatePerso = FormCreatePerso
export const ExportDivForm = DivForm
export const ExportLabelForm = LabelForm
export const ExportSubtitleForm = SubtitleForm
export const ExportTitleForm = TitleForm
export const ExportInputStyle = InputStyled
export const ExportFormCreateGame = FormCreateGame
export const ExportInputGame = InputGame



// ./popupStyle
export const ExportFondPopUp = FondPopUp
export const ExportContainerPopUp = ContainerPopUp


// ./backgroundStyle

export const ExportDivBackground = DivBackground
export const ExportDivBackgroundData = DivBackgroundData
export const ExportBlurBackground = BlurBackground


// ./charactereStyle
export const ExportPersoName = PersoName
export const ExportClassRace = ClassRace
export const ExportDataCharaDiv = DataCharaDiv
export const ExportDivDataChara = DivDataChara
export const ExportDivPerso = DivPerso
export const ExportTextDataChara = TextDataChara
export const ExportDivLegend = DivLegend


// ./textStyle
export const ExportTitre = Titre 
export const ExportDice = Dice
export const ExportHistoryResult = HistoryResult
export const ExportHr = Hr
export const ExportResultDice = ResultDice
export const ExportSmallText = SmallText
export const ExportSubtitleLegend = SubtitleLegend
export const ExportTextareaStyled = TextareaStyled
export const ExportTitleLegend = TitleLegend
export const ExportTitlePage = TitlePage
export const ExportTitleDiv = TitleDiv
export const ExportListing = Listing


// ./styled
export const ExportDiceDiv = DiceDiv
export const ExportLink = Link
export const ExportRollHistory = RollHistory

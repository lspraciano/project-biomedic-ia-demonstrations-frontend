import BasicTemplatePage from "../BasicTemplatePage/BasicTemplatePage.index.jsx"
import "./predict-page.css"
import ModelMetricCardIndex from "../../components/ModelMetricCard/ModelMetricCard.index.jsx"
import SampleImagesCarousel from "../../components/SampleImagesCarousel/SampleImagesCarousel.index.jsx"
import SendIcon from '@mui/icons-material/Send'
import image1 from "./images/leuc (1).jpg"
import image2 from "./images/leuc (2).jpg"
import image3 from "./images/leuc (3).jpg"
import image4 from "./images/leuc (4).jpg"
import image5 from "./images/leuc (5).jpg"
import image6 from "./images/leuc (6).jpg"
import {Button} from "@mui/material"


const sampleImagesList = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
]

export default function PredictPage() {
    return (
        <BasicTemplatePage>
            <main
                className={"predict-page-content"}
            >
                <div
                    className={"predict-page-content__header-zone"}
                >
                    <div
                        className={"header-zone__model-name"}
                    >
                        IA Hematology Slides
                    </div>
                    <div
                        className={"header-zone__model-infos"}
                    >
                        <ModelMetricCardIndex
                            iconNumber={0}
                            metricName={"Recall"}
                            metricResult={"98,5"}
                        />
                        <ModelMetricCardIndex
                            iconNumber={1}
                            metricName={"Precision"}
                            metricResult={"98,5"}
                        />
                        <ModelMetricCardIndex
                            iconNumber={2}
                            metricName={"mAP"}
                            metricResult={"98,5"}
                        />
                    </div>
                </div>
                <div
                    className={"predict-page-content__body-zone"}
                >
                    <div
                        className={"body-zone__result-zone"}
                    >
                        <img
                            className={"zone__result-zone__image"}
                            src={"src/pages/PredictPage/images/leuc (4).jpg"}
                            alt={"imagem de células sanguíneas de um esfregaço"}
                        />
                    </div>
                    <div
                        className={"body-zone__options-zone"}
                    >
                        <div
                            className={"options-zone__images-sample"}
                        >
                            Amostras de Teste
                            <SampleImagesCarousel
                                imagesList={sampleImagesList}
                            />
                        </div>
                        <div
                            className={"options-zone__loader-image"}
                        >
                            <div
                                className={"loader-image__drag-zone"}
                            >
                                <input type="file"/>
                                <Button variant="contained" endIcon={<SendIcon/>}>
                                    Enviar
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </BasicTemplatePage>
    );
}
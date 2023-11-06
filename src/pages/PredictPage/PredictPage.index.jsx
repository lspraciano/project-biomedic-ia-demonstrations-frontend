import BasicTemplatePage from "../BasicTemplatePage/BasicTemplatePage.index.jsx";
import "./predict-page.css";
import ModelMetricCardIndex from "../../components/ModelMetricCard/ModelMetricCard.index.jsx";
import SampleImagesCarousel from "../../components/SampleImagesCarousel/SampleImagesCarousel.index.jsx";
import DragAndDropFile from "../../components/DragAndDropFile/DragAndDropFile.index.jsx";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {predictImage, resetPredictPageState, setImageDisplayed} from "../../redux/pages/predictPageSlice.js";
import image1 from "./images/sample (1).jpg";
import image2 from "./images/sample (2).jpg";
import image3 from "./images/sample (3).jpg";
import image4 from "./images/sample (4).jpg";
import image5 from "./images/sample (5).jpg";
import image6 from "./images/sample (6).jpg";
import image7 from "./images/sample (7).jpg";
import image8 from "./images/sample (8).jpg";
import image9 from "./images/sample (9).jpg";
import image10 from "./images/sample (10).jpg";
import image11 from "./images/sample (11).jpg";
import image12 from "./images/sample (12).jpg";
import image13 from "./images/sample (13).jpg";
import image14 from "./images/sample (14).jpg";
import image15 from "./images/sample (15).jpg";
import {CircularProgress} from "@mui/material";
import {Link} from "react-router-dom";

const sampleImagesList = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
];

const modelMetrics = [
    {
        name: "Recall",
        value: 97.7
    },
    {
        name: "Precision",
        value: 97.3
    },
    {
        name: "mAP",
        value: 97.9
    }
];

export default function PredictPage() {
    const predictPageState = useSelector(
        store => store.predictPageState
    );

    const dispatch = useDispatch();

    useEffect(() => {
            dispatch(
                setImageDisplayed(
                    "src/pages/PredictPage/images/default-predict.jpg"
                )
            );


            return () => {
                dispatch(
                    resetPredictPageState()
                );
            };
        },
        []
    );

    const setImageToBeDisplayed = async (
        filePath
    ) => {
        await dispatch(
            setImageDisplayed(
                filePath
            )
        );

        await dispatch(
            predictImage(
                {
                    filePath: filePath
                }
            )
        );
    };


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
                        <p>
                            Este modelo detecta leucócitos em imagens
                            escaneadas de esfregaço sanguíneo.
                        </p>
                    </div>
                    <div
                        className={"header-zone__model-infos"}
                    >
                        {
                            modelMetrics.map(
                                (item, index) => {
                                    return <ModelMetricCardIndex
                                        metricName={item["name"]}
                                        metricResult={item["value"]}
                                        key={index}
                                    />
                                }
                            )
                        }
                    </div>
                </div>
                <div
                    className={"predict-page-content__body-zone"}
                >
                    <div
                        className={"body-zone__result-zone"}
                    >
                        {
                            predictPageState.loading ?
                                <CircularProgress color="inherit"/>
                                :
                                <img
                                    className={"zone__result-zone__image"}
                                    src={predictPageState.displayedImage}
                                    alt={"imagem de células sanguíneas de um esfregaço"}
                                />
                        }
                    </div>
                    <div
                        className={"body-zone__options-zone"}
                    >
                        <div
                            className={"options-zone__loader-image"}
                        >
                            <DragAndDropFile
                                setFunction={setImageToBeDisplayed}
                            />
                        </div>
                        <div
                            className={"options-zone__images-sample"}
                        >
                            <p>
                                Clique
                                <Link
                                    to={"https://histologyguide.com/slideview/MH-033hr-blood-smear/07-slide-1.html?x=6734&y=6689&z=100.0"}
                                    target={"_blank"}
                                >
                                    <a>aqui</a>
                                </Link>
                                para acessar uma lâmina escaneada e obtenha suas próprias imagens ou use
                                as imagens abaixo clicando nelas.
                            </p>
                            <SampleImagesCarousel
                                imagesList={sampleImagesList}
                                setFunction={setImageToBeDisplayed}
                            />
                        </div>
                    </div>
                </div>
                <div
                    className={"predict-page-content__footer-zone"}
                >
                    <p>
                        Detections: {
                        JSON.stringify(predictPageState.detections).replace(/\\/g, "")
                    }
                    </p>
                </div>
            </main>
        </BasicTemplatePage>
    );
}
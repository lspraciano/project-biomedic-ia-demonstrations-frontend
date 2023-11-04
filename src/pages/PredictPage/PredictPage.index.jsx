import BasicTemplatePage from "../BasicTemplatePage/BasicTemplatePage.index.jsx";
import "./predict-page.css";
import ModelMetricCardIndex from "../../components/ModelMetricCard/ModelMetricCard.index.jsx";
import SampleImagesCarousel from "../../components/SampleImagesCarousel/SampleImagesCarousel.index.jsx";
import image1 from "./images/leuc (1).jpg";
import image2 from "./images/leuc (2).jpg";
import image3 from "./images/leuc (3).jpg";
import image4 from "./images/leuc (4).jpg";
import image5 from "./images/leuc (5).jpg";
import image6 from "./images/leuc (6).jpg";
import DragAndDropFile from "../../components/DragAndDropFile/DragAndDropFile.index.jsx";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {resetPredictPageState, setImageDisplayed} from "../../redux/pages/predictPageSlice.js";


const sampleImagesList = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
];

const modelMetrics = [
    {
        name: "Recall",
        value: 98.7
    },
    {
        name: "Precision",
        value: 99.1
    },
    {
        name: "mAP",
        value: 98.4
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


    const setImageToBeDisplayed = (
        filePath
    ) => {
        dispatch(
            setImageDisplayed(
                filePath
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
                        <img
                            className={"zone__result-zone__image"}
                            src={predictPageState.displayedImage}
                            alt={"imagem de células sanguíneas de um esfregaço"}
                        />
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
                            Amostras de Teste
                            <SampleImagesCarousel
                                imagesList={sampleImagesList}
                                setFunction={setImageToBeDisplayed}
                            />
                        </div>
                    </div>
                </div>
            </main>
        </BasicTemplatePage>
    );
}
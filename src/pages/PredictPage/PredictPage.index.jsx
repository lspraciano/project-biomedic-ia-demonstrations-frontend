import "./predict-page.css";
import BasicTemplatePage from "../../components/BasicTemplatePage/BasicTemplatePage.index.jsx";
import PredictTool from "../../components/PredictTool/PredictTool.index.jsx";
import leucoScan1 from "./images/leuco-scan/sample (1).jpg";
import leucoScan2 from "./images/leuco-scan/sample (2).jpg";
import leucoScan3 from "./images/leuco-scan/sample (3).jpg";
import leucoScan4 from "./images/leuco-scan/sample (4).jpg";
import leucoScan5 from "./images/leuco-scan/sample (5).jpg";
import leucoScan6 from "./images/leuco-scan/sample (6).jpg";
import leucoScan7 from "./images/leuco-scan/sample (7).jpg";
import leucoScan8 from "./images/leuco-scan/sample (8).jpg";
import leucoScan9 from "./images/leuco-scan/sample (9).jpg";
import leucoScan10 from "./images/leuco-scan/sample (10).jpg";
import leucoScan11 from "./images/leuco-scan/sample (11).jpg";
import leucoScan12 from "./images/leuco-scan/sample (12).jpg";
import leucoScan13 from "./images/leuco-scan/sample (13).jpg";
import leucoScan14 from "./images/leuco-scan/sample (14).jpg";
import leucoScan15 from "./images/leuco-scan/sample (15).jpg";
import leucoOcular1 from "./images/leuco-ocular/ocular (1).jpg";
import leucoOcular2 from "./images/leuco-ocular/ocular (2).jpg";
import leucoOcular3 from "./images/leuco-ocular/ocular (3).jpg";
import leucoOcular4 from "./images/leuco-ocular/ocular (4).jpg";
import leucoOcular5 from "./images/leuco-ocular/ocular (5).jpg";
import leucoOcular6 from "./images/leuco-ocular/ocular (6).jpg";
import leucoOcular7 from "./images/leuco-ocular/ocular (7).jpg";
import leucoOcular8 from "./images/leuco-ocular/ocular (8).jpg";
import leucoOcular9 from "./images/leuco-ocular/ocular (9).jpg";
import leucoOcular10 from "./images/leuco-ocular/ocular (10).jpg";
import leucoOcular11 from "./images/leuco-ocular/ocular (11).jpg";
import leucoOcular12 from "./images/leuco-ocular/ocular (12).jpg";
import leucoOcular13 from "./images/leuco-ocular/ocular (13).jpg";
import leucoOcular14 from "./images/leuco-ocular/ocular (14).jpg";
import leucoOcular15 from "./images/leuco-ocular/ocular (15).jpg";


const modelsData = [
    {
        loading: false,
        modelName: "Leucócitos em Scan",
        modelDescription: "Este modelo detecta leucócitos em imagens de lâminas escaneadas",
        metrics: [
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
        ],
        sampleImageList: [
            leucoScan1,
            leucoScan2,
            leucoScan3,
            leucoScan4,
            leucoScan5,
            leucoScan6,
            leucoScan7,
            leucoScan8,
            leucoScan9,
            leucoScan10,
            leucoScan11,
            leucoScan12,
            leucoScan13,
            leucoScan14,
            leucoScan15,
        ],
        targetUrl: "hematological-slides/scanned-leukocytes/predict"
    },
    {
        loading: false,
        modelName: "Leucócitos em Ocular",
        modelDescription: "Este modelo detecta cromossomos em fotomicrografias",
        metrics: [
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
        ],
        sampleImageList: [
            leucoOcular1,
            leucoOcular2,
            leucoOcular3,
            leucoOcular4,
            leucoOcular5,
            leucoOcular6,
            leucoOcular7,
            leucoOcular8,
            leucoOcular9,
            leucoOcular10,
            leucoOcular11,
            leucoOcular12,
            leucoOcular13,
            leucoOcular14,
            leucoOcular15,
        ],
        targetUrl: "hematological-slides/microscope-leukocytes/predict"
    },
]

export default function PredictPage() {
    return (
        <BasicTemplatePage>
            <div
                className={"predict-page-content"}
            >
                <PredictTool
                    modelsData={modelsData}
                />

            </div>
        </BasicTemplatePage>
    );
}
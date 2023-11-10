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
import serum1 from "./images/blood-serum/serum (1).jpg";
import serum2 from "./images/blood-serum/serum (2).jpg";
import serum3 from "./images/blood-serum/serum (3).jpg";
import serum4 from "./images/blood-serum/serum (4).jpg";
import serum5 from "./images/blood-serum/serum (5).jpg";
import serum6 from "./images/blood-serum/serum (6).jpg";
import serum7 from "./images/blood-serum/serum (7).jpg";
import serum8 from "./images/blood-serum/serum (8).jpg";
import serum9 from "./images/blood-serum/serum (9).jpg";
import serum10 from "./images/blood-serum/serum (10).jpg";
import serum11 from "./images/blood-serum/serum (11).jpg";
import serum12 from "./images/blood-serum/serum (12).jpg";
import ki671 from "./images/ki67/ki67 (1).jpg";
import ki672 from "./images/ki67/ki67 (2).jpg";
import ki673 from "./images/ki67/ki67 (3).jpg";
import ki674 from "./images/ki67/ki67 (4).jpg";
import ki675 from "./images/ki67/ki67 (5).jpg";
import ki676 from "./images/ki67/ki67 (6).jpg";
import ki677 from "./images/ki67/ki67 (7).jpg";
import ki678 from "./images/ki67/ki67 (8).jpg";
import ki679 from "./images/ki67/ki67 (9).jpg";
import ki6710 from "./images/ki67/ki67 (10).jpg";
import ki6711 from "./images/ki67/ki67 (11).jpg";
import ki6712 from "./images/ki67/ki67 (12).jpg";
import ki6713 from "./images/ki67/ki67 (13).jpg";
import ki6714 from "./images/ki67/ki67 (14).jpg";
import ki6715 from "./images/ki67/ki67 (15).jpg";
import mela1 from "./images/melanoma/mela (1).jpg";
import mela2 from "./images/melanoma/mela (2).jpg";
import mela3 from "./images/melanoma/mela (3).jpg";
import mela4 from "./images/melanoma/mela (4).jpg";
import mela5 from "./images/melanoma/mela (5).jpg";
import mela6 from "./images/melanoma/mela (6).jpg";
import mela7 from "./images/melanoma/mela (7).jpg";
import mela8 from "./images/melanoma/mela (8).jpg";
import mela9 from "./images/melanoma/mela (9).jpg";
import mela10 from "./images/melanoma/mela (10).jpg";
import mela11 from "./images/melanoma/mela (11).jpg";
import mela12 from "./images/melanoma/mela (12).jpg";
import mela13 from "./images/melanoma/mela (13).jpg";
import mela14 from "./images/melanoma/mela (14).jpg";
import mela15 from "./images/melanoma/mela (15).jpg";
import sperm1 from "./images/sperm/sperm (1).jpg";
import sperm2 from "./images/sperm/sperm (2).jpg";
import sperm3 from "./images/sperm/sperm (3).jpg";
import sperm4 from "./images/sperm/sperm (4).jpg";
import sperm5 from "./images/sperm/sperm (5).jpg";
import sperm6 from "./images/sperm/sperm (6).jpg";
import sperm7 from "./images/sperm/sperm (7).jpg";
import sperm8 from "./images/sperm/sperm (8).jpg";
import sperm9 from "./images/sperm/sperm (9).jpg";
import sperm10 from "./images/sperm/sperm (10).jpg";
import sperm11 from "./images/sperm/sperm (11).jpg";
import sperm12 from "./images/sperm/sperm (12).jpg";
import sperm13 from "./images/sperm/sperm (13).jpg";
import sperm14 from "./images/sperm/sperm (14).jpg";
import sperm15 from "./images/sperm/sperm (15).jpg";


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
                value: 93.1
            },
            {
                name: "Precision",
                value: 95.5
            },
            {
                name: "mAP",
                value: 95.6
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
    {
        loading: false,
        modelName: "Soro ou Plasma",
        modelDescription: "Este modelo detecta soro ou plasma em tubos de amostras",
        metrics: [
            {
                name: "Recall",
                value: 99.2
            },
            {
                name: "Precision",
                value: 98.5
            },
            {
                name: "mAP",
                value: 98.1
            }
        ],
        sampleImageList: [
            serum1,
            serum2,
            serum3,
            serum4,
            serum5,
            serum6,
            serum7,
            serum8,
            serum9,
            serum10,
            serum11,
            serum12
        ],
        targetUrl: "blood-serum/predict"
    },
    {
        loading: false,
        modelName: "Marcador ki-67",
        modelDescription: "Este modelo detecta células com marcado ki-67",
        metrics: [
            {
                name: "Recall",
                value: 75.1
            },
            {
                name: "Precision",
                value: 74.7
            },
            {
                name: "mAP",
                value: 79.0
            }
        ],
        sampleImageList: [
            ki671,
            ki672,
            ki673,
            ki674,
            ki675,
            ki676,
            ki677,
            ki678,
            ki679,
            ki6710,
            ki6711,
            ki6712,
            ki6713,
            ki6714,
            ki6715,
        ],
        targetUrl: "ki67/predict"
    },
    {
        loading: false,
        modelName: "Melanoma",
        modelDescription: "Este modelo detecta possíveis melanomas",
        metrics: [
            {
                name: "Recall",
                value: 81.3
            },
            {
                name: "Precision",
                value: 86.5
            },
            {
                name: "mAP",
                value: 86.5
            }
        ],
        sampleImageList: [
            mela1,
            mela2,
            mela3,
            mela4,
            mela5,
            mela6,
            mela7,
            mela8,
            mela9,
            mela10,
            mela11,
            mela12,
            mela13,
            mela14,
            mela15,
        ],
        targetUrl: "melanoma/predict"
    },
    {
        loading: false,
        modelName: "Espermatozoide",
        modelDescription: "Este modelo detecta espermatozoide em amostra",
        metrics: [
            {
                name: "Recall",
                value: 96.8
            },
            {
                name: "Precision",
                value: 98.0
            },
            {
                name: "mAP",
                value: 98.3
            }
        ],
        sampleImageList: [
            sperm1,
            sperm2,
            sperm3,
            sperm4,
            sperm5,
            sperm6,
            sperm7,
            sperm8,
            sperm9,
            sperm10,
            sperm11,
            sperm12,
            sperm13,
            sperm14,
            sperm15,
        ],
        targetUrl: "sperm/predict"
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
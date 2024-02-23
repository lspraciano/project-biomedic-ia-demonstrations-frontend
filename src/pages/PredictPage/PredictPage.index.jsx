import "./predict-page.css";
import BasicTemplatePage from "../../components/BasicTemplatePage/BasicTemplatePage.index.jsx";
import PredictTool from "../../components/PredictTool/PredictTool.index.jsx";
import {spermDataModel} from "./modelsData/spermData.js";
import {melanomaDataModel} from "./modelsData/melanomaData.js";
import {ki67DataModel} from "./modelsData/ki67Data.js";
import {bloodSerumDataModel} from "./modelsData/bloodSerumData.js";
import {leucoScanDataModel} from "./modelsData/leucoScanData.js";
import {leucoOcularDataModel} from "./modelsData/leucoOcularData.js";
import {ChromosomeDataModel} from "./modelsData/citoGenChromossome.js";


const modelsData = [
    leucoScanDataModel,
    leucoOcularDataModel,
    spermDataModel,
    melanomaDataModel,
    ki67DataModel,
    bloodSerumDataModel,
    ChromosomeDataModel
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
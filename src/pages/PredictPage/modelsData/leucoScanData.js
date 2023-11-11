import {createModel} from "./createModelsData.js";
import leucoScan1 from "../images/leuco-scan/sample (1).jpg";
import leucoScan2 from "../images/leuco-scan/sample (2).jpg";
import leucoScan3 from "../images/leuco-scan/sample (3).jpg";
import leucoScan4 from "../images/leuco-scan/sample (4).jpg";
import leucoScan5 from "../images/leuco-scan/sample (5).jpg";
import leucoScan6 from "../images/leuco-scan/sample (6).jpg";
import leucoScan7 from "../images/leuco-scan/sample (7).jpg";
import leucoScan8 from "../images/leuco-scan/sample (8).jpg";
import leucoScan9 from "../images/leuco-scan/sample (9).jpg";
import leucoScan10 from "../images/leuco-scan/sample (10).jpg";
import leucoScan11 from "../images/leuco-scan/sample (11).jpg";
import leucoScan12 from "../images/leuco-scan/sample (12).jpg";
import leucoScan13 from "../images/leuco-scan/sample (13).jpg";
import leucoScan14 from "../images/leuco-scan/sample (14).jpg";
import leucoScan15 from "../images/leuco-scan/sample (15).jpg";

export const leucoScanDataModel = createModel(
    "Leucócitos em Scan",
    "Este modelo detecta leucócitos em imagens de lâminas escaneadas",
    [
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
    [
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
    "hematological-slides/scanned-leukocytes/predict"
);
import {createModel} from "./createModelsData.js";
import serum1 from "../images/blood-serum/serum (1).jpg";
import serum2 from "../images/blood-serum/serum (2).jpg";
import serum3 from "../images/blood-serum/serum (3).jpg";
import serum4 from "../images/blood-serum/serum (4).jpg";
import serum5 from "../images/blood-serum/serum (5).jpg";
import serum6 from "../images/blood-serum/serum (6).jpg";
import serum7 from "../images/blood-serum/serum (7).jpg";
import serum8 from "../images/blood-serum/serum (8).jpg";
import serum9 from "../images/blood-serum/serum (9).jpg";
import serum10 from "../images/blood-serum/serum (10).jpg";
import serum11 from "../images/blood-serum/serum (11).jpg";
import serum12 from "../images/blood-serum/serum (12).jpg";

export const bloodSerumDataModel = createModel(
    "Soro ou Plasma",
    "Este modelo detecta soro ou plasma em tubos de amostras",
    [
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
    [
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
    "blood-serum/predict"
);
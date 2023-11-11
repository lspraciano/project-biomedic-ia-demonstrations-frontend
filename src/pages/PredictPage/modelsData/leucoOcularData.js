import {createModel} from "./createModelsData.js";
import leucoOcular1 from "../images/leuco-ocular/ocular (1).jpg";
import leucoOcular2 from "../images/leuco-ocular/ocular (2).jpg";
import leucoOcular3 from "../images/leuco-ocular/ocular (3).jpg";
import leucoOcular4 from "../images/leuco-ocular/ocular (4).jpg";
import leucoOcular5 from "../images/leuco-ocular/ocular (5).jpg";
import leucoOcular6 from "../images/leuco-ocular/ocular (6).jpg";
import leucoOcular7 from "../images/leuco-ocular/ocular (7).jpg";
import leucoOcular8 from "../images/leuco-ocular/ocular (8).jpg";
import leucoOcular9 from "../images/leuco-ocular/ocular (9).jpg";
import leucoOcular10 from "../images/leuco-ocular/ocular (10).jpg";
import leucoOcular11 from "../images/leuco-ocular/ocular (11).jpg";
import leucoOcular12 from "../images/leuco-ocular/ocular (12).jpg";
import leucoOcular13 from "../images/leuco-ocular/ocular (13).jpg";
import leucoOcular14 from "../images/leuco-ocular/ocular (14).jpg";
import leucoOcular15 from "../images/leuco-ocular/ocular (15).jpg";

export const leucoOcularDataModel = createModel(
    "Leucócitos em Ocular",
    "Este modelo detecta cromossomos em fotomicrografias",
    [
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
    [
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
    "hematological-slides/microscope-leukocytes/predict"
);
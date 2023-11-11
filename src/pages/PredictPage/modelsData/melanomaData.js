import {createModel} from "./createModelsData.js";
import mela1 from "../images/melanoma/mela (1).jpg";
import mela2 from "../images/melanoma/mela (2).jpg";
import mela3 from "../images/melanoma/mela (3).jpg";
import mela4 from "../images/melanoma/mela (4).jpg";
import mela5 from "../images/melanoma/mela (5).jpg";
import mela6 from "../images/melanoma/mela (6).jpg";
import mela7 from "../images/melanoma/mela (7).jpg";
import mela8 from "../images/melanoma/mela (8).jpg";
import mela9 from "../images/melanoma/mela (9).jpg";
import mela10 from "../images/melanoma/mela (10).jpg";
import mela11 from "../images/melanoma/mela (11).jpg";
import mela12 from "../images/melanoma/mela (12).jpg";
import mela13 from "../images/melanoma/mela (13).jpg";
import mela14 from "../images/melanoma/mela (14).jpg";
import mela15 from "../images/melanoma/mela (15).jpg";

export const melanomaDataModel = createModel(
    "Melanoma",
    "Este modelo detecta possíveis melanomas",
    [
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
    [
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
    "melanoma/predict"
);
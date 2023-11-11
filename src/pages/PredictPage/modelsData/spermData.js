import {createModel} from "./createModelsData.js";
import sperm1 from "../images/sperm/sperm (1).jpg";
import sperm2 from "../images/sperm/sperm (2).jpg";
import sperm3 from "../images/sperm/sperm (3).jpg";
import sperm4 from "../images/sperm/sperm (4).jpg";
import sperm5 from "../images/sperm/sperm (5).jpg";
import sperm6 from "../images/sperm/sperm (6).jpg";
import sperm7 from "../images/sperm/sperm (7).jpg";
import sperm8 from "../images/sperm/sperm (8).jpg";
import sperm9 from "../images/sperm/sperm (9).jpg";
import sperm10 from "../images/sperm/sperm (10).jpg";
import sperm11 from "../images/sperm/sperm (11).jpg";
import sperm12 from "../images/sperm/sperm (12).jpg";
import sperm13 from "../images/sperm/sperm (13).jpg";
import sperm14 from "../images/sperm/sperm (14).jpg";
import sperm15 from "../images/sperm/sperm (15).jpg";

export const spermDataModel = createModel(
    "Espermatozoide",
    "Este modelo detecta espermatozoide em amostra",
    [
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
    [
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
    "sperm/predict"
);
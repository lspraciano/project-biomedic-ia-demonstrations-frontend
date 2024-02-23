import chromo1 from "../images/chromosomes/chromosomes (1).jpg";
import chromo2 from "../images/chromosomes/chromosomes (2).jpg";
import chromo3 from "../images/chromosomes/chromosomes (3).jpg";
import chromo4 from "../images/chromosomes/chromosomes (4).jpg";
import chromo5 from "../images/chromosomes/chromosomes (5).jpg";
import chromo6 from "../images/chromosomes/chromosomes (6).jpg";
import chromo7 from "../images/chromosomes/chromosomes (7).jpg";
import chromo8 from "../images/chromosomes/chromosomes (8).jpg";
import chromo9 from "../images/chromosomes/chromosomes (9).jpg";
import chromo10 from "../images/chromosomes/chromosomes (10).jpg";
import chromo11 from "../images/chromosomes/chromosomes (11).jpg";
import chromo12 from "../images/chromosomes/chromosomes (12).jpg";
import chromo13 from "../images/chromosomes/chromosomes (13).jpg";
import {createModel} from "./createModelsData.js";

export const ChromosomeDataModel = createModel(
    "Cromossomos CitoGen",
    "Este modelo detecta cromossomos",
    [
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
    [
        chromo1,
        chromo2,
        chromo3,
        chromo4,
        chromo5,
        chromo6,
        chromo7,
        chromo8,
        chromo9,
        chromo10,
        chromo11,
        chromo12,
        chromo13
    ],
    "chromosomes/predict"
);
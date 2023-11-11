import {createModel} from "./createModelsData.js";
import ki671 from "../images/ki67/ki67 (1).jpg";
import ki672 from "../images/ki67/ki67 (2).jpg";
import ki673 from "../images/ki67/ki67 (3).jpg";
import ki674 from "../images/ki67/ki67 (4).jpg";
import ki675 from "../images/ki67/ki67 (5).jpg";
import ki676 from "../images/ki67/ki67 (6).jpg";
import ki677 from "../images/ki67/ki67 (7).jpg";
import ki678 from "../images/ki67/ki67 (8).jpg";
import ki679 from "../images/ki67/ki67 (9).jpg";
import ki6710 from "../images/ki67/ki67 (10).jpg";
import ki6711 from "../images/ki67/ki67 (11).jpg";
import ki6712 from "../images/ki67/ki67 (12).jpg";
import ki6713 from "../images/ki67/ki67 (13).jpg";
import ki6714 from "../images/ki67/ki67 (14).jpg";
import ki6715 from "../images/ki67/ki67 (15).jpg";

export const ki67DataModel = createModel(
    "Marcador ki-67",
    "Este modelo detecta células com marcado ki-67",
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
    "ki67/predict"
);
import "./model-metric-card.css";
import "./model-metric-card-media-queries.css"
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import GrainIcon from '@mui/icons-material/Grain';
import PropTypes from "prop-types";
import {Tooltip} from "@mui/material";

ModelMetricCard.propTypes = {
    metricName: PropTypes.string,
    metricResult: PropTypes.number,
};

export default function ModelMetricCard(
    {
        metricName,
        metricResult,
    }
) {


    const metricsIcons = {
        recall: <GrainIcon key={0}/>,
        precision: <CrisisAlertIcon key={1}/>,
        map: <AutoGraphIcon key={2}/>
    };

    return (
        <Tooltip title={metricName}>
            <div
                className={"mod-card-metr-content"}
            >
                <div
                    className={"mod-card-metr-content__icon-zone"}
                >
                    {metricsIcons[metricName.toLocaleLowerCase()]}
                </div>
                <div
                    className={"mod-card-metr-content__infos-zone"}
                >
                    <div
                        className={"infos-zone__metric-name"}
                    >
                        {metricName}
                    </div>
                    <div
                        className={"infos-zone__metric-result"}
                    >
                        {metricResult}
                    </div>
                </div>
            </div>
        </Tooltip>
    );
}
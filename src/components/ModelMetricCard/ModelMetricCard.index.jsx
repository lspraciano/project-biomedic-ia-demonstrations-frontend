import "./model-metric-card.css";
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import GrainIcon from '@mui/icons-material/Grain';
import PropTypes from "prop-types";

ModelMetricCardIndex.propTypes = {
    metricName: PropTypes.string,
    metricResult: PropTypes.number,
};

export default function ModelMetricCardIndex(
    {
        metricName,
        metricResult
    }
) {


    const metricsIcons = {
        recall: <GrainIcon key={0}/>,
        precision: <CrisisAlertIcon key={1}/>,
        map: <AutoGraphIcon key={2}/>
    };

    return (
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
    );
}
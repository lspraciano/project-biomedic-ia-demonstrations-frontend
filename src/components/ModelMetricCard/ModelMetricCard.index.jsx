import "./model-metric-card.css"
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert'
import AutoGraphIcon from '@mui/icons-material/AutoGraph'
import GrainIcon from '@mui/icons-material/Grain'
import PropTypes from "prop-types";

ModelMetricCardIndex.propTypes = {
    iconNumber: PropTypes.number,
    metricName: PropTypes.string,
    metricResult: PropTypes.number,
};

export default function ModelMetricCardIndex(
    {
        iconNumber,
        metricName,
        metricResult
    }
) {

    const iconsList = [
        <GrainIcon key={0}/>,
        <CrisisAlertIcon key={1}/>,
        <AutoGraphIcon key={2}/>
    ]

    return (
        <div
            className={"mod-card-metr-content"}
        >
            <div
                className={"mod-card-metr-content__icon-zone"}
            >
                {iconsList[iconNumber]}
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
import "./basic-template-page.css";
import PropTypes from "prop-types";

BasicTemplatePage.propTypes = {
    children: PropTypes.node
};


export default function BasicTemplatePage(
    {
        children
    }
) {
    return (
        <div
            className={"bas-temp-page-content"}
        >
            {
                children
            }
        </div>
    );
}


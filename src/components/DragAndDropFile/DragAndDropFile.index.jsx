import "./drag-and-drop-file.css";
import PropTypes from "prop-types";


DragAndDropFile.propTypes = {
    setFunction: PropTypes.func
};

export default function DragAndDropFile(
    {
        setFunction
    }
) {

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleDrop = (event) => {
        event.preventDefault();

        const file = event.dataTransfer.files[0];

        if (file) {
            const objectURL = URL.createObjectURL(file);
            setFunction(objectURL);
        }
    };

    const handleChange = (event) => {
        const filePath = event.target.files[0];

        if (filePath) {
            const objectURL = URL.createObjectURL(filePath);
            setFunction(objectURL);
        }
    };

    return (
        <div
            className={"drag-n-drop-file-content"}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
        >
            <label
                className={"drag-n-drop-file-content__title-zone"}
                htmlFor={"input-file"}
            >
                <img
                    src={"src/components/DragAndDropFile/images/cloud-upload_15.png"}
                    alt={"Imagem ilustrativa de upload"}
                />
                <p>
                    Escolha Sua Image
                </p>
            </label>
            <input
                type={"file"}
                accept={".jpeg, .jpg, .png"}
                value={""}
                id={"input-file"}
                onChange={handleChange}
            />
        </div>
    );
}


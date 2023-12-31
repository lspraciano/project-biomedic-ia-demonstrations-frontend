import './sample-images-carousel.css';
import PropTypes from "prop-types";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

SampleImagesCarousel.propTypes = {
    imagesList: PropTypes.array,
    setFunction: PropTypes.func,
    targetUrl: PropTypes.string,
    loading: PropTypes.bool
};

export default function SampleImagesCarousel(
    {
        imagesList,
        setFunction,
        targetUrl,
        loading
    }
) {

    const responsive = {
        1680: {
            items: 4,
            itemsFit: 'fill',
        },
        0: {
            items: 4,
            itemsFit: 'fill',
        }
    };

    const handleImageClick = async (event) => {
        const imagePath = event.target.src;
        await setFunction(
            imagePath, targetUrl
        );
    };

    return (
        <AliceCarousel
            mouseTracking
            autoPlay={true}
            autoPlayInterval={1000}
            infinite={true}
            autoHeight={true}
            disableButtonsControls
            disableDotsControls
            disableSlideInfo
            responsive={responsive}
            items={
                imagesList.map(
                    (image, index) => {
                        return <img
                            className={
                                !loading ?
                                    "image-carousel"
                                    :
                                    "image-carousel image-carousel--opacity-on-loading"
                            }
                            src={image}
                            alt={"imagem de células sanguíneas de um esfregaço"}
                            key={index}
                            onClick={
                                !loading ?
                                    handleImageClick
                                    :
                                    null
                            }
                        />
                    }
                )
            }/>
    );
}
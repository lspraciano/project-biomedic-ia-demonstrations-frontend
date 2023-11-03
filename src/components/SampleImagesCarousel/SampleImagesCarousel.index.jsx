import './sample-images-carousel.css'
import PropTypes from "prop-types"
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

SampleImagesCarousel.propTypes = {
    imagesList: PropTypes.array
};

export default function SampleImagesCarousel(
    {
        imagesList
    }
) {

    const responsive = {
        1600: {
            items: 4,
            itemsFit: 'fill',
        },
        1200: {
            items: 3,
            itemsFit: 'fill',
        },
        830: {
            items: 2,
            itemsFit: 'fill',
        }
    }

    return (
        <AliceCarousel
            mouseTracking
            autoPlay={true}
            autoPlayInterval={3000}
            infinite={true}
            autoHeight={true}
            responsive={responsive}
            items={
                imagesList.map(
                    (image, index) => {
                        return <img
                            className={"image-carousel"}
                            src={image}
                            alt={"imagem de células sanguíneas de um esfregaço"}
                            key={index}
                        />
                    }
                )
            }/>
    );
}
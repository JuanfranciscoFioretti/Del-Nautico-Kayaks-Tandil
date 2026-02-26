

// import React from 'react';
// import Swiper from 'react-id-swiper';
// // import CustomButton 
// import CustomButton from './CustomButton';
// import CustomScrollbar from './CustomScrollbar';

// const CustomizedComponent = () => {
//   const params = {
//     ContainerEl: 'section',
//     WrapperEl: 'section',
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev'
//     },
//     renderPrevButton: () => <CustomButton className="swiper-button-prev">Prev</CustomButton>,
//     renderNextButton: () => <CustomButton className="swiper-button-next">Next</CustomButton>,
//     scrollbar: {
//         el: '.swiper-scrollbar',
//         hide: false,
//     },
//     renderSrollbar: () => <CustomScrollbar><hr/></CustomScrollbar>
// }

//     return (
//         <Swiper {...params}>
//                 <div className="carrouselImg1 carrousel-img "></div>
//                 <div className="carrouselImg2 carrousel-img "></div>
//                 <div className="carrouselImg3 carrousel-img "></div>
//                 <div className="carrouselImg4 carrousel-img "></div>
//                 <div className="carrouselImg5 carrousel-img "></div>
//                 <div className="carrouselImg6 carrousel-img "></div>
//                 <div className="carrouselImg7 carrousel-img "></div>

//         </Swiper>
//     )
// };

// export default CustomizedComponent;








// .........................................................
// ESTO ES USANDO REACT-FLICKITY


import React from 'react';
import { CCarousel, CCarouselItem, CImage } from '@coreui/react';

const imagen1 = '/assets/CAROUSEL FAV/_DSC0051.jpg';
const imagen2 = '/assets/CAROUSEL FAV/_DSC0155.jpg';
const imagen3 = '/assets/CAROUSEL FAV/DJI_0007-Pano.jpg';
const imagen4 = '/assets/CAROUSEL FAV/_DSC0133.jpg';
const imagen5 = '/assets/CAROUSEL FAV/_DSC0052.jpg';
const imagen6 = '/assets/CAROUSEL FAV/DJI_0011-Pano.jpg';
const imagen7 = '/assets/CAROUSEL FAV/_DSC0084.jpg';
const imagen8 = '/assets/CAROUSEL FAV/_DSC0136.jpg';

const Carrousel = () => {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [isPaused, setIsPaused] = React.useState(false);
    const totalSlides = 8;

    React.useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % totalSlides);
        }, 3500);

        return () => clearInterval(interval);
    }, [isPaused, totalSlides]);
    
    return (
        <CCarousel 
            controls 
            indicators
            transition="crossfade"
            activeIndex={activeIndex}
            onSlide={(index) => setActiveIndex(index)}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <CCarouselItem>
                <CImage className="d-block w-100 carrousel-img" src={imagen1} alt="Familia en el bote a pedal" />
            </CCarouselItem>
            <CCarouselItem>
                <CImage className="d-block w-100 carrousel-img" src={imagen2} alt="Profesor enseñando medidas de seguridad" />
            </CCarouselItem>
            <CCarouselItem>
                <CImage className="d-block w-100 carrousel-img" src={imagen3} alt="Imágen panorámica de Tandil" />
            </CCarouselItem>
            <CCarouselItem>
                <CImage className="d-block w-100 carrousel-img" src={imagen4} alt="Lago de tandil y su géiser" />
            </CCarouselItem>
            <CCarouselItem>
                <CImage className="d-block w-100 carrousel-img" src={imagen5} alt="Familia en el bote a pedal" />
            </CCarouselItem>
            <CCarouselItem>
                <CImage className="d-block w-100 carrousel-img" src={imagen6} alt="Imágen panorámica de Tandil" />
            </CCarouselItem>
            <CCarouselItem>
                <CImage className="d-block w-100 carrousel-img" src={imagen7} alt="Profesor realizando kayak" />
            </CCarouselItem>
            <CCarouselItem>
                <CImage className="d-block w-100 carrousel-img" src={imagen8} alt="Géiser de Tandil junto a un bote a pedal" />
            </CCarouselItem>
        </CCarousel>
    )
}

export default Carrousel;

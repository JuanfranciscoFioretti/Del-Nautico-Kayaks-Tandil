

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
import Flickity from 'react-flickity-component'
import styles from './styles.css';

const flickityOptions = {
    initialIndex: 2
}

const Carrousel = () => {
    return (
        <section className='carrousel-section'>
            <Flickity
                className={'carousel'} // default ''
                elementType={'div'} // default 'div'
                options={flickityOptions} // takes flickity options {}
                disableImagesLoaded={true} // default false
                reloadOnUpdate // default false
                static // default false
            >
                <div className="carrouselImg1 carrousel-img "></div>
                <div className="carrouselImg2 carrousel-img "></div>
                <div className="carrouselImg3 carrousel-img "></div>
                <div className="carrouselImg4 carrousel-img "></div>
                <div className="carrouselImg5 carrousel-img "></div>
                <div className="carrouselImg6 carrousel-img "></div>
                <div className="carrouselImg7 carrousel-img "></div>
            </Flickity>
            
        </section>
        )
}

export default Carrousel;








// .........................................................
// ESTO ES USANDO REACT-SWIPER

// import Swiper from 'react-id-swiper';
// import 'swiper/css/swiper.css';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper.min.css'; // Importa los estilos de swiper
// import 'swiper/components/navigation/navigation.min.css'; // Si necesitas los estilos de navegación
// import 'swiper/components/pagination/pagination.min.css'; // Si necesitas los estilos de paginación
// import 'react-id-swiper/lib/styles/css/swiper.css'; 
// Importa los estilos de react-id-swiper

// const Carrousel = () => {
//     const params = {
//         pagination: {
//             el: '.swiper-pagination',
//             clickable: true,
//             dynamicBullets: true
//         }
//     }
//     return (
//         <div id="customized-component" className="css-xypl4v">
//             <section className="swiper-container swiper-container-initialized swiper-container-horizontal">
//                 <section className="swiper-wrapper" styles="transition-duration: 0ms; transform: translate3d(0px, 0px, 0px);">
//                     <div className="swiper-slide css-1ac7fps swiper-slide-active" styles="width: 400px;">
//                         <h2 className="css-127imdq">Slide #1</h2>
//                     </div>

//                     <div className="swiper-slide css-1uwjm5s swiper-slide-next" styles="width: 400px;">
//                         <h2 className="css-127imdq">Slide #2</h2>
//                     </div>
                    
//                     <div className="swiper-slide css-1hbvkzl" styles="width: 400px;">
//                         <h2 className="css-127imdq">Slide #3</h2>
//                     </div>
                    
//                     <div className="swiper-slide css-zdt40z" styles="width: 400px;">
//                         <h2 className="css-127imdq">Slide #4</h2>
//                     </div>

//                     <div className="swiper-slide css-nkbv67" styles="width: 400px;">
//                         <h2 className="css-127imdq">Slide #5</h2>
//                     </div>

//                     <div className="swiper-slide css-1talip1" styles="width: 400px;">
//                         <h2 className="css-127imdq">Slide #6</h2>
//                     </div>

//                     <div className="swiper-slide css-1e68h4m" styles="width: 400px;">
//                         <h2 className="css-127imdq">Slide #7</h2>
//                     </div>
//                     <div className="swiper-slide css-e18g0f" styles="width: 400px;">
//                         <h2 className="css-127imdq">Slide #8</h2>
//                     </div>
//                 </section>

//                 <div className="swiper-scrollbar css-8zrkb8">
//                     <hr/>
//                     <div className="swiper-scrollbar-drag" styles="transform: translate3d(0px, 0px, 0px); transition-duration: 0ms; width: 48px;">
//                     </div>
//                     </div>
//                     <div className="swiper-button-next css-1yr8xnt" tabindex="0" role="button" aria-label="Next slide" aria-disabled="false">
//                         <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="css-1a2ho44">
//                             <g fill="currentColor" stroke="currentColor" stroke-linecap="square" stroke-width="1">
//                                 <polyline fill="none" points="14,4 34,24 14,44 " stroke="currentColor"></polyline>
//                             </g>
//                         </svg>
//                     </div>
//                     <div className="swiper-button-prev css-1yr8xnt swiper-button-disabled" tabindex="-1" role="button" aria-label="Previous slide" aria-disabled="true">
//                         <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="css-1a2ho44">
//                             <g fill="currentColor" stroke="currentColor" stroke-linecap="square" stroke-width="1">
//                                 <polyline fill="none" points="34,4 14,24 34,44 " stroke="currentColor"></polyline>
//                             </g>
//                         </svg>
//                     </div>
//                     <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
//             </section>
//         </div>
//     )
// }

// export default Carrousel;
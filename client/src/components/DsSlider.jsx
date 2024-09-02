import React, { useEffect } from 'react';
import './Service.css';
import img1 from '../assets/CBT.png';
import img2 from '../assets/TRAUMA THERAPY.png';
import img3 from '../assets/SOMATIC THERAPY.png';
import img4 from '../assets/FOCUS.png';

const ImageSlider = () => {
    useEffect(() => {
        let nextDom = document.getElementById('next');
        let prevDom = document.getElementById('prev');
        let carouselDom = document.querySelector('.custom-carousel');
        let SliderDom = carouselDom.querySelector('.custom-carousel .custom-list');
        let thumbnailBorderDom = document.querySelector('.custom-carousel .custom-thumbnail');
        let thumbnailItemsDom = Array.from(thumbnailBorderDom.querySelectorAll('.custom-item'));

        let timeRunning = 3000;
        let timeAutoNext = 7000;    

        nextDom.onclick = function () {
            showSlider('next');
        }

        prevDom.onclick = function () {
            showSlider('prev');
        }

        let runTimeOut;
        let runNextAuto = setTimeout(() => {
            nextDom.click();
        }, timeAutoNext);

        function showSlider(type, index = null) {
            let SliderItemsDom = Array.from(SliderDom.querySelectorAll('.custom-carousel .custom-list .custom-item'));

            if (type === 'next') {
                SliderDom.appendChild(SliderItemsDom[0]);
                thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
                carouselDom.classList.add('next');
            } else if (type === 'prev') {
                SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
                thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
                carouselDom.classList.add('prev');
            } else if (index !== null) {
                while (SliderDom.firstChild) {
                    SliderDom.removeChild(SliderDom.firstChild);
                }
                while (thumbnailBorderDom.firstChild) {
                    thumbnailBorderDom.removeChild(thumbnailBorderDom.firstChild);
                }

                const reorderedSliderItems = [...SliderItemsDom.slice(index), ...SliderItemsDom.slice(0, index)];
                const reorderedThumbnailItems = [...thumbnailItemsDom.slice(index), ...thumbnailItemsDom.slice(0, index)];

                reorderedSliderItems.forEach(item => SliderDom.appendChild(item));
                reorderedThumbnailItems.forEach(item => thumbnailBorderDom.appendChild(item));

                carouselDom.classList.add('next');
            }

            clearTimeout(runTimeOut);
            runTimeOut = setTimeout(() => {
                carouselDom.classList.remove('next');
                carouselDom.classList.remove('prev');
            }, timeRunning);

            clearTimeout(runNextAuto);
            runNextAuto = setTimeout(() => {
                nextDom.click();
            }, timeAutoNext);
        }

        // Add click event to cards to show more details
        const cardButtons = Array.from(document.querySelectorAll('.custom-carousel .custom-thumbnail .custom-item'));
        cardButtons.forEach((button, index) => {
            button.addEventListener('click', () => {
                showSlider('card', index);
            });
        });

        return () => {
            nextDom.onclick = null;
            prevDom.onclick = null;
            cardButtons.forEach((button, index) => {
                button.removeEventListener('click', () => {
                    showSlider('card', index);
                });
            });
        };
    }, []);

    return (
        <>
            {/* Add the heading here */}
            <div className="offer-section">
                <h2 className="offer-heading">This is what we offer</h2>
            </div>

            <div className="custom-carousel">
                <div className="custom-list">
                    <div className="custom-item">
                        <img src={img1} alt="slider1" />
                        <div className="custom-content">
                            <div className="custom-author">MIND STUDIO</div>
                            <div className="custom-title">SERVICES</div>
                            <div className="custom-topic">THERAPIES</div>
                            <div className="custom-des">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                            </div>
                        </div>
                    </div>
                    <div className="custom-item">
                        <img src={img2} alt="slider2" />
                        <div className="custom-content">
                            <div className="custom-author">SERVICE</div>
                            <div className="custom-title">MIND STUDIO</div>
                            <div className="custom-topic">THERAPIES</div>
                            <div className="custom-des">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                            </div>
                           
                        </div>
                    </div>
                    <div className="custom-item">
                        <img src={img3} alt="slider3" />
                        <div className="custom-content">
                            <div className="custom-author">SERVICE</div>
                            <div className="custom-title">MIND STUDIO</div>
                            <div className="custom-topic">THERAPIES</div>
                            <div className="custom-des">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                            </div>
                           
                        </div>
                    </div>
                    <div className="custom-item">
                        <img src={img4} alt="slider4" />
                        <div className="custom-content">
                            <div className="custom-author">SERVICE</div>
                            <div className="custom-title">MIND STUDIO</div>
                            <div className="custom-topic">THERAPIES</div>
                            <div className="custom-des">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                            </div>
                        </div>
                    </div>
                </div>
                <div className="custom-thumbnail">
                    <div className="custom-item">
                        <img src={img1} alt="thumb1" />
                        <div className="custom-content">
                            <div className="custom-title">Name Slider</div>
                            <div className="custom-description">Description</div>
                        </div>
                    </div>
                    <div className="custom-item">
                        <img src={img2} alt="thumb2" />
                        <div className="custom-content">
                            <div className="custom-title">Name Slider</div>
                            <div className="custom-description">Description</div>
                        </div>
                    </div>
                    <div className="custom-item">
                        <img src={img3} alt="thumb3" />
                        <div className="custom-content">
                            <div className="custom-title">Name Slider</div>
                            <div className="custom-description">Description</div>
                        </div>
                    </div>
                    <div className="custom-item">
                        <img src={img4} alt="thumb4" />
                        <div className="custom-content">
                            <div className="custom-title">Name Slider</div>
                            <div className="custom-description">Description</div>
                        </div>
                    </div>
                </div>
                <div className="custom-arrows">
                    <button id="prev">&lt;</button>
                    <button id="next">&gt;</button>
                </div>
                <div className="custom-time"></div>
            </div>
        </>
    );
}

export default ImageSlider;

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

// Importing images from services page
import image1 from '../assets/O3.webp';
import image2 from '../assets/cc.webp';
import image3 from '../assets/fc.webp';
import image4 from '../assets/gc.webp';

const ImageSlider = () => {
    const navigate = useNavigate();

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
        };

        prevDom.onclick = function () {
            showSlider('prev');
        };

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

    const handleSeeAllServices = () => {
        navigate('/services'); // Redirect to Services page
    };

    return (
        <>
            <div className="offer-section">
                <h2 className="offer-heading">This is what we offer</h2>
            </div>

            <div className="custom-carousel">
                <div className="custom-list">
                    {[
                        { image: image1, name: 'One-on-One Sessions', description: 'Personalized therapy sessions tailored to individual needs, focusing on mental health and well-being in a confidential setting.' },
                        { image: image2, name: 'Couples Counseling', description: 'Helps partners understand and resolve conflicts, improve communication, and strengthen their relationship.' },
                        { image: image3, name: 'Family Counseling', description: 'Addresses family dynamics to resolve issues and improve relationships within the family.' },
                        { image: image4, name: 'Group Counseling', description: 'Therapy sessions with a group of people experiencing similar issues, fostering shared experiences and mutual support.' },
                    ].map((service, index) => (
                        <div className="custom-item" key={index}>
                            <img src={service.image} alt={`slider${index + 1}`} />
                            <div className="custom-content">
                                <div className="custom-author">SERVICE</div>
                                <div className="custom-title">{service.name}</div>
                                <div className="custom-topic">THERAPIES</div>
                                <div className="custom-des">
                                    {service.description}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="custom-thumbnail">
                    {[
                        { image: image1, name: 'One-on-One Sessions' },
                        { image: image2, name: 'Couples Counseling' },
                        { image: image3, name: 'Family Counseling' },
                        { image: image4, name: 'Group Counseling' },
                    ].map((service, index) => (
                        <div className="custom-item" key={index}>
                            <img src={service.image} alt={`thumb${index + 1}`} />
                            <div className="custom-content">
                                <div className="custom-title">{service.name}</div>
                                <div className="custom-description">Description</div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="custom-arrows">
                    <button id="prev">&lt;</button>
                    <button id="next">&gt;</button>
                </div>
                <div className="custom-time"></div>
            </div>
            
            <div className="see-all">
                <button className="see-all-button" onClick={handleSeeAllServices}>See All</button>
            </div>
        </>
    );
}

export default ImageSlider;

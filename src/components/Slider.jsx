import React, { useState, useEffect } from 'react'
import zorro from '/public/zorro.jpg'
import robin from '/public/robin.jpg'
import jimbei from '/public/jimbei.jpg'

const Slider = () => {
    const images = [jimbei, zorro, robin]
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
        }, 6000)

        return () => clearInterval(interval)
    }, [images.length])

    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % images.length)
    }

    const prevSlide = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length)
    }

    return (
        <div className="relative h-96 w-full bg-gray-200">
            {/* Image */}
            <img
                src={images[currentIndex]}
                alt="slide"
                className="h-full w-full object-cover"
            />

            {/* Left Arrow */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 transform text-3xl text-white transition hover:text-opacity-70"
            >
                ←
            </button>

            {/* Right Arrow */}
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 transform text-3xl text-white transition hover:text-opacity-70"
            >
                →
            </button>

            {/* Position Indicator */}
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 transform space-x-2">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`h-3 w-3 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-400'}`}
                    ></div>
                ))}
            </div>
        </div>
    )
}

export default Slider

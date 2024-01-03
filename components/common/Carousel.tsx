"use client";

import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faLinux } from '@fortawesome/free-brands-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faTools } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Carousel = () => {
    const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

    const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
    const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
    const scrollTo = useCallback((index: number) => embla && embla.scrollTo(index), [
        embla,
    ]);

    const onSelect = useCallback(() => {
        if (!embla) return;
        setSelectedIndex(embla.selectedScrollSnap());
        setPrevBtnEnabled(embla.canScrollPrev());
        setNextBtnEnabled(embla.canScrollNext());
    }, [embla, setSelectedIndex]);

    useEffect(() => {
        if (!embla) return;
        onSelect();
        setScrollSnaps(embla.scrollSnapList());
        embla.on('select', onSelect);
    }, [embla, setScrollSnaps, onSelect]);

    const faqs = [
        {
            name: 'react',
            img: <FontAwesomeIcon className='w-[60px]' icon={faReact}/>,
            title: 'React.JS',
            body: 'React, Vue, TypeScript, Tailwind'
        },
        {
            name: 'sql',
            img: <FontAwesomeIcon className='w-[60px]' icon={faDatabase}/>,
            title: 'SQL & NOSQL',
            body: 'MySQL, AWS, Firestore, GraphQL'
        },
        {
            name: 'linux',
            img: <FontAwesomeIcon className='w-[60px]' icon={faLinux}/>,
            title: 'Linux',
            body: 'Command Line Interface'
        },
        {
            name: 'git',
            img: <FontAwesomeIcon className='w-[60px]' icon={faGithubSquare}/>,
            title: 'GIT',
            body: 'Source control & collaboration'
        },
        {
            name: 'fullstack',
            img: <FontAwesomeIcon className='w-[60px]' icon={faTools}/>,
            title: 'Full-Stack Development',
            body: 'From HTML/JSX to server side'
        },
    ];

    return (
        <div className="flex flex-col w-full justify-center items-center py-8">
            <div className='flex w-full overflow-hidden' ref={viewportRef}>
                <div className='flex items-center w-full'>
                    {faqs.map((obj, idx) => (
                        <div className='w-full grow-0 shrink-0 basis-full hover:cursor-grab' key={idx}>
                            <div className='text-center text-accentColor text-5xl flex justify-center items-center'>
                                {obj.img}
                            </div>
                            <div className='mb-3 text-center uppercase text-[13px] md:text-[16px] text-accentColor font-bold'>
                                <h1>{obj.title}</h1>
                            </div>
                            <div className='text-center text-[13px] text-grey dark:text-offwhite'>
                                <h1>{obj.body}</h1>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='flex justify-center items-center text-accentColor'>
                {scrollSnaps.map((_, index) => (
                    <div
                        className='text-cv-disabled hover:cursor-pointer'
                        onClick={() => scrollTo(index)}
                        key={index}
                    >
                        <p
                            className={`text-5xl leading-3 hover:cursor-pointer font-roboto ${
                                index === selectedIndex
                                    ? 'text-accentColor pt-[1px]'
                                    : 'text-white drop-shadow-[0_1px_1px_rgba(184,160,126,1)]'
                            }`}
                        >
                            .
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

import { Engine, ISourceOptions } from '@tsparticles/engine';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import React, { ReactElement, useEffect, useMemo, useState } from 'react'

interface TechnologyPage {
    isDarkMode?: boolean
}

function TechnologyPage({ isDarkMode }: TechnologyPage): ReactElement {
    const [init, setInit] = useState(false);
    const [engine, setEngine] = useState<Engine | null>(null);
    useEffect(() => {
        initParticlesEngine(async (engine: Engine) => {
            await loadSlim(engine);
            setEngine(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    useEffect(() => {
        if (engine) {
            const containers = engine.dom();
            if (containers.length > 0) {
                console.log(containers);

                const container = containers[0];
                // Update the options
                if (container.options) {
                    container.options.particles.color.value = isDarkMode ? '#e0ffff' : '#191970';
                    //container.options.particles.links.color = isDarkMode ? '#e0ffff' : '#191970';

                    // Force particles refresh
                    void container.refresh();
                }
            }
        }
    }, [isDarkMode, engine]);

    const options: ISourceOptions = useMemo(
        () => ({
            fullScreen: {
                enable: false,
                zIndex: 0
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: false,
                        mode: "push",
                    },
                    onHover: {
                        enable: false,
                        mode: "repulse",
                    },
                },
                modes: {
                    push: {
                        quantity: 4,
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4,
                    },
                },
            },
            particles: {
                color: {
                    value: isDarkMode ? '#e0ffff' : "#191970",
                },
                links: {
                    color: isDarkMode ? '#e0ffff' : "#191970",
                    distance: 200,
                    enable: true,
                    opacity: 1,
                    width: 2,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    speed: 1,
                    random: false,
                    straight: false,
                },
                number: {
                    density: {
                        enable: false,
                    },
                    value: 30,
                },
                opacity: {
                    value: 1,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 2, max: 3 },
                },
            },
            detectRetina: true,
        }),
        [isDarkMode],
    );
    if (!init) {
        return <></>;
    }
    return <div className='dark:text-white'>
        <div className='absolute w-full'>
            <Particles
                id="tsparticles"
                //particlesLoaded={particlesLoaded}
                options={options}
            />
        </div>
        <div className='z-10 backdrop-blur-sm py-10'>
            <div className='container mx-auto'>
                <div className='bg-white bg-opacity-60 rounded-lg'>
                    <h3 className='uppercase text-center'>Technologies</h3>
                    <div className='flex flex-col w-full'>
                        <div className='flex basis-1'>
                            <div className='basis-1/2'>
                                <img />
                            </div>
                            <div className='basis-1/2'>
                                Name of technology
                                Dependencies I manage

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default TechnologyPage;
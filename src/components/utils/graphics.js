import React from 'react';
import { Zoom, Slide, Fade }  from 'react-reveal'; //render animation when user scrolls to this component and not before

export const GraphicalOne = ({h2One = null, bottomOne = null, topTwo = null, h2Two = null, showTriangle = false}) => {
    return (
        <div className = 'graphical_container' id='headerElement'>
            <div className='graphical_top'>
                <Zoom opposite >
                    <div className='h2s'>
                        {h2One && h2One.length > 0 ? 
                        h2One.map( (item, i) => <h2 key = {i}>{item}</h2>
                        )
                        :null
                        }
                    </div>
                </Zoom>
                <h1>{bottomOne}</h1>
            </div>
            <div className='graphical_bottom'>
                <h1>{topTwo}</h1>
                    
                    <div className='h2s'>
                        <Slide left>
                            {h2Two && h2Two.length > 0 ? 
                                h2Two.map( (item, i) => <h2 key = {i}>{item}</h2>
                                )
                            
                            :null
                            }
                        </Slide>
                        <Slide top>
                            {showTriangle ? 
                                <div className = 'triangle'></div>
                            :null
                            }
                        </Slide>
                </div>
            </div>
        </div>
    );
};

export const GraphicalImageRight = ({topOne = null, topTwo = null, topThree = null, botOne = null, botTwo = null, image = '', className = null}) => {
    return (
        <div className =  {className || 'graphical_image_right' }>
            <div className='graphical_texts'>
                <div className='graphical_top'>
                    
                    <div className='topOne'>
                        {topOne && topOne.length > 0 ? 
                            topOne.map( (item, i) => <h2 key = {i}>{item}</h2>
                        )
                        :null
                        }
                    </div>
                    
                    <Slide right >
                    <div className='topTwo'>
                        {topTwo && topTwo.length > 0 ? 
                            topTwo.map( (item, i) => <p key={i}>{item}</p>)
                        :null
                        }
                    </div>
                    </Slide>
                    <Fade left big cascade>
                        <div className='topThree'>{topThree}</div>
                    </Fade>
                </div>
                <div className='graphical_bottom'>
                    <Slide right >
                        <h1>{botOne}</h1>
                        
                        <div className='botTwo'>
                            {botTwo && botTwo.length > 0 ? 
                                botTwo.map( (item, i) => <p key = {i}>{item}</p>
                                )
                            
                            :null
                            }
                        </div>
                    </Slide>
                </div>
            </div>
            <div className='graphical_image'><img src={image[0]} alt={image[1]}/></div>
        </div>
    );
};

export const GraphicalImageLeft = ({topOne = null, topTwo = null, topThree = null, botOne = null, botTwo = null, image = '', className = null }) => {
    return (
        <div className = {className || 'graphical_image_left' }>
            <div className='graphical_texts'>
                <div className='graphical_top'>
                    
                    <div className='topOne'>
                        {topOne && topOne.length > 0 ? 
                            topOne.map( (item, i) => <h2 key = {i}>{item}</h2>
                        )
                        :null
                        }
                    </div>
                    
                    <Slide right >
                    <div className='topTwo'>
                        {topTwo && topTwo.length > 0 ? 
                            topTwo.map( (item, i) => <p key={i}>{item}</p>)
                        :null
                        }
                    </div>
                    </Slide>
                    <Fade left big cascade>
                        <div className='topThree'>{topThree}</div>
                    </Fade>
                </div>
                <div className='graphical_bottom'>
                    <Slide right >
                        <h1>{botOne}</h1>
                        
                        <div className='botTwo'>
                            {botTwo && botTwo.length > 0 ? 
                                botTwo.map( (item, i) => <p key = {i}>{item}</p>
                                )
                            
                            :null
                            }
                        </div>
                    </Slide>
                </div>
            </div>
            <div className='graphical_image'><img src={image[0]} alt={image[1]}/></div>
        </div>
    );
};
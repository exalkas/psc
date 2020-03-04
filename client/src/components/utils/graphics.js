import React from 'react';
import { Zoom, Slide, Fade }  from 'react-reveal'; //render animation when user scrolls to this component and not before

export const GraphicalOne = ({h2One = null, bottomOne = null, topTwo = null, h2Two = null, showTriangle = false}) => {
    return (
        <div className = 'graphical_container'>
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

export const GraphicalImageRight = ({topOne = null, topTwo = null, topThree = null, topFour = null, topFourB = null, topFive = null, button = null, botOne = null, botTwo = null, image = '', className = null}) => {
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
                    <Slide right >
                    <div className='topFour'>
                        {topFour && topFour.length > 0 ? 
                            topFour.map( (item, i) => 
                                <p key={i}>
                                    {
                                        item === ' ' ? '\u00A0'
                                        : item
                                    }
                                </p>)
                        :null
                        }
                    </div>
                    </Slide>
                    <div className='topFourB'>
                        {topFourB && topFourB.length > 0 ? 
                            topFourB.map( (item, i) => <p key={i}>{item}</p>)
                        :null
                        }
                    </div>
                    <div className='topFive'>{topFive}</div>
                    {
                        button ?
                            <div className='top_button>'><button>{button}</button></div>
                        : null
                    }
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

export const GraphicalImageLeft = ({topOne = null, topTwo = null, topThree = null , topFour = null, topFourB = null, topFive = null, button = null, botOne = null, botTwo = null, image = '', topImage = null, className = null }) => {
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
                    {topImage ?
                        <div className='top_image'><img src={topImage[0]} alt={topImage[1]}/></div>
                    :null
                    }
                    
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
                    <div className='topFour'>
                        {topFour && topFour.length > 0 ? 
                            topFour.map( (item, i) => 
                            
                            <p key={i}>
                            {
                                item === ' ' ? '\u00A0'
                                : item
                            }
                            </p>)
                        :null
                        }
                    </div>
                    <div className='topFourB'>
                        {topFourB && topFourB.length > 0 ? 
                            topFourB.map( (item, i) => <p key={i}>{item}</p>)
                        :null
                        }
                    </div>
                    <div className='topFive'>{topFive}</div>
                    {
                        button ?
                            <div className='top_button>'><button>{button}</button></div>
                        : null
                    }
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

export const EmptyRightStripe = () => (
    <div className='empty_stripe_right'></div>
)

export const EmptyLeftStripe = () => (
        <div className='empty_stripe_left'></div>
);

export const GraphicalImageLeftBotArray = ({topOne = null, topTwo = null, topThree = null , topFour = null, topFourB = null, topFive = null, bot = null, button = null, image = '', topImage = null, className = null }) => {
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
                    {topImage ?
                        <div className='top_image'><img src={topImage[0]} alt={topImage[1]}/></div>
                    :null
                    }
                    
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
                    <div className='topFour'>
                        {topFour && topFour.length > 0 ? 
                            topFour.map( (item, i) => 
                            
                            <p key={i}>
                            {
                                item === ' ' ? '\u00A0'
                                : item
                            }
                            </p>)
                        :null
                        }
                    </div>
                    <div className='topFourB'>
                        {topFourB && topFourB.length > 0 ? 
                            topFourB.map( (item, i) => <p key={i}>{item}</p>)
                        :null
                        }
                    </div>
                    <div className='topFive'>{topFive}</div>
                    {
                        button ?
                            <div className='top_button>'><button>{button}</button></div>
                        : null
                    }
                </div>
                <div className='graphical_bottom'>
                    {
                        bot && bot.length > 0 ? 
                            bot.map((item, i) => 
                                <>
                                    <Slide right ><h1 key = {i}>{item.h1}</h1></Slide>
                                    <Slide left >{
                                        item.p.map((itemp, i) => 
                                            <p className='bot_array' key = {10 + i}>{itemp}</p>)
                                    }
                                    </Slide>
                                </>
                            )
                        :null                            
                    }
                </div>
            </div>
            <div className='graphical_image'><img src={image[0]} alt={image[1]}/></div>
        </div>
    );
};

export const GraphicalImageRightBotArray = ({topOne = null, topTwo = null, topThree = null, topFour = null, topFourB = null, topFive = null, bot = null, button = null, image = '', className = null}) => {
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
                    <Slide right >
                    <div className='topFour'>
                        {topFour && topFour.length > 0 ? 
                            topFour.map( (item, i) => 
                                <p key={i}>
                                    {
                                        item === ' ' ? '\u00A0'
                                        : item
                                    }
                                </p>)
                        :null
                        }
                    </div>
                    </Slide>
                    <div className='topFourB'>
                        {topFourB && topFourB.length > 0 ? 
                            topFourB.map( (item, i) => <p key={i}>{item}</p>)
                        :null
                        }
                    </div>
                    <div className='topFive'>{topFive}</div>

                    {
                        button ?
                            <div className='top_button>'><button>{button}</button></div>
                        : null
                    }
                    
                </div>
                <div className='graphical_bottom'>
                    {
                        bot && bot.length > 0 ? 
                            bot.map((item, i) => 
                                <>
                                    <Slide right ><h1 key = {i}>{item.h1}</h1></Slide>
                                    <Slide left >{
                                        item.p.map((itemp, i) => 
                                            <p className='bot_array' key = {10 + i}>{itemp}</p>)
                                    }
                                    </Slide>
                                </>
                            )
                        :null                            
                    }
                </div>
            </div>
            <div className='graphical_image'><img src={image[0]} alt={image[1]}/></div>
        </div>
    );
};
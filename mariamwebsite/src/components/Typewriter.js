import React from 'react'
import Typewriter from 'typewriter-effect';

function Typewriters() {
    return (
        <div className='container'>
            <h3>
                <Typewriter
                    options = { {
                        autoStart: true,
                        loop: true,
                        delay: 100,
                        strings: ["Nice to meet you, I'm Mariam!", "Click on a bubble to learn more!"]
                    } }>
                </Typewriter>

            </h3>

        </div>
    )
}

export default Typewriters;
import React from 'react'

function Home() {
    return (
        <div className='w-full h-screen bg-[rgba(0,0,0,0.2)] bg-cover bg-no-repeat bg-center' style={{backgroundImage: `url('images/2.jpg')`}}>
        <div className="w-full max-w-[1200px] h-screen flex justify-center mx-auto ">
            <div className="details  w-full h-auto text-white flex flex-col my-auto" style={{ animation: 'fadeIn 1s ease forwards' }}> 
                <h3 className="fn_animation name ready font-bold text-[62px] py-3 px-10">
                    <span className="word">
                        <span className="character opened">E</span>
                        <span className="character opened">l</span>
                        <span className="character opened">n</span>
                        <span className="character opened">a</span>
                        <span className="character opened">r</span>
                    </span>
                    <span className="character opened">&nbsp;</span>
                    <span className="word">
                        <span className="character opened">Z</span>
                        <span className="character opened">u</span>
                        <span className="character opened">l</span>
                        <span className="character opened">f</span>
                        <span className="character opened">u</span>
                        <span className="character opened">g</span>
                        <span className="character opened">a</span>
                        <span className="character opened">r</span>
                        <span className="character opened">o</span>
                        <span className="character opened">v</span>
                    </span>
                </h3> 
                <span className="fn_animation job ready text-[17px] px-10">
                    <span className="word">
                        <span className="character opened">W</span>
                        <span className="character opened">e</span>
                        <span className="character opened">b</span>
                    </span>
                    <span className="character opened">&nbsp;</span>
                    <span className="word">
                        <span className="character opened">&amp;</span>
                        </span><span className="character opened">&nbsp;</span>
                    <span className="word">
                        <span className="character opened">M</span>
                        <span className="character opened">o</span>
                        <span className="character opened">b</span>
                        <span className="character opened">i</span>
                        <span className="character opened">l</span>
                        <span className="character opened">e</span>
                    </span>
                    <span className="character opened">&nbsp;</span>
                    <span className="word">
                        <span className="character opened">A</span>
                        <span className="character opened">p</span>
                        <span className="character opened">p</span>
                    </span>
                    <span className="character opened">&nbsp;</span>
                    <span className="word">
                        <span className="character opened">D</span>
                        <span className="character opened">e</span>
                        <span className="character opened">v</span>
                        <span className="character opened">e</span>
                        <span className="character opened">l</span>
                        <span className="character opened">o</span>
                        <span className="character opened">p</span>
                        <span className="character opened">e</span>
                        <span className="character opened">r</span>
                        </span>
                </span>
            </div>
        </div>
    </div>
    
    )
}

export default Home
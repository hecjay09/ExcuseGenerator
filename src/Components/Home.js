import React, { useState } from "react";
import "./HomeStyle.css";
import Modal from "./Modal";

function Home() {
    const [isShown, setIsShown] = useState(false);
    const [isShownFunny, setIsShownFunny] = useState(false);
    const [isShownCollege, setIsShownCollege] = useState(false);
    const [isShownOffice, setIsShownOffice] = useState(false);
    const [isShownGaming, setIsShownGaming] = useState(false);
    const [isShownUnbelievable, setIsShownUnbelievable] = useState(false);

    function clickFuncFunny() {
        setIsShownCollege(false);
        setIsShownOffice(false);
        setIsShownGaming(false);
        setIsShownUnbelievable(false);
        setIsShownFunny(true);
        setIsShown(true);
    }

    function clickFuncCollege() {
        setIsShownFunny(false);
        setIsShownOffice(false);
        setIsShownGaming(false);
        setIsShownUnbelievable(false);
        setIsShownCollege(true);
        setIsShown(true);
    }

    function clickFuncOffice() {
        setIsShownFunny(false);
        setIsShownGaming(false);
        setIsShownUnbelievable(false);
        setIsShownCollege(false);
        setIsShownOffice(true);
        setIsShown(true);
    }

    function clickFuncGaming() {
        setIsShownFunny(false);
        setIsShownUnbelievable(false);
        setIsShownCollege(false);
        setIsShownOffice(false);
        setIsShownGaming(true);
        setIsShown(true);
    }

    function clickFuncUnbelievable() {
        setIsShownFunny(false);
        setIsShownGaming(false);
        setIsShownCollege(false);
        setIsShownOffice(false);
        setIsShownUnbelievable(true);
        setIsShown(true);
    }
    return (
        <div className="HomeDiv">
            <div className="titleDiv">
                <h2 className="title">Choose to Generate </h2>
            </div>

            <div className="buttonDiv">
                <button className="genExcsBtn" onClick={clickFuncFunny}>
                    a Funny Excuse
                </button>
                <button className="genExcsBtn" onClick={clickFuncCollege}>
                    an Excuse for School
                </button>
                <button className="genExcsBtn" onClick={clickFuncGaming}>
                    an Excuse for Gaming
                </button>
                <button className="genExcsBtn" onClick={clickFuncOffice}>
                    an Excuse for Work
                </button>
                <button className="genExcsBtn" onClick={clickFuncUnbelievable}>
                    an Unbelievable Excuse
                </button>
            </div>
            <main>
                {isShown && (
                    <Modal
                        setModal={setIsShown}
                        setShownFunny={isShownFunny}
                        setShownCollege={isShownCollege}
                        setShownGaming={isShownGaming}
                        setShownOffice={isShownOffice}
                        setShownUnbelievable={isShownUnbelievable}
                    />
                )}
            </main>
        </div>
    );
}

export default Home;

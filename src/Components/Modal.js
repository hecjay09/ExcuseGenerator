import Funny from "./Funny";
import College from "./College";
import Unbelievable from "./Unbelievable";
import Office from "./Office";
import Gaming from "./Gaming";
import "./ExcusesStyle.css";

export default function Modal({
    setModal,
    setShownFunny,
    setShownCollege,
    setShownUnbelievable,
    setShownOffice,
    setShownGaming,
}) {
    return (
        <div>
            <div className="excuseContainer">
                <div className="excuseInnerContainer">
                    <div className="closeButtonDiv">
                        <button
                            className="closeBtn"
                            onClick={() => setModal(false)}
                        >
                            X
                        </button>
                    </div>
                    {setShownFunny && <Funny />}
                    {setShownCollege && <College />}
                    {setShownUnbelievable && <Unbelievable />}
                    {setShownOffice && <Office />}
                    {setShownGaming && <Gaming />}
                </div>
            </div>
        </div>
    );
}

import React, { useState } from "react";
import "./App.css";
import "./Demo.scss";
import { Dadan } from "dadan-sdk-integration";
import { ReactComponent as Clip } from "./clip.svg";
import { ReactComponent as Send } from "./send.svg";

function App() {
    const [value, setValue] = useState(
        "It's a bit tricky to explain, I'll send quick video"
    );

    const handleData = (data: string[]) => {
        const urls = data.join(", ");
        setValue((prevValue) => `${prevValue} ${urls}`);
    };

    const handleRecordData = (data: string[]) => {
        const urls = data[0];
        setValue((prevValue) => `${prevValue} ${urls}`);
    };

    return (
        <div className="App">
            <div className="msg-box">
                <div className="msg-input">
                    <div style={{ position: "relative" }}>
                        <Dadan
                            dir="ltr"
                            record={handleRecordData}
                            choose={handleData}
                            zIndex={999}
                        />
                    </div>
                    <div className="file">
                        <Clip />
                    </div>
                    <textarea
                        placeholder="Write your message"
                        onChange={(e) => setValue(e.target.value)}
                        value={value}
                        rows={1}
                    />
                    <div className="send">
                        <Send />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;

import React from "react";
import "./TendParity.css";
import TendParitytable from "./TendParitytable";
const TendParity = () => {
    return (
        <>
            <div class="parity-content">
                <div class="van-nav-bar van-hairline--bottom" style={{ zIndex: "1" }}>
                    <div class="van-nav-bar__left"></div>
                    <div class="van-nav-bar__title van-ellipsis">Parity Record</div>
                    <div class="van-nav-bar__right"></div>
                </div>
                <div>
                    <div class="kline">
                        <div class="reservation-chunk">
                            <div class="reservation-chunk-sub">
                                <div class="reservation-chunk-sub-title">Period</div>
                                <div class="reservation-chunk-sub-num">20230136060 </div>
                            </div>
                            <div class="reservation-chunk-sub" style={{ textAlign: "right" }}>
                                <div class="reservation-chunk-sub-title">Count Down</div>
                                <div class="reservation-chunk-sub-num">
                                    <div id="demo" class="time">
                                        <span class="time-sub">0</span>
                                        <span class="time-sub">2</span>
                                        <span class="time-sub-dot">:</span>
                                        <span class="time-sub">5</span>
                                        <span class="time-sub">7</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="kline">
                        <div class="reservation-chunk">
                            <div class="reservation-chunk-sub">
                                <div class="reservation-chunk-sub-title">PrePeriod</div>
                                <div class="reservation-chunk-sub-num">20230136059 </div>
                            </div>
                            <div
                                class="reservation-chunk-sub"
                                style={{ textAlign: "center" }}
                            >
                                <div class="reservation-chunk-sub-title">Result</div>
                                <div class="reservation-chunk-sub-num">
                                    <div
                                        class="item-green"
                                        style={{ margin: "5px 0px 0px 35px" }}
                                    >
                                        3{" "}
                                    </div>
                                </div>
                            </div>
                            <div class="reservation-chunk-sub" style={{ textAlign: "right" }}>
                                <div class="reservation-chunk-sub-title">OpenPrice</div>
                                <div class="reservation-chunk-sub-num">
                                    <div style={{ color: '#e839f1' }}>43523 </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

<TendParitytable/>

            {/* table */}
           
        </>
    );
};

export default TendParity;

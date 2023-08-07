import { useState } from "react"
import "../../styles/resultpage/resultStyle.css"

export const Filter = () => {

    const [job, setJob] = useState(false);
    const [location, setLocation] = useState(false);
    const [wage, setWage] = useState(false);
    const [accomo, setAccomo] = useState(false);
    const [rangeValue, setRangeValue] = useState(0);

    const Clicked_job = () => { setJob(!job); }
    const showJobPage = () => {

        return (job ?
            <div className="clicked_job">
                <div className="pannel_body">
                    <div className="filter_depth1">
                        <ul>
                            <li className="job_content"><button className="filter_depth1_btn f_b1">전체</button></li>
                            <li className="job_content"><button className="filter_depth1_btn f_b1">제조업</button></li>
                            <li className="job_content"><button className="filter_depth1_btn f_b1">건설업</button></li>
                            <li className="job_content"><button className="filter_depth1_btn f_b1">서비스업</button></li>
                            <li className="job_content"><button className="filter_depth1_btn f_b1">농축산업</button></li>
                            <li className="job_content"><button className="filter_depth1_btn f_b1">어업</button></li>
                        </ul>
                    </div>
                    <div className="filter_depth2">
                        <div className="search_detail_empty">
                            <div className="empty_container">
                                <p className="f_b1">❌
                                    <br></br>나에게 맞는 직종을 선택해주세요</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pannel_bottom">
                    <button className="btn_reset">초기화</button>
                    <button className="btn_apply">적용</button>
                </div>
            </div > : null)



    }

    const Clicked_Location = () => { setLocation(!location); }
    const showLocPage = () => {
        return (location ?
            <div className="clicked_loc">
                <div className="Loc_body">
                    <div className="item_list">
                        <ul>
                            <li className="item_loc"><label className="loc_checkbox"><input type="checkbox"></input><span>가평군</span></label></li>
                            <li className="item_loc"><label className="loc_checkbox"><input type="checkbox"></input><span>과천시</span></label></li>
                            <li className="item_loc"><label className="loc_checkbox"><input type="checkbox"></input><span>광명시</span></label></li>
                            <li className="item_loc"><label className="loc_checkbox"><input type="checkbox"></input><span>광주시</span></label></li>
                            <li className="item_loc"><label className="loc_checkbox"><input type="checkbox"></input><span>구리시</span></label></li>
                            <li className="item_loc"><label className="loc_checkbox"><input type="checkbox"></input><span>군포시</span></label></li>
                            <li className="item_loc"><label className="loc_checkbox"><input type="checkbox"></input><span>권선구</span></label></li>
                            <li className="item_loc"><label className="loc_checkbox"><input type="checkbox"></input><span>기흥구</span></label></li>
                            <li className="item_loc"><label className="loc_checkbox"><input type="checkbox"></input><span>김포시</span></label></li>
                            <li className="item_loc"><label className="loc_checkbox"><input type="checkbox"></input><span>남양주시</span></label></li>
                            <li className="item_loc"><label className="loc_checkbox"><input type="checkbox"></input><span>단원구</span></label></li>
                            <li className="item_loc"><label className="loc_checkbox"><input type="checkbox"></input><span>동두천시</span></label></li>
                            <li className="item_loc"><label className="loc_checkbox"><input type="checkbox"></input><span>동안구</span></label></li>
                            <li className="item_loc"><label className="loc_checkbox"><input type="checkbox"></input><span>만안구</span></label></li>
                            <li className="item_loc"><label className="loc_checkbox"><input type="checkbox"></input><span>부천시</span></label></li>
                            <li className="item_loc"><label className="loc_checkbox"><input type="checkbox"></input><span>분당구</span></label></li>
                            <li className="item_loc"><label className="loc_checkbox"><input type="checkbox"></input><span>상록구</span></label></li>
                            <li className="item_loc"><label className="loc_checkbox"><input type="checkbox"></input><span>수정구</span></label></li>
                            <li className="item_loc"><label className="loc_checkbox"><input type="checkbox"></input><span>수지구</span></label></li>
                            <li className="item_loc"><label className="loc_checkbox"><input type="checkbox"></input><span>시흥시</span></label></li>
                            <li className="item_loc"><label className="loc_checkbox"><input type="checkbox"></input><span>안성시</span></label></li>
                        </ul>

                    </div>
                </div>
                <div className="Loc_bottom">

                    <button className="reset_loc">초기화</button>
                    <button className="apply_loc">적용</button>

                </div>
            </div> : null)
    }

    const RangeHandler = (e) => {
        const value = parseInt(e.target.value);
        setRangeValue(value);

    }

    const Clicked_Wage = () => { setWage(!wage);  }
    const showWagePage = () => {
        return (wage ?
            <div className="clicked_wage">
                <div className="wage_body">
                    <div className="wage_title">
                        <div className="center">전체</div>
                    </div>

                    <div>
                        <div className="wage_slide">
                            <div className="left"><p className="p_style">신입</p></div>
                            <div className="right">10년+</div>
                        </div>

                    </div>


                    <div className="wage_slidebar">
                        <div className="center">
                            <input onChange={RangeHandler} className="custom_range" type="range" min="1" max="10" value={rangeValue}></input>
                            <div className="wage_result">{rangeValue}년</div>
                        </div>
                    </div>

                </div>
                <div className="wage_bottom">
                    <button className="wage_reset">초기화</button>
                    <button className="wage_apply">적용</button>

                </div>
            </div>

            : null)
    }

    const Clicked_Accomo = () => { setAccomo(!accomo); }
    const showAccomoPage = () => {
        return (accomo ?
            <div className="clicked_accomo">
                <div className="accomo_body">
                    <div className="accomo_list">
                        <ul className="accomo_content">
                            <li>
                                <label>
                                    <input type="checkbox"></input>
                                    <span>식사 제공여부</span>
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="checkbox"></input>
                                    <span>숙소 제공여부</span>
                                </label>
                            </li>

                        </ul>
                    </div>

                </div>

                <div className="accomo_bottom">
                    <button className="accomo_reset">초기화</button>
                    <button className="accomo_apply">적용</button>

                </div>
            </div>

            : null)
    }



    return (
        <>
            <div className="filter_div">
                <ul className="filter_ulist">
                    <button className="btn_filter" onClick={Clicked_job}><li className="filter_content">업종</li></button>
                    {showJobPage()}
                    <button className="btn_filter" onClick={Clicked_Location}><li className="filter_content">위치</li></button>
                    {showLocPage()}
                    <button className="btn_filter" onClick={Clicked_Wage}><li className="filter_content">연봉</li></button>
                    {showWagePage()}
                    <button className="btn_filter" onClick={Clicked_Accomo}><li className="filter_content">숙식제공</li></button>
                    {showAccomoPage()}
                    <div className="reset_div"><button className="reset">🔄️Reset</button></div>
                </ul>

            </div>

        </>


    )

}

export default Filter;
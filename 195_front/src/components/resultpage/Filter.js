import { useState } from "react"
import "../../styles/resultpage/resultStyle.css"

export const Filter = () => {

    const [job, setJob] = useState(false);
    const [location, setLocation] = useState(false);
    const [wage, setWage] = useState(false);
    const [accomo, setAccomo] = useState(false);
    const [rangeValue, setRangeValue] = useState(0);
    const [formatedValue, setFormatedValue] = useState(0);

    const Clicked_job = () => { setJob(!job); }
    const showJobPage = () => {

        return (job ?
            <div className="clicked_job">
                <div className="pannel_body">
                    <div className="filter_depth1">
                        <ul>
                            <li className="job_content">
                                <label className="custom-checkbox">
                                    <input type="checkbox"></input>
                                    <span className="text_color">제조업</span>
                                </label>
                            </li>

                            <li className="job_content">
                                <label className="custom-checkbox">
                                    <input type="checkbox"></input>
                                    <span className="text_color">건설업</span>
                                </label>
                            </li>

                            <li className="job_content">
                                <label className="custom-checkbox">
                                    <input type="checkbox"></input>
                                    <span className="text_color">서비스업</span>
                                </label>
                            </li>

                            <li className="job_content">
                                <label className="custom-checkbox">
                                    <input type="checkbox" ></input>
                                    <span className="text_color">농축산업</span>
                                </label>
                            </li>

                            <li className="job_content">
                                <label className="custom-checkbox">
                                    <input type="checkbox"></input>
                                    <span className="text_color">어업</span>
                                </label>
                            </li>
                        </ul>
                    </div>
                    {/*<div className="filter_depth2">
                        <div className="search_detail_empty">
                            <div className="empty_container">
                                <p className="f_b1">❌
                                    <br></br>나에게 맞는 직종을 선택해주세요</p>
                            </div>
                        </div>
        </div>*/}
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
                        <ul className="centered_list">
                            <label className="loc_checkbox custom-checkbox"><input type="checkbox"></input><span>고양시</span></label>
                            <label className="loc_checkbox custom-checkbox"><input type="checkbox"></input><span>과천시</span></label>
                            <label className="loc_checkbox custom-checkbox"><input type="checkbox"></input><span>광명시</span></label>
                            <label className="loc_checkbox custom-checkbox"><input type="checkbox"></input><span>광주시</span></label>
                            <label className="loc_checkbox custom-checkbox"><input type="checkbox"></input><span>구리시</span></label>
                            <label className="loc_checkbox custom-checkbox"><input type="checkbox"></input><span>군포시</span></label>
                            <label className="loc_checkbox custom-checkbox"><input type="checkbox"></input><span>김포시</span></label>
                            <label className="loc_checkbox custom-checkbox"><input type="checkbox"></input><span>남양주</span></label>
                            <label className="loc_checkbox custom-checkbox"><input type="checkbox"></input><span>동두천</span></label>
                            <label className="loc_checkbox custom-checkbox"><input type="checkbox"></input><span>부천시</span></label>
                            <label className="loc_checkbox custom-checkbox"><input type="checkbox"></input><span>성남시</span></label>
                            <label className="loc_checkbox custom-checkbox"><input type="checkbox"></input><span>수원시</span></label>
                            <label className="loc_checkbox custom-checkbox"><input type="checkbox"></input><span>시흥시</span></label>
                            <label className="loc_checkbox custom-checkbox"><input type="checkbox"></input><span>안산시</span></label>
                            <label className="loc_checkbox custom-checkbox"><input type="checkbox"></input><span>안성시</span></label>
                            <label className="loc_checkbox custom-checkbox"><input type="checkbox"></input><span>안양시</span></label>
                            <label className="loc_checkbox custom-checkbox"><input type="checkbox"></input><span>양주시</span></label>
                            <label className="loc_checkbox custom-checkbox"><input type="checkbox"></input><span>여주시</span></label>
                            <label className="loc_checkbox custom-checkbox"><input type="checkbox"></input><span>오산시</span></label>
                            <label className="loc_checkbox custom-checkbox"><input type="checkbox"></input><span>용인시</span></label>
                            <label className="loc_checkbox custom-checkbox"><input type="checkbox"></input><span>의왕시</span></label>
                            <label className="loc_checkbox custom-checkbox"><input type="checkbox"></input><span>의정부</span></label>
                            <label className="loc_checkbox custom-checkbox"><input type="checkbox"></input><span>이천시</span></label>
                            <label className="loc_checkbox custom-checkbox"><input type="checkbox"></input><span>파주시</span></label>
                            <label className="loc_checkbox custom-checkbox"><input type="checkbox"></input><span>평택시</span></label>
                            <label className="loc_checkbox custom-checkbox"><input type="checkbox"></input><span>포천시</span></label>
                            <label className="loc_checkbox custom-checkbox"><input type="checkbox"></input><span>하남시</span></label>
                            <label className="loc_checkbox custom-checkbox"><input type="checkbox"></input><span>화성시</span></label>
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
        const value2 = parseInt(e.target.value);
        setRangeValue(value2);
        setFormatedValue(value2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));

    }

    const Clicked_Wage = () => { setWage(!wage); }
    const showWagePage = () => {
        return (wage ?
            <div className="clicked_wage">
                <div className="wage_body">
                    <div className="wage_title">
                        <div className="center">월급</div>
                        <div className="unit_won" >단위:₩</div>

                    </div>

                    <div>
                        <div className="wage_slide">
                            <div className="left"><p className="p_style">0</p></div>
                            <div className="right">5M+</div>
                        </div>

                    </div>


                    <div className="wage_slidebar">
                        <div className="slide_center">
                            <input onChange={RangeHandler} className="custom_range" type="range" min="1" max="5000000" value={rangeValue}></input>
                            <div className="wage_result">{formatedValue} ₩</div>
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
                    <button className="app_style">적용</button>
                    <div className="reset_div"><button className="reset">🔄️reset</button></div>
                </ul>

            </div>

        </>


    )

}

export default Filter;
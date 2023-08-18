import { useState, useEffect } from "react"
import "../../styles/resultpage/resultStyle.css"
import axios from "axios";


export const Filter = ({ user, setUser }) => {


    const [clickedSector, setClickedSector] = useState({});
    const [clickedCity, setClickedCity] = useState({});
    const [clickedFood, setClickedFood] = useState(false);
    const [clickedAccomo, setClickedAccomo] = useState(false);



    const handleSectorClick = (sector) => {
        setClickedSector(prevState => ({
            ...prevState,
            [sector]: !prevState[sector]
        }));

    };
    const handleCityClick = (city) => {
        setClickedCity(prevState => ({
            ...prevState,
            [city]: !prevState[city]
        }));
    };

    const handleFoodClick = (e) =>{
        setClickedFood(prev => !prev);
       
    };

    const handleAccomodationClick= () =>{
        setClickedAccomo(prev => !prev);

    }


    {/*const sectorQueryString = () => {
        const queryString = Object.entries(clickedSector)
            .map(([key, value]) => `?${key}=${value}`)
            .join('&');
        console.log(queryString);
    } */}


    {/*const cityQueryString = () => {
        const queryString = Object.entries(clickedCity)
            .map(([key, value]) => `?${key}=${value}`)
            .join('&');
        return queryString;
    }
    const wageQueryString = () => {
        queryString = `?minSalary=${rangeValue}`

        return queryString;
    } */}




    const [test, setTest] = useState([])

    const getUsers = async (wage) => {
        let queryString = '';

        if (Object.keys(clickedSector).length > 0) {
            const sectorQueryString = Object.entries(clickedSector)
                .map(([sector]) => `sector=${sector}`) /*링크 뒤에 ? 붙여두기 쿼리스트링 함수에서 ? 빼둔 상태 */
                .join('&');
            queryString += sectorQueryString;
            console.log(queryString);
        }

        if (Object.keys(clickedCity).length > 0) {
            const cityQueryString = Object.entries(clickedCity)
                .map(([city]) => `city=${city}`) /*링크 뒤에 ? 붙여두기 쿼리스트링 함수에서 ? 빼둔 상태 */
                .join('&');
            queryString += cityQueryString
            console.log(queryString);
        }   
        if(rangeValue > 1){
            const wageQueryString = `minSalary=${wage}`
            queryString += wageQueryString
            console.log(queryString); 
        }

        if(clickedFood === true){
            const foodQueryString = `isFoodProvided=true`
            queryString += foodQueryString
            console.log(queryString)

        }
        if(clickedAccomo === true){
            const accomoQueryString = `isAccommodationProvided=true`
            queryString +=accomoQueryString
            console.log(queryString);
        }


        {/*} const response = await axios.get(`https://9ff8-61-79-192-234.ngrok-free.app/api/filtered-job-postings?${queryString}`, {
            headers: {
                'Content-Type': 'application/json',
                'ngrok-skip-browser-warning': '69420',
            }
        }).then(res => { console.log(res.data); setTest(res.data) }); */}
    }


    useEffect(() => {   // API 한번만 받아오도록 useEffect 사용
        getUsers()
    }, [clickedCity])





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
                                    <input
                                        type="checkbox"
                                        checked={clickedSector['제조업']}
                                        onChange={() => handleSectorClick('제조업')}></input>
                                    <span className="text_color">제조업</span>
                                </label>
                            </li>

                            <li className="job_content">
                                <label className="custom-checkbox">
                                    <input
                                        type="checkbox"
                                        checked={clickedSector['건설업']}
                                        onChange={() => handleSectorClick('건설업')}></input>
                                    <span className="text_color">건설업</span>
                                </label>
                            </li>

                            <li className="job_content">
                                <label className="custom-checkbox">
                                    <input
                                        type="checkbox"
                                        checked={clickedSector['서비스업']}
                                        onChange={() => handleSectorClick('서비스업')}></input>
                                    <span className="text_color">서비스업</span>
                                </label>
                            </li>

                            <li className="job_content">
                                <label className="custom-checkbox">
                                    <input
                                        type="checkbox"
                                        checked={clickedSector['농축산업']}
                                        onChange={() => handleSectorClick('농축산업')} ></input>
                                    <span className="text_color">농축산업</span>
                                </label>
                            </li>

                            <li className="job_content">
                                <label className="custom-checkbox">
                                    <input
                                        type="checkbox"
                                        checked={clickedSector['어업']}
                                        onChange={() => handleSectorClick('어업')}></input>
                                    <span className="text_color">어업</span>
                                </label>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="pannel_bottom">
                    <button className="btn_reset">초기화</button>
                    <button onClick={getUsers} className="btn_apply">적용</button>
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
                            <label className="loc_checkbox custom-checkbox"><input type="checkbox" checked={clickedCity['고양시']} onChange={() => handleCityClick('고양시')}></input><span>고양시</span></label>
                            <label className="loc_checkbox custom-checkbox"><input type="checkbox" checked={clickedCity['과천시']} onChange={() => handleCityClick('과천시')}></input><span>과천시</span></label>
                            <label className="loc_checkbox custom-checkbox"><input type="checkbox" checked={clickedCity['광명시']} onChange={() => handleCityClick('광명시')}></input><span>광명시</span></label>
                            <label className="loc_checkbox custom-checkbox"><input type="checkbox" checked={clickedCity['광주시']} onChange={() => handleCityClick('광주시')}></input><span>광주시</span></label>
                            <label className="loc_checkbox custom-checkbox"><input type="checkbox" checked={clickedCity['구리시']} onChange={() => handleCityClick('구리시')}></input><span>구리시</span></label>
                            <label className="loc_checkbox custom-checkbox"><input type="checkbox" checked={clickedCity['군포시']} onChange={() => handleCityClick('군포시')}></input><span>군포시</span></label>
                            <label className="loc_checkbox custom-checkbox"><input type="checkbox" checked={clickedCity['김포시']} onChange={() => handleCityClick('김포시')}></input><span>김포시</span></label>
                            <label className="loc_checkbox custom-checkbox"><input type="checkbox" checked={clickedCity['남양주']} onChange={() => handleCityClick('남양주')}></input><span>남양주</span></label>
                            <label className="loc_checkbox custom-checkbox"><input type="checkbox" checked={clickedCity['동두천']} onChange={() => handleCityClick('동두천')}></input><span>동두천</span></label>
                            <label className="loc_checkbox custom-checkbox"><input type="checkbox" checked={clickedCity['부천시']} onChange={() => handleCityClick('부천시')}></input><span>부천시</span></label>
                            <label className="loc_checkbox custom-checkbox"><input type="checkbox" checked={clickedCity['성남시']} onChange={() => handleCityClick('성남시')}></input><span>성남시</span></label>
                            <label className="loc_checkbox custom-checkbox"><input type="checkbox" checked={clickedCity['수원시']} onChange={() => handleCityClick('수원시')}></input><span>수원시</span></label>
                            <label className="loc_checkbox custom-checkbox"><input type="checkbox" checked={clickedCity['시흥시']} onChange={() => handleCityClick('시흥시')}></input><span>시흥시</span></label>
                            <label className="loc_checkbox custom-checkbox"><input type="checkbox" checked={clickedCity['안산시']} onChange={() => handleCityClick('안산시')}></input><span>안산시</span></label>
                            <label className="loc_checkbox custom-checkbox"><input type="checkbox" checked={clickedCity['안성시']} onChange={() => handleCityClick('안성시')}></input><span>안성시</span></label>
                            <label className="loc_checkbox custom-checkbox"><input type="checkbox" checked={clickedCity['안양시']} onChange={() => handleCityClick('안양시')}></input><span>안양시</span></label>
                            <label className="loc_checkbox custom-checkbox"><input type="checkbox" checked={clickedCity['양주시']} onChange={() => handleCityClick('양주시')}></input><span>양주시</span></label>
                            <label className="loc_checkbox custom-checkbox"><input type="checkbox" checked={clickedCity['여주시']} onChange={() => handleCityClick('여주시')}></input><span>여주시</span></label>
                            <label className="loc_checkbox custom-checkbox"><input type="checkbox" checked={clickedCity['오산시']} onChange={() => handleCityClick('오산시')}></input><span>오산시</span></label>
                            <label className="loc_checkbox custom-checkbox"><input type="checkbox" checked={clickedCity['용인시']} onChange={() => handleCityClick('용인시')}></input><span>용인시</span></label>
                            <label className="loc_checkbox custom-checkbox"><input type="checkbox" checked={clickedCity['의왕시']} onChange={() => handleCityClick('의왕시')}></input><span>의왕시</span></label>
                            <label className="loc_checkbox custom-checkbox"><input type="checkbox" checked={clickedCity['의정부']} onChange={() => handleCityClick('의정부')}></input><span>의정부</span></label>
                            <label className="loc_checkbox custom-checkbox"><input type="checkbox" checked={clickedCity['이천시']} onChange={() => handleCityClick('이천시')}></input><span>이천시</span></label>
                            <label className="loc_checkbox custom-checkbox"><input type="checkbox" checked={clickedCity['파주시']} onChange={() => handleCityClick('파주시')}></input><span>파주시</span></label>
                            <label className="loc_checkbox custom-checkbox"><input type="checkbox" checked={clickedCity['평택시']} onChange={() => handleCityClick('평택시')}></input><span>평택시</span></label>
                            <label className="loc_checkbox custom-checkbox"><input type="checkbox" checked={clickedCity['포천시']} onChange={() => handleCityClick('포천시')}></input><span>포천시</span></label>
                            <label className="loc_checkbox custom-checkbox"><input type="checkbox" checked={clickedCity['하남시']} onChange={() => handleCityClick('하남시')}></input><span>하남시</span></label>
                            <label className="loc_checkbox custom-checkbox"><input type="checkbox" checked={clickedCity['화성시']} onChange={() => handleCityClick('화성시')}></input><span>화성시</span></label>
                        </ul>

                    </div>
                </div>
                <div className="Loc_bottom">

                    <button className="reset_loc">초기화</button>
                    <button onClick={getUsers} className="apply_loc">적용</button>

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
                    <button onClick={()=>getUsers(rangeValue)} className="wage_apply">적용</button>

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
                                    <input 
                                    type="checkbox"
                                    checked={clickedFood}
                                    onChange={handleFoodClick}></input>
                                    <span>식사 제공여부</span>
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input
                                     type="checkbox"
                                     checked={clickedAccomo}
                                     onChange={handleAccomodationClick}></input>
                                    <span>숙소 제공여부</span>
                                </label>
                            </li>

                        </ul>
                    </div>

                </div>

                <div className="accomo_bottom">
                    <button className="accomo_reset">초기화</button>
                    <button onClick={getUsers} className="accomo_apply">적용</button>

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
import React, { startTransition, useEffect, useState } from 'react';
import "../../styles/JobPostingForm.css"
import Selectors from './Selectors';
import styled from 'styled-components';

const SECTORS = ["제조업","농업","서비스업","어업"];


const Wrapper = styled.div`
    position :relative;

`;
const BUTTON = styled.button`
    position :absolute;
    bottom : 30px;
    right : 30px;


    font-size : 35px;
    font-weight : 500;
    color : #fff;
    
    

    //border : 1px solid #372417;
`;



const JobPostingForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        companyName: '',
        companyName_en: '',
        phoneNumber: '',
        profileImage: null,
        sector: '',
        city: '',
        companyImages: null,
        detailAddress: '',
        detailAddress_en: '',
        employmentPeriod: '',
        workDays: '',
        workHours: '',
        details: null,
        salary: '',
        isAccommodationProvided: false,
        isFoodProvided: false,
    });

    const dropChange = (key, value) => {
        setFormData((prev) => ({
            ...prev,
            [key]: value,
        }));

    }

    const generateEmploymentPeriod = () => {
        let startTime = `${clickedStartHour}시 ${clickedStartMin}분`;
        let endTime = `${clickedStartHour2}시 ${clickedStartMin2}분`;

        setFormData(prev => ({
            ...prev,
            employmentPeriod: `${startTime} ~ ${endTime}`
        }))

    }

    useEffect(() => console.log(formData), [formData]);


    const handleChange = (event) => {
        const { name, value, type, files, checked } = event.target;

        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : type === 'file' ? files : value,
        }));

        console.log(formData)
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const submitData = new FormData();

        Object.keys(formData).forEach((key) => {
            //console.log(key, key.includes("Image") , typeof key)
            //console.log(key , formData[key]);
            if (key.includes("Image") || key === "details") {
                for (let i = 0; i < formData[key].length; i++) {
                    submitData.append(key, formData[key][i]);
                }
            }
            else {
                submitData.append(key, formData[key]);
            }
        });

        try {
            const response = await fetch('https://effd-58-224-72-100.ngrok-free.app/api/create-job-posting', {
                method: 'POST',
                body: submitData,
            });

            if (response.ok) {
                const result = await response.json();
                console.log(result);
                alert('구직 공고 생성이 성공적으로 완료되었습니다.');
            } else {
                console.log(response);
                alert('구직 공고 생성에 실패했습니다.');
            }
        } catch (error) {
            console.log('구직 공고 생성에 실패했습니다.', error);
        }
    };

    const handlePrintFormData = () => {
        for (const [key, value] of Object.entries(formData)) {
            console.log(`${key}: ${value}`);
        }
    };

    const [selectSector, setSelectSector] = useState(false);
    const [selectFood, setSelectFood] = useState(false);
    const [selectPeriod, setSelectPeriod] = useState(false);
    const [selectStartHour, setSelectStartHour] = useState(false); {/* 창 보여주는거*/ }
    const [selectStartHour2, setSelectStartHour2] = useState(false);
    const [selectStartMin, setSelectStartMin] = useState(false);
    const [selectStartMin2, setSelectStartMin2] = useState(false);
    const [selectRegion, setSelectRegion] = useState(false);
    const [clickedSector, setClickedSector] = useState({});
    const [clickedCity, setClickedCity] = useState({});
    const [clickedEmPeriod, setClickedEmPeriod] = useState({});
    const [clickedStartHour, setClickedStartHour] = useState({});
    const [clickedStartHour2, setClickedStartHour2] = useState({});
    const [clickedStartMin, setClickedStartMin] = useState({});
    const [clickedStartMin2, setClickedStartMin2] = useState({});

    const createStartHour = (hour) => {
        setClickedStartHour(hour);
        console.log(clickedStartHour)

    }

    const createStartMin = (min) => {
        setClickedStartMin(min);
        console.log(clickedStartMin)

    }

    const createEndHour = (hour) => {
        setClickedStartHour2(hour);
        console.log(clickedStartHour2);
    }

    const createEndMin = (min) => {
        setClickedStartMin2(min);
        console.log(clickedStartMin2)
    }

    const handleFood = () => {
        setSelectFood(!selectFood);
    }

    const showFood = () => {
        return (
            selectFood ?
                <div>
                    <div className="clicked_accomo">
                        <div className="accomo_body">

                            <ul className="accomo_content">
                                <li className='custom-checkbox'>
                                    <input

                                        type="checkbox"
                                        name="isAccommodationProvided"
                                        onChange={handleChange}
                                        checked={formData.isAccommodationProvided}
                                    />
                                    <label className='text_color2'>기숙사 제공</label>
                                    <br /><br />

                                    <input
                                        className='input_style'
                                        type="checkbox"
                                        name="isFoodProvided"
                                        onChange={handleChange}
                                        checked={formData.isFoodProvided}
                                    />
                                    <label className='text_color2'>식사 제공</label>
                                </li>

                            </ul>


                        </div>

                    </div>


                </div>
                : null

        );
    }

    const handleSector = () => {
        setSelectSector(!selectSector);
    }

    const showSector = () => {
        return (
            selectSector ?
            <Wrapper>
                <Selectors 
                    arrays={SECTORS} 
                    setter={setClickedSector}
                    setFormData={setFormData}
                    keyword='sector'
                />
                <BUTTON onClick={()=>{setSelectSector(!selectSector);}}>확인</BUTTON>
            </Wrapper>
            : null
        );
    }

    const handlePeriod = () => {
        setSelectPeriod(!selectPeriod);
    }

    const showPeriod = () => {
        return (
            selectPeriod ?
                <>
                    <div className="clicked_job">
                        <div className="pannel_body2">

                            <ul className='list_style2'>
                                <li className="job_content">
                                    <label className="custom-checkbox">
                                        <input
                                            type="checkbox"
                                            checked={clickedEmPeriod['1개월 미만']}
                                            onChange={() => dropChange('employmentPeriod', '1개월 미만')}></input>
                                        <span className="text_color">1개월 미만</span>
                                    </label>
                                </li>

                                <li className="job_content">
                                    <label className="custom-checkbox">
                                        <input
                                            type="checkbox"
                                            checked={clickedEmPeriod['3개월 미만']}
                                            onChange={() => dropChange('employmentPeriod', '3개월 미만')}></input>
                                        <span className="text_color">3개월 미만</span>
                                    </label>
                                </li>

                                <li className="job_content">
                                    <label className="custom-checkbox">
                                        <input
                                            type="checkbox"
                                            checked={clickedEmPeriod['6개월 이상']}
                                            onChange={() => dropChange('employmentPeriod', '6개월 이상')}></input>
                                        <span className="text_color">6개월 이상</span>
                                    </label>
                                </li>

                                <li className="job_content">
                                    <label className="custom-checkbox">
                                        <input
                                            type="checkbox"
                                            checked={clickedEmPeriod['1년 이상']}
                                            onChange={() => dropChange('employmentPeriod', '1년 이상')} ></input>
                                        <span className="text_color">1년 이상</span>
                                    </label>
                                </li>

                                <li className="job_content">
                                    <label className="custom-checkbox">
                                        <input
                                            type="checkbox"
                                            checked={clickedEmPeriod['3년 이상']}
                                            onChange={() => dropChange('employmentPeriod', '3년 이상')}></input>
                                        <span className="text_color">3년 이상</span>
                                    </label>
                                </li>
                            </ul>
                        </div>

                    </div>

                </>
                : null
        );
    }

    const handleStartHour = () => {
        setSelectStartHour(!selectStartHour);
    }
    const showStartHour = () => {
        return (
            selectStartHour ?
                <>
                    <div className="clicked_job4">
                        <div className="pannel_body">

                            <ul className='job_container'>

                                <li className="job_content_1">
                                    <label className="custom-checkbox">
                                        <input
                                            type="checkbox"
                                            checked={clickedStartHour['00']}
                                            onChange={() => createStartHour('00')}></input>
                                        <span className="text_color3">00</span>
                                    </label>
                                </li>

                                <li className="job_content_1">
                                    <label className="custom-checkbox">
                                        <input
                                            type="checkbox"
                                            checked={clickedStartHour['01']}
                                            onChange={() => createStartHour('01')}></input>
                                        <span className="text_color3">01</span>
                                    </label>
                                </li>



                                <li className="job_content_1">
                                    <label className="custom-checkbox">
                                        <input
                                            type="checkbox"
                                            checked={clickedStartHour['02']}
                                            onChange={() => createStartHour('02')}></input>
                                        <span className="text_color3">02</span>
                                    </label>
                                </li>
                                <li className="job_content_1">
                                    <label className="custom-checkbox">
                                        <input
                                            type="checkbox"
                                            checked={clickedStartHour['03']}
                                            onChange={() => createStartHour('03')}></input>
                                        <span className="text_color3">03</span>
                                    </label>
                                </li>
                                <li className="job_content_1">
                                    <label className="custom-checkbox">
                                        <input
                                            type="checkbox"
                                            checked={clickedStartHour['04']}
                                            onChange={() => createStartHour('04')}></input>
                                        <span className="text_color3">04</span>
                                    </label>
                                </li>
                                <li className="job_content_1">
                                    <label className="custom-checkbox">
                                        <input
                                            type="checkbox"
                                            checked={clickedStartHour['05']}
                                            onChange={() => createStartHour('05')}></input>
                                        <span className="text_color3">05</span>
                                    </label>
                                </li>
                                <li className="job_content_1">
                                    <label className="custom-checkbox">
                                        <input
                                            type="checkbox"
                                            checked={clickedStartHour['06']}
                                            onChange={() => createStartHour('06')}></input>
                                        <span className="text_color3">06</span>
                                    </label>
                                </li>
                                <li className="job_content_1">
                                    <label className="custom-checkbox">
                                        <input
                                            type="checkbox"
                                            checked={clickedStartHour['07']}
                                            onChange={() => createStartHour('07')}></input>
                                        <span className="text_color3">07</span>
                                    </label>
                                </li>
                                <li className="job_content_1">
                                    <label className="custom-checkbox">
                                        <input
                                            type="checkbox"
                                            checked={clickedStartHour['08']}
                                            onChange={() => createStartHour('08')}></input>
                                        <span className="text_color3">08</span>
                                    </label>
                                </li>
                                <li className="job_content_1">
                                    <label className="custom-checkbox">
                                        <input
                                            type="checkbox"
                                            checked={clickedStartHour['09']}
                                            onChange={() => createStartHour('09')}></input>
                                        <span className="text_color3">09</span>
                                    </label>
                                </li>
                                <li className="job_content_1">
                                    <label className="custom-checkbox">
                                        <input
                                            type="checkbox"
                                            checked={clickedStartHour['10']}
                                            onChange={() => createStartHour('10')}></input>
                                        <span className="text_color3">10</span>
                                    </label>
                                </li>
                                <li className="job_content_1">
                                    <label className="custom-checkbox">
                                        <input
                                            type="checkbox"
                                            checked={clickedStartHour['11']}
                                            onChange={() => createStartHour('11')}></input>
                                        <span className="text_color3">11</span>
                                    </label>
                                </li>
                                <li className="job_content_1">
                                    <label className="custom-checkbox">
                                        <input
                                            type="checkbox"
                                            checked={clickedStartHour['12']}
                                            onChange={() => createStartHour('12')}></input>
                                        <span className="text_color3">12</span>
                                    </label>
                                </li>
                                <li className="job_content_1">
                                    <label className="custom-checkbox">
                                        <input
                                            type="checkbox"
                                            checked={clickedStartHour['13']}
                                            onChange={() => createStartHour('13')}></input>
                                        <span className="text_color3">13</span>
                                    </label>
                                </li>
                                <li className="job_content_1">
                                    <label className="custom-checkbox">
                                        <input
                                            type="checkbox"
                                            checked={clickedStartHour['14']}
                                            onChange={() => createStartHour('14')}></input>
                                        <span className="text_color3">14</span>
                                    </label>
                                </li>
                                <li className="job_content_1">
                                    <label className="custom-checkbox">
                                        <input
                                            type="checkbox"
                                            checked={clickedStartHour['15']}
                                            onChange={() => createStartHour('15')}></input>
                                        <span className="text_color3">15</span>
                                    </label>
                                </li>
                                <li className="job_content_1">
                                    <label className="custom-checkbox">
                                        <input
                                            type="checkbox"
                                            checked={clickedStartHour['16']}
                                            onChange={() => createStartHour('16')}></input>
                                        <span className="text_color3">16</span>
                                    </label>
                                </li>
                                <li className="job_content_1">
                                    <label className="custom-checkbox">
                                        <input
                                            type="checkbox"
                                            checked={clickedStartHour['17']}
                                            onChange={() => createStartHour('17')}></input>
                                        <span className="text_color3">17</span>
                                    </label>
                                </li>
                                <li className="job_content_1">
                                    <label className="custom-checkbox">
                                        <input
                                            type="checkbox"
                                            checked={clickedStartHour['18']}
                                            onChange={() => createStartHour('18')}></input>
                                        <span className="text_color3">18</span>
                                    </label>
                                </li>
                                <li className="job_content_1">
                                    <label className="custom-checkbox">
                                        <input
                                            type="checkbox"
                                            checked={clickedStartHour['19']}
                                            onChange={() => createStartHour('19')}></input>
                                        <span className="text_color3">19</span>
                                    </label>
                                </li>
                                <li className="job_content_1">
                                    <label className="custom-checkbox">
                                        <input
                                            type="checkbox"
                                            checked={clickedStartHour['20']}
                                            onChange={() => createStartHour('20')}></input>
                                        <span className="text_color3">20</span>
                                    </label>
                                </li>
                                <li className="job_content_1">
                                    <label className="custom-checkbox">
                                        <input
                                            type="checkbox"
                                            checked={clickedStartHour['21']}
                                            onChange={() => createStartHour('21')}></input>
                                        <span className="text_color3">21</span>
                                    </label>
                                </li>
                                <li className="job_content_1">
                                    <label className="custom-checkbox">
                                        <input
                                            type="checkbox"
                                            checked={clickedStartHour['22']}
                                            onChange={() => createStartHour('22')}></input>
                                        <span className="text_color3">22</span>
                                    </label>
                                </li>
                                <li className="job_content_1">
                                    <label className="custom-checkbox">
                                        <input
                                            type="checkbox"
                                            checked={clickedStartHour['23']}
                                            onChange={() => createStartHour('23')}></input>
                                        <span className="text_color3">23</span>
                                    </label>
                                </li>

                            </ul>

                        </div>

                    </div>


                </>

                : null
        );
    }

    const handleStartMin = () => {
        setSelectStartMin(!selectStartMin)
    }

    const showStartMin = () => {
        return (
            selectStartMin ?
                <>
                    <div className="clicked_job3">
                        <div className="pannel_body">

                            <ul >

                                <li className="job_content">
                                    <label className="custom-checkbox">
                                        <input
                                            type="checkbox"
                                            checked={clickedStartMin['00']}
                                            onChange={() => createStartMin('00')}></input>
                                        <span className="text_color">00</span>
                                    </label>
                                </li>

                                <li className="job_content">
                                    <label className="custom-checkbox">
                                        <input
                                            type="checkbox"
                                            checked={clickedStartMin['10']}
                                            onChange={() => createStartMin('10')}></input>
                                        <span className="text_color">10</span>
                                    </label>
                                </li>



                                <li className="job_content">
                                    <label className="custom-checkbox">
                                        <input
                                            type="checkbox"
                                            checked={clickedStartMin['20']}
                                            onChange={() => createStartMin('20')}></input>
                                        <span className="text_color">20</span>
                                    </label>
                                </li>
                                <li className="job_content">
                                    <label className="custom-checkbox">
                                        <input
                                            type="checkbox"
                                            checked={clickedStartMin['30']}
                                            onChange={() => createStartMin('30')}></input>
                                        <span className="text_color">30</span>
                                    </label>
                                </li>
                                <li className="job_content">
                                    <label className="custom-checkbox">
                                        <input
                                            type="checkbox"
                                            checked={clickedStartMin['40']}
                                            onChange={() => createStartMin('40')}></input>
                                        <span className="text_color">40</span>
                                    </label>
                                </li>

                                <li className="job_content">
                                    <label className="custom-checkbox">
                                        <input
                                            type="checkbox"
                                            checked={clickedStartMin['50']}
                                            onChange={() => createStartMin('50')}></input>
                                        <span className="text_color">50</span>
                                    </label>
                                </li>


                            </ul>

                        </div>

                    </div>




                </>
                : null
        );
    }

    const handleEndHour = () => {
        setSelectStartHour2(!selectStartHour2);
    }
    const showEndHour = () => {
        return (
            selectStartHour2 ?
                <>
                    <div className="clicked_job4">
                        <div className="pannel_body">
                           
                                <ul className='job_container'>

                                    <li className="job_content_1">
                                        <label className="custom-checkbox">
                                            <input
                                                type="checkbox"
                                                checked={clickedStartHour2['00']}
                                                onChange={() => createEndHour('00')}></input>
                                            <span className="text_color3">00</span>
                                        </label>
                                    </li>

                                    <li className="job_content_1">
                                        <label className="custom-checkbox">
                                            <input
                                                type="checkbox"
                                                checked={clickedStartHour2['01']}
                                                onChange={() => createEndHour('01')}></input>
                                            <span className="text_color3">01</span>
                                        </label>
                                    </li>



                                    <li className="job_content_1">
                                        <label className="custom-checkbox">
                                            <input
                                                type="checkbox"
                                                checked={clickedStartHour2['02']}
                                                onChange={() => createEndHour('02')}></input>
                                            <span className="text_color3">02</span>
                                        </label>
                                    </li>
                                    <li className="job_content_1">
                                        <label className="custom-checkbox">
                                            <input
                                                type="checkbox"
                                                checked={clickedStartHour2['03']}
                                                onChange={() => createEndHour('03')}></input>
                                            <span className="text_color3">03</span>
                                        </label>
                                    </li>
                                    <li className="job_content_1">
                                        <label className="custom-checkbox">
                                            <input
                                                type="checkbox"
                                                checked={clickedStartHour2['04']}
                                                onChange={() => createEndHour('04')}></input>
                                            <span className="text_color3">04</span>
                                        </label>
                                    </li>
                                    <li className="job_content_1">
                                        <label className="custom-checkbox">
                                            <input
                                                type="checkbox"
                                                checked={clickedStartHour2['05']}
                                                onChange={() => createEndHour('05')}></input>
                                            <span className="text_color3">05</span>
                                        </label>
                                    </li>
                                    <li className="job_content_1">
                                        <label className="custom-checkbox">
                                            <input
                                                type="checkbox"
                                                checked={clickedStartHour2['06']}
                                                onChange={() => createEndHour('06')}></input>
                                            <span className="text_color3">06</span>
                                        </label>
                                    </li>
                                    <li className="job_content_1">
                                        <label className="custom-checkbox">
                                            <input
                                                type="checkbox"
                                                checked={clickedStartHour2['07']}
                                                onChange={() => createEndHour('07')}></input>
                                            <span className="text_color3">07</span>
                                        </label>
                                    </li>
                                    <li className="job_content_1">
                                        <label className="custom-checkbox">
                                            <input
                                                type="checkbox"
                                                checked={clickedStartHour2['08']}
                                                onChange={() => createEndHour('08')}></input>
                                            <span className="text_color3">08</span>
                                        </label>
                                    </li>
                                    <li className="job_content_1">
                                        <label className="custom-checkbox">
                                            <input
                                                type="checkbox"
                                                checked={clickedStartHour2['09']}
                                                onChange={() => createEndHour('09')}></input>
                                            <span className="text_color3">09</span>
                                        </label>
                                    </li>
                                    <li className="job_content_1">
                                        <label className="custom-checkbox">
                                            <input
                                                type="checkbox"
                                                checked={clickedStartHour2['10']}
                                                onChange={() => createEndHour('10')}></input>
                                            <span className="text_color3">10</span>
                                        </label>
                                    </li>
                                    <li className="job_content_1">
                                        <label className="custom-checkbox">
                                            <input
                                                type="checkbox"
                                                checked={clickedStartHour2['11']}
                                                onChange={() => createEndHour('11')}></input>
                                            <span className="text_color3">11</span>
                                        </label>
                                    </li>
                                    <li className="job_content_1">
                                        <label className="custom-checkbox">
                                            <input
                                                type="checkbox"
                                                checked={clickedStartHour2['12']}
                                                onChange={() => createEndHour('12')}></input>
                                            <span className="text_color3">12</span>
                                        </label>
                                    </li>
                                    <li className="job_content_1">
                                        <label className="custom-checkbox">
                                            <input
                                                type="checkbox"
                                                checked={clickedStartHour2['13']}
                                                onChange={() => createEndHour('13')}></input>
                                            <span className="text_color3">13</span>
                                        </label>
                                    </li>
                                    <li className="job_content_1">
                                        <label className="custom-checkbox">
                                            <input
                                                type="checkbox"
                                                checked={clickedStartHour2['14']}
                                                onChange={() => createEndHour('14')}></input>
                                            <span className="text_color3">14</span>
                                        </label>
                                    </li>
                                    <li className="job_content_1">
                                        <label className="custom-checkbox">
                                            <input
                                                type="checkbox"
                                                checked={clickedStartHour2['15']}
                                                onChange={() => createEndHour('15')}></input>
                                            <span className="text_color3">15</span>
                                        </label>
                                    </li>
                                    <li className="job_content_1">
                                        <label className="custom-checkbox">
                                            <input
                                                type="checkbox"
                                                checked={clickedStartHour2['16']}
                                                onChange={() => createEndHour('16')}></input>
                                            <span className="text_color3">16</span>
                                        </label>
                                    </li>
                                    <li className="job_content_1">
                                        <label className="custom-checkbox">
                                            <input
                                                type="checkbox"
                                                checked={clickedStartHour2['17']}
                                                onChange={() => createEndHour('17')}></input>
                                            <span className="text_color3">17</span>
                                        </label>
                                    </li>
                                    <li className="job_content_1">
                                        <label className="custom-checkbox">
                                            <input
                                                type="checkbox"
                                                checked={clickedStartHour2['18']}
                                                onChange={() => createEndHour('18')}></input>
                                            <span className="text_color3">18</span>
                                        </label>
                                    </li>
                                    <li className="job_content_1">
                                        <label className="custom-checkbox">
                                            <input
                                                type="checkbox"
                                                checked={clickedStartHour2['19']}
                                                onChange={() => createEndHour('19')}></input>
                                            <span className="text_color3">19</span>
                                        </label>
                                    </li>
                                    <li className="job_content_1">
                                        <label className="custom-checkbox">
                                            <input
                                                type="checkbox"
                                                checked={clickedStartHour2['20']}
                                                onChange={() => createEndHour('20')}></input>
                                            <span className="text_color3">20</span>
                                        </label>
                                    </li>
                                    <li className="job_content_1">
                                        <label className="custom-checkbox">
                                            <input
                                                type="checkbox"
                                                checked={clickedStartHour2['21']}
                                                onChange={() => createEndHour('21')}></input>
                                            <span className="text_color3">21</span>
                                        </label>
                                    </li>
                                    <li className="job_content_1">
                                        <label className="custom-checkbox">
                                            <input
                                                type="checkbox"
                                                checked={clickedStartHour2['22']}
                                                onChange={() => createEndHour('22')}></input>
                                            <span className="text_color3">22</span>
                                        </label>
                                    </li>
                                    <li className="job_content_1">
                                        <label className="custom-checkbox">
                                            <input
                                                type="checkbox"
                                                checked={clickedStartHour2['23']}
                                                onChange={() => createEndHour('23')}></input>
                                            <span className="text_color3">23</span>
                                        </label>
                                    </li>

                                </ul>

                       

                        </div>

                    </div>

                </>
                : null
        );
    }

    const handleEndMin = () => {
        setSelectStartMin2(!selectStartMin2)
    }


    const showEndMin = () => {
        return (
            selectStartMin2 ?
                <>
                    <div className="clicked_job3">
                        <div className="pannel_body">
                            
                                <ul className='min_padd'>

                                    <li className="job_content">
                                        <label className="custom-checkbox">
                                            <input
                                                type="checkbox"
                                                checked={clickedStartMin2['00']}
                                                onChange={() => createEndMin('00')}></input>
                                            <span className="text_color">00</span>
                                        </label>
                                    </li>

                                    <li className="job_content">
                                        <label className="custom-checkbox">
                                            <input
                                                type="checkbox"
                                                checked={clickedStartMin2['10']}
                                                onChange={() => createEndMin('10')}></input>
                                            <span className="text_color">10</span>
                                        </label>
                                    </li>



                                    <li className="job_content">
                                        <label className="custom-checkbox">
                                            <input
                                                type="checkbox"
                                                checked={clickedStartMin2['20']}
                                                onChange={() => createEndMin('20')}></input>
                                            <span className="text_color">20</span>
                                        </label>
                                    </li>
                                    <li className="job_content">
                                        <label className="custom-checkbox">
                                            <input
                                                type="checkbox"
                                                checked={clickedStartMin2['30']}
                                                onChange={() => createEndMin('30')}></input>
                                            <span className="text_color">30</span>
                                        </label>
                                    </li>
                                    <li className="job_content">
                                        <label className="custom-checkbox">
                                            <input
                                                type="checkbox"
                                                checked={clickedStartMin2['40']}
                                                onChange={() => createEndMin('40')}></input>
                                            <span className="text_color">40</span>
                                        </label>
                                    </li>

                                    <li className="job_content">
                                        <label className="custom-checkbox">
                                            <input
                                                type="checkbox"
                                                checked={clickedStartMin2['50']}
                                                onChange={() => createEndMin('50')}></input>
                                            <span className="text_color">50</span>
                                        </label>
                                    </li>


                                </ul>

                       

                        </div>

                    </div>
                    <div className="pannel_bottom">
                        <button className="btn_reset">초기화</button>
                        <button onClick={generateEmploymentPeriod} className="btn_apply">적용</button>
                    </div>


                </>
                : null
        );
    }

    const handleRegion = () => {
        setSelectRegion(!selectRegion)
    }
    const showRegion = () => {
        return (
            selectRegion ?
                <>
                    <div className="clicked_loc">
                        <div className="Loc_body">
                            <div className="item_list">
                                <ul className="centered_list">
                                    <label className="loc_checkbox custom-checkbox"><input type="checkbox" checked={clickedCity['고양시']} onChange={() => dropChange('city', '고양시')}></input><span>고양시</span></label>
                                    <label className="loc_checkbox custom-checkbox"><input type="checkbox" checked={clickedCity['과천시']} onChange={() => dropChange('city', '과천시')}></input><span>과천시</span></label>
                                    <label className="loc_checkbox custom-checkbox"><input type="checkbox" checked={clickedCity['광명시']} onChange={() => dropChange('city', '광명시')}></input><span>광명시</span></label>
                                    <label className="loc_checkbox custom-checkbox"><input type="checkbox" checked={clickedCity['광주시']} onChange={() => dropChange('city', '광주시')}></input><span>광주시</span></label>
                                    <label className="loc_checkbox custom-checkbox"><input type="checkbox" checked={clickedCity['구리시']} onChange={() => dropChange('city', '구리시')}></input><span>구리시</span></label>
                                    <label className="loc_checkbox custom-checkbox"><input type="checkbox" checked={clickedCity['군포시']} onChange={() => dropChange('city', '군포시')}></input><span>군포시</span></label>
                                    <label className="loc_checkbox custom-checkbox"><input type="checkbox" checked={clickedCity['김포시']} onChange={() => dropChange('city', '김포시')}></input><span>김포시</span></label>
                                    <label className="loc_checkbox custom-checkbox"><input type="checkbox" checked={clickedCity['남양주']} onChange={() => dropChange('city', '남양주')}></input><span>남양주</span></label>
                                    <label className="loc_checkbox custom-checkbox"><input type="checkbox" checked={clickedCity['동두천']} onChange={() => dropChange('city', '동두천')}></input><span>동두천</span></label>
                                    <label className="loc_checkbox custom-checkbox"><input type="checkbox" checked={clickedCity['부천시']} onChange={() => dropChange('city', '부천시')}></input><span>부천시</span></label>
                                    <label className="loc_checkbox custom-checkbox"><input type="checkbox" checked={clickedCity['성남시']} onChange={() => dropChange('city', '성남시')}></input><span>성남시</span></label>
                                    <label className="loc_checkbox custom-checkbox"><input type="checkbox" checked={clickedCity['수원시']} onChange={() => dropChange('city', '수원시')}></input><span>수원시</span></label>
                                    <label className="loc_checkbox custom-checkbox"><input type="checkbox" checked={clickedCity['시흥시']} onChange={() => dropChange('city', '시흥시')}></input><span>시흥시</span></label>
                                    <label className="loc_checkbox custom-checkbox"><input type="checkbox" checked={clickedCity['안산시']} onChange={() => dropChange('city', '안산시')}></input><span>안산시</span></label>
                                    <label className="loc_checkbox custom-checkbox"><input type="checkbox" checked={clickedCity['안성시']} onChange={() => dropChange('city', '안성시')}></input><span>안성시</span></label>
                                    <label className="loc_checkbox custom-checkbox"><input type="checkbox" checked={clickedCity['안양시']} onChange={() => dropChange('city', '안양시')}></input><span>안양시</span></label>
                                    <label className="loc_checkbox custom-checkbox"><input type="checkbox" checked={clickedCity['양주시']} onChange={() => dropChange('city', '양주시')}></input><span>양주시</span></label>
                                    <label className="loc_checkbox custom-checkbox"><input type="checkbox" checked={clickedCity['여주시']} onChange={() => dropChange('city', '여주시')}></input><span>여주시</span></label>
                                    <label className="loc_checkbox custom-checkbox"><input type="checkbox" checked={clickedCity['오산시']} onChange={() => dropChange('city', '오산시')}></input><span>오산시</span></label>
                                    <label className="loc_checkbox custom-checkbox"><input type="checkbox" checked={clickedCity['용인시']} onChange={() => dropChange('city', '용인시')}></input><span>용인시</span></label>
                                    <label className="loc_checkbox custom-checkbox"><input type="checkbox" checked={clickedCity['의왕시']} onChange={() => dropChange('city', '의왕시')}></input><span>의왕시</span></label>
                                    <label className="loc_checkbox custom-checkbox"><input type="checkbox" checked={clickedCity['의정부']} onChange={() => dropChange('city', '의정부')}></input><span>의정부</span></label>
                                    <label className="loc_checkbox custom-checkbox"><input type="checkbox" checked={clickedCity['이천시']} onChange={() => dropChange('city', '이천시')}></input><span>이천시</span></label>
                                    <label className="loc_checkbox custom-checkbox"><input type="checkbox" checked={clickedCity['파주시']} onChange={() => dropChange('city', '파주시')}></input><span>파주시</span></label>
                                    <label className="loc_checkbox custom-checkbox"><input type="checkbox" checked={clickedCity['평택시']} onChange={() => dropChange('city', '평택시')}></input><span>평택시</span></label>
                                    <label className="loc_checkbox custom-checkbox"><input type="checkbox" checked={clickedCity['포천시']} onChange={() => dropChange('city', '포천시')}></input><span>포천시</span></label>
                                    <label className="loc_checkbox custom-checkbox"><input type="checkbox" checked={clickedCity['하남시']} onChange={() => dropChange('city', '하남시')}></input><span>하남시</span></label>
                                    <label className="loc_checkbox custom-checkbox"><input type="checkbox" checked={clickedCity['화성시']} onChange={() => dropChange('city', '화성시')}></input><span>화성시</span></label>
                                </ul>

                            </div>
                        </div>

                    </div>
                </>
                : null
        );
    }



    return (
        <> <div className='center'>
            <h1 className='title'>공고 글 작성하기</h1>
            <form onSubmit={handleSubmit}>
                { /* 각 입력창마다 onChange 속성을 추가하여 handleChange 함수를 연결해주세요. */}
                {/* 여기서는 일부 입력창에 onChange 속성을 추가했습니다. */}

                <label className='job_title'>공고제목</label><br />
                <input className="title_input" type="text" placeholder='제목을 입력해주세요' name="title" onChange={handleChange} value={formData.title} required /><br /><br />

                <div className='margin_bottom'>
                    <label className='job_title'>회사명</label><br />
                    <input type="text" className="title_input" placeholder='한글' name="companyName" onChange={handleChange} value={formData.companyName} required /><br />
                </div>
                <input type="text" className="title_input" placeholder='영어' name="companyName_en" onChange={handleChange} value={formData.companyName_en} required /><br /><br />
                <div className='margin_bottom'>
                    <label className='job_title'>근무지 상세 주소</label><br />
                    <input type="text" className="title_input" placeholder='한글 주소 (도로명)' name="detailAddress" onChange={handleChange} value={formData.detailAddress} required /><br></br>
                </div>
                <input type="text" className="title_input" placeholder='영어 주소 (도로명)' name="detailAddress_en" onChange={handleChange} value={formData.detailAddress_en} required /><br /><br />


                <div className='flex_container'>
                    <div className='wage_fix'>
                        <p className='job_title_small'>월급</p>
                        <input type="number" placeholder="(만원 단위)" className="wage_input" name="salary" onChange={handleChange} value={formData.salary} required /><br /><br />
                    </div>

                    <div className='sector_container'>
                        <div className="sector-header">
                            <label className='job_title_small'>업종</label><br />
                            <button className='tap_style' onClick={handleSector}>{formData.sector===''?"업종선택":formData.sector}</button>
                        </div>
                        {showSector()}
                    </div>
                </div>

                <br></br>

                <div className='flex_container'>
                    <div className='columm'>
                        <label className='job_title_small'>지역</label>
                        <button className='tap_style' onClick={handleRegion}>지역 선택</button>
                        {showRegion()}
                    </div>



                    <div>
                        <label className='job_title_small'>숙식 제공 여부</label> <br></br>
                        <button className='tap_style' onClick={handleFood} > 기숙사 / 식사 제공 여부</button>
                    </div>
                </div>
                <div className='padding'>
                    {showFood()}
                </div>

                <br></br>
                <br></br>



                <div className='flex_container'>
                    <div>
                        <label className='job_title_small'>근무 기간</label><br />
                        <button className='tap_style' onClick={handlePeriod}>근무 기간 선택</button>
                    </div>
                    <br></br>

                    <div className='work_fix'>
                        <label className='job_title_small'>근무요일</label><br />
                        <input type="text" placeholder='' className="tap_style" name="workDays" onChange={handleChange} value={formData.workDays} required /><br /><br />
                    </div>
                </div>
                {showPeriod()}
                <br></br>
                <br></br>


                <div>

                    <p className='job_title_small2'>근무 시작 시간</p>
                    <button className='tap_style' onClick={handleStartHour}>시간</button>



                    <label></label>
                    <button className='tap_style2' onClick={handleStartMin}>분(10분 단위)</button>  {/* 두개는 묶어서 쿼리 스트링 만들기*/}

                </div>
                <div className='inline'>
                    <div>
                        {showStartHour()}
                    </div>
                    <div>
                        {showStartMin()}
                    </div>
                </div>
                <br></br>

                <div>
                    <label className='job_title_small2'>근무 종료 시간</label><br />
                    <button className='tap_style' onClick={handleEndHour}>시간</button>

                    <label></label>
                    <button className='tap_style2' onClick={handleEndMin}>분(10분 단위)</button>
                </div>
                {showEndHour()}
                {showEndMin()}



                <br></br>
                <label>대표 이미지</label><br />
                <input type="file" id="profileImage" name="profileImage" onChange={handleChange} multiple required /><br /><br />


                <label>기업 이미지</label><br />
                <input type="file" id="companyImages" name="companyImages" onChange={handleChange} multiple required /><br /><br />


                <label>상세요강 이미지</label><br />
                <input type="file" id="details" name="details" onChange={handleChange} multiple required /><br /><br />




                <button type="submit">업로드</button>
                <br></br>
                <button type="button" onClick={handlePrintFormData}>formData 내용 출력</button>
            </form>
        </div>
        </>
    );
};

export default JobPostingForm;
import { useState, useEffect } from "react"
import "../../styles/resultpage/resultStyle.css"


export const CompanyList = ({ user }) => {


    return (
        <>
            <div className="background_color">
                <div className="recruitment_content">
                    <div className="company_center">
                        <div className="recruitment_content_list ">
                            <div className="company_list">
                                
                                {/* <div className="item_card">

                                    <div className="item_card_information">

                                        <div className="item_card_location text_color">
                                            양주시
                                        </div>



                                        <div className="item_card_title text_color">
                                            [비료공장] 생산직 모집
                                        </div>


                                        <div className="item_card_name company_color">
                                            주식회사 하나그로
                                        </div>
                                        <br></br>

                                        <div className="item_card_wage text_color">
                                            2,000,000 ₩
                                        </div>

                                    </div> 

                                    <div className="item_card_thumbnail">
                                        <div className="thumbnail_image">
                                            <img src="" width="100%" height="100%" />
                                        </div>
                                    </div>

                                </div>

                                <div className="item_card2">

                                    <div className="item_card_information">

                                        <div className="item_card_location text_color">
                                            광주시
                                        </div>



                                        <div className="item_card_title">
                                            블루베리 농장인력
                                        </div>


                                        <div className="item_card_name company_color">
                                            주식회사 푸드스토리
                                        </div>

                                        <br></br>

                                        <div className="item_card_wage">
                                            2,250,000 ₩
                                        </div>

                                    </div>

                                    <div className="item_card_thumbnail">
                                        <div className="thumbnail_image">
                                            <img src="" width="100%" height="100%" />
                                        </div>
                                    </div>

                                </div> */}





                            </div>

                        </div>

                    </div>
                    <div className="colummLine"></div>


                </div>
            </div>

        </>
    )
}

export default CompanyList;
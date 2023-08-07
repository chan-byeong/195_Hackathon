import "../../styles/resultpage/resultStyle.css"

export const CompanyList = () => {

    return (
        <>
            <div className="recruitment_content">
                <div className="recruitment_content_list">
                    <div className="company_list">
                        <div className="item_card">

                            <div className="item_card_thumbnail"> {/* 이 div 태그 a태그로 감싸기*/}
                                <div className="thumbnail_image">
                                    <img src="" width="100%" height="100%" />
                                </div>

                            </div>
                            <div className="item_card_information">
                                <div className="item_card_title"></div>
                                <div className="item_card_location"></div>
                                <div className="item_card_name"></div>
                                <div className="item_card_wage"></div>
                            </div> {/* 이 div 태그까지*/}

                        </div>
                    </div>

                </div>


            </div>

        </>
    )
}
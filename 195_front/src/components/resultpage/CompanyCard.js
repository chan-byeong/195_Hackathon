import "../../styles/resultpage/resultStyle.css"

export const CompanyCard = ({ companyName, title, salary,city}) => {

    return (

        <a style={{width:"600px",height:'200px'}}>
        <div className="item_card">
            <div className="item_card_information">
                <div className="item_card_location ">{city}</div>
                <div className="item_card_title title_style">{title}</div>
                <div className="item_card_name company_color">{companyName}</div>
                <br></br>
                <div className="item_card_wage salary_style">{salary} ₩</div>
            </div>
            <div className="item_card_thumbnail">
                <div className="thumbnail_image">
                    <img src="" width="100%" height="100%" alt="" />
                </div>

            </div>
        </div>
        </a>


    )
}
export default CompanyCard;
import "../../styles/resultpage/resultStyle.css"
import { useNavigate } from "react-router-dom";
export const CompanyCard = ({id, companyName, title, salary,city,image}) => {

    const navigate = useNavigate();
    console.log(id);

    return (

        <a onClick={()=>{navigate(`/result/${id}`)}} style={{width:"600px",height:'200px'}}>
            <div className="item_card">
                <div className="item_card_information">
                    <div className="item_card_location ">{city}</div>
                    <div className="item_card_title title_style">{title}</div>
                    <div className="item_card_name company_color">{companyName}</div>
                    <br></br>
                    <div className="item_card_wage salary_style">{salary.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "," )} ₩</div>
                </div>
                <div className="item_card_thumbnail">
                    <div className="thumbnail_image">
                        <img src={image} width="100%" height="100%" alt="" />
                    </div>

                </div>
            </div>
        </a>


    )
}
export default CompanyCard;
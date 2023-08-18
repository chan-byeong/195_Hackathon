import React from 'react'
import styled from 'styled-components';
import styles from './selectors.module.css'



const SelectContainer = styled.div`
  //position : absolute;
  width : 527px;
  padding: 15px;
  //height :400px;

  border-radius: 16px;
  border: 3px solid #372417;
  background: #5E3E28;
  box-shadow: 4px 4px 8px 0px rgba(94, 62, 40, 0.08);
`;

const ListItem = styled.li`
    margin-bottom: 15px;
    margin-left : 10px;
    width :300px;
    display :inline-flex;
    align-items :center;
`;

const SelectItem = styled.label`

  & > input 
  {
    margin-right: 13px;
    appearance: none;
    border: 1.5px solid #F0E8E3;
    border-radius: 0.25rem;
    width: 34px;
    height: 34px;
    flex-shrink: 0;

    &:checked {
        border-color: transparent;
        background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
        background-size: 100% 100%;
        background-position: 50%;
        background-repeat: no-repeat;
        background-color: #372417;
    }
  }

  & > span {
    color: #F0E8E3;
    font-size: 34px;
    font-weight: 500;
  }
`;


function Selectors({arrays,setter,setFormData,keyword}) {

  //const arrays = ["제조업","농업","서비스업","어업"];

  const dropChange = (key, value) => {
    setFormData((prev) => ({
        ...prev,
        [key]: value,
    }));
  }

  return (

    <SelectContainer>
          <ul style={{textAlign:"start"}}>
              {
                arrays.map((item , i)=>(

                  <ListItem key={i}>
                    <SelectItem>
                      <input
                      type="checkbox"
                      checked={setter(item)}
                      onChange={() => dropChange(keyword, item)}/>
                      <span>{item}</span>
                    </SelectItem>
                  </ListItem>
                ))
              }
          </ul>
    </SelectContainer>
);
  
}

export default Selectors;
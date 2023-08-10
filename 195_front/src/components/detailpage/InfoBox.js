import React from 'react'
import styles from '../../styles/detailpage/infoBoxStyle.module.css';


function InfoBox() {




  return (
    <div className={styles.info_container}>
      <div className={styles.info_box_1}>
        <div className={styles.info_contents}>
          <h2>공고제목</h2>
          <span>회사명 , 전화번호</span>
        </div>
        <div className={styles.info_img_box}>
          <div>이미지</div>
        </div>
      </div>
      <div className={styles.info_box_2}>
        <ul className={styles.info_list}>
          <li>월급</li>
          <li>업종</li>
          <li>지역</li>
          <li>숙식</li>
        </ul>
      </div>
    </div>
  )
}

export default InfoBox
import React from 'react'
import Details from '../components/detailpage/Details'

import styled from 'styled-components';
import Nav from '../components/elements/Nav';

function DetailPage() {
  return (
   <>
    <Nav main={false}/>
    <Details/>
   </>
  )
}

export default DetailPage

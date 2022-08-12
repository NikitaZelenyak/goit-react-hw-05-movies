
import styled from "styled-components";
import { NavLink } from "react-router-dom";







export const LinkButton = styled(NavLink)`
display: inline-block;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
border: 1px solid #0e49eb90;
  font-weight: 500;
  margin-bottom: 10px;



  :hover{
    background-color: #0e49ebaf;
     color: white;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  display: inline-block;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  margin-top: 10px;


  &.active {
    color: white;
    background-color: #0444f4;
  }
  :hover:not(.active){
    background-color: #0e49eb90;
     color: white;
  }
`;

export const Wrapper = styled.div`
display: flex;

`

export const Box = styled.div`
    margin-left: 40px;
`
export const Item =styled.li`
    list-style: none;
`
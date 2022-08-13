import styled from "styled-components";
import { NavLink } from "react-router-dom";







export const Link = styled(NavLink)`

  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  margin-bottom: 10px;



  :hover{
    background-color: #0e49ebaf;
     color: white;
  }
`;

export const Item =styled.li`
    list-style: none;

    margin-top: 15px;
`
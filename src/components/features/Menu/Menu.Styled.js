import styled from "styled-components";

export const StyledMenu = styled.nav`
background-color: #4d220e;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
position: absolute;
top:0;
left:0;
transition:transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0px)" : "translateX(-100%)")};
  transition:1s linear ;
  `;

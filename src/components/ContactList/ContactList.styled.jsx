import styled from '@emotion/styled';
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  

  max-width: 100%;
  width: 300px;
`;
export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;

  color: #006400;
  
  font-size: 16px;
`;

export const Btn = styled.button`
 

  border: none;
  outline: none;
  border-radius: 8px;

  color: #FFFFFF ;
  background-color: #000080;
  
  transition: all 0.2s ease-in-out;

  :hover,
  :focus {
    background-color: #87CEFA;
    color: #DEB887;
    box-shadow: -2px -2px 5px #fff, 2px 2px 5px #8ba793;
    
    :active {
      color: #DEB887;
      box-shadow: inset 1px 1px 2px #8ba793, inset -1px -1px 2px #fff;
      
    }
  }
`;
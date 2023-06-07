import styled from '@emotion/styled';
import { Form as FormikForm, Field, ErrorMessage as FormikError } from 'formik';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-bottom: 5px;
  padding: 10px;

  max-width: 100%;
  width: 500px;
`;

export const FormField = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;

  max-width: 100%;
  width: 500px;

  color: #808000;
  
`;

export const LabelWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-left: 8px;
`;

export const FieldFormik = styled(Field)`
  padding-top:10px;
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 10px;

  max-width: 100%;

  border: 0;
  outline: 0;
  border-radius: 8px;
  color: #808000;
  background-color: #FFFFE0;
 

  font-style: italic;

  
  font-size: 18px;
`;

export const ErrorMessage = styled(FormikError)`
  max-width: 500px;
  font-style: italic;
  color: #9e0202;
`;

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  padding-top: 5px;
  padding-bottom: 8px;
  padding-left: 10px;
  padding-right: 10px;

  max-width: 100%;

  border: 2px;
  outline: none;
  border-radius: 8px;

 
  transition: all 0.2s ease-in-out;

  background-color: #FFFFE0;
  color: #808000;
  cursor: pointer;

  :hover,
  :focus {
    background-color: #E0FFFF;
    color: #008080;
    box-shadow: -2px -2px 5px #fff, 2px 2px 5px #8ba793;
    
    :active {
      color: #008080;
      box-shadow: inset 1px 1px 2px #8ba793, inset -1px -1px 2px #fff;
      
    }
  }
`;
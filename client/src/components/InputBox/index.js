import React from "react";
import container from "./container";

import { StyledInputBox, StyledSelect, InputBoxContainer } from "./styled";

const InputBox = ({ onSelectChange, onInputChange }) => (
  <InputBoxContainer>
    <StyledInputBox onKeyPress={onInputChange} />
    <StyledSelect onChange={onSelectChange}>
      <option value="players">Player</option>
      <option value="managers">Manager</option>
      <option value="clubs">Club</option>
    </StyledSelect>
  </InputBoxContainer>
);

export default container(InputBox);

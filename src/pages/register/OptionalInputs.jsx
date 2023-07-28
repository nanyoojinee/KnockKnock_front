import React, { useState } from "react";
import * as S from "./style";
import { mbtiList, idealList } from "../../constants/registerConstants";
import { ModalHobby } from "./ModalHobby";
import { ModalPersonality } from "./ModalPersonality";
import { ModalIdeal } from "./ModalIdeal";
const OptionalInputs = ({ formData, setFormData }) => {
  const { mbti, religion, height, hobby, personality, ideal, introduce } =
    formData;

  const onChange = (e) => {
    const { name, value } = e.currentTarget;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const onArrayChange = (array, element, arrayPropertyName) => {
    setFormData((prev) => ({
      ...prev,
      [arrayPropertyName]: array.includes(element)
        ? array.filter((e) => e !== element)
        : [...array, element],
    }));
  };

  const handleHobbyClick = (element) => {
    onArrayChange(hobby, element, "hobby");
  };

  const handlePersonalityClick = (element) => {
    onArrayChange(personality, element, "personality");
  };

  const handleIdealClick = (element) => {
    onArrayChange(ideal, element, "ideal");
  };

  return (
    <>
      <S.RightAlignedBox style={{ marginTop: "20px" }}>
        <S.Heading>종교</S.Heading>
        <S.Select
          name="religion"
          value={religion}
          onChange={onChange}
          style={{ flex: 1, textAlign: "right" }}
        >
          <option>종교</option>
          <option key="기독교">기독교</option>
          <option key="천주교">천주교</option>
          <option key="불교">불교</option>
          <option key="없음">없음</option>
        </S.Select>
      </S.RightAlignedBox>

      <S.Box>
        <S.Heading>키</S.Heading>
        <S.Input
          name="height"
          value={height}
          onChange={onChange}
          style={{ marginLeft: "30px", textAlign: "right" }}
        />
      </S.Box>
      <S.Box>
        <S.Heading>MBTI</S.Heading>
        <S.Select
          name="mbti"
          value={mbti}
          onChange={onChange}
          style={{ textAlign: "right" }}
        >
          <option>MBTI</option>
          {mbtiList.map((mbti) => (
            <option key={mbti} value={mbti}>
              {mbti}
            </option>
          ))}
        </S.Select>
      </S.Box>
      <ModalHobby formData={formData} handleHobbyClick={handleHobbyClick} />
      <ModalPersonality
        formData={formData}
        handlePersonalityClick={handlePersonalityClick}
      />
      <ModalIdeal formData={formData} handleIdealClick={handleIdealClick} />

      <S.Heading>한줄 자기소개</S.Heading>
      <S.Box>
        <S.Input name="introduce" value={introduce} onChange={onChange} />
      </S.Box>
    </>
  );
};

export default OptionalInputs;
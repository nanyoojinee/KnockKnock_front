import styled from "styled-components";

export const Content = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 460px;
  padding: 100px;
  margin-top: 300px;
  border: 2px solid red;
  @media (max-width: 480px) {
    /* viewport 너비가 480px 이하일 경우 */
    width: 100%; /* 컨테이너 너비를 100%로 설정하여 가로 중앙 정렬 */
  }

  @media (min-width: 481px) {
    /* viewport 너비가 481px 이상일 경우 */
    width: 480px; /* 컨테이너의 너비를 480px로 설정 */
    margin: 0 auto; /* 컨테이너를 가로 중앙 정렬 */
  }
`;
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
export const Header = styled.header`
  display: flex;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  border: 2px solid #000;
  border-radius: 5px;
  padding: 10px;
`;

export const JoinButton = styled.button`
  width: 40%;
  padding: 21px 0 17px;
  border: 0;
  cursor: pointer;
  color: #fff;
  background-color: #d4baeb;
  font-size: 20px;
  font-weight: 400;
  margin-top: 30px;
  margin-left: 30px;

  /* background-image: linear-gradient(to top, #cd9cf2 0%, #f6f3ff 100%); */
  &:hover {
    background: linear-gradient(to top, #cd9cf2 0%, #f6f3ff 100%);
    background-color: #80b5ea;
  }

  &:active {
    position: relative;
    top: 1px;
  }
`;
export const Heading = styled.h3`
  margin: 19px 0 8px;
  font-size: 14px;
  font-weight: 700;
`;

export const Box = styled.span`
  display: flex;
  align-items: center;
  width: 100%;
  height: 51px;
  border: solid 1px #dadada;
  border-radius: 20px;
  padding: 10px 14px 10px 14px;
  box-sizing: border-box;
  background: #fff;
  position: relative;
  margin-bottom: 15px;
`;
// export const Input = styled.input`
//   display: block;
//   position: relative;
//   width: 100%;
//   height: 29px;
//   border: none;
//   background: #fff;
//   font-size: 15px;
// `;
export const FileInput = styled.input`
  display: block;
  position: relative;
  width: 100%;
  height: 29px;
  border: none;
  background: #fff;
  font-size: 15px;
`;
export const Input = styled.div`
  position: relative;
  margin: 10px 10px;

  input {
    background: transparent;
    border: none;
    border-bottom: solid 1px #ccc;
    margin-bottom: 5px;
    padding: 20px 0px 5px 0px;
    font-size: 14pt;
    width: 100%;
    transition: border-bottom 0.2s ease, outline 0.2s ease;

    &:placeholder-shown + label {
      color: #aaa;
      font-size: 14pt;
      margin-top: 20px;
    }

    &:focus + label {
      color: #8aa1a1;
      font-size: 10pt;
      pointer-events: none;
      position: absolute;
      left: 0px;
      top: 0px;
      transition: all 0.2s ease;
      -webkit-transition: all 0.2s ease;
      -moz-transition: all 0.2s ease;
      -o-transition: all 0.2s ease;
      transform: translateY(-100%);
      opacity: 1;
    }

    &:not(:placeholder-shown) + label,
    &:focus + label {
      color: #8aa1a1;
      font-size: 10pt;
      pointer-events: none;
      position: absolute;
      left: 0px;
      top: 0px;
      /* transition: all 0.2s ease;
      -webkit-transition: all 0.2s ease;
      -moz-transition: all 0.2s ease;
      -o-transition: all 0.2s ease; */
      transform: translateY(-100%);
      opacity: 1;
    }

    &:focus {
      border-bottom: solid 1px #8aa1a1;
      outline: none;
    }
  }

  label {
    opacity: 0;
    transition: all 0.2s ease;
    -webkit-transition: all 0.2s ease;
    -moz-transition: all 0.2s ease;
    -o-transition: all 0.2s ease;
  }
  .pswdIcon {
    /* your password icon styles */
    cursor: pointer;
    margin-left: 10px;
    /* right: 0; */
  }
`;
export const ErrorBox = styled.span`
  /* margin-top: 4px; */
  font-size: 12px;
  color: red;
`;
export const Select = styled.select`
  width: 100%;
  height: 29px;
  text-align: center;
  border: 1px solid #8aa1a1;
  border-radius: 20px;
  background: #fff;
  font-size: 15px;
`;
export const RightAlignedBox = styled.div`
  /* display: flex; */

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const UploadedImageContainer = styled.div`
  border: 2px dashed #ccc;
  border-radius: 20px;
  padding: 20px;
  margin: 20px auto;
  width: 80%;
`;
export const UploadedImage = styled.img`
  width: 100%;
  max-height: 300px;
  margin: 10px auto;
`;
export const Modal = styled.div`
  position: absolute;
  width: 80%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-image: linear-gradient(to top, #a8edea 0%, #fed6e3 100%);
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 10;
`;
export const ToggleButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding-bottom: 5px;
`;
export const ToggleButton = styled.a`
  box-shadow: inset 0px 1px 0px 0px #dcecfb;
  background: linear-gradient(to bottom, #bddbfa 5%, #80b5ea 100%);
  background-color: #bddbfa;
  border-radius: 6px;
  border: 1px solid #84bbf3;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  padding: 6px 24px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #528ecc;
  width: 100px; // Set the desired width
  height: 20px; // Set the desired height
  &:hover {
    background: linear-gradient(to bottom, #80b5ea 5%, #bddbfa 100%);
    background-color: #80b5ea;
  }

  &:active {
    position: relative;
    top: 1px;
  }
`;
export const HobbyBoxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border: none;
  /* margin: 0.1rem; */
`;

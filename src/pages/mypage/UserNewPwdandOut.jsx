import { useState } from "react";
import * as S from "./style";
import styled from "styled-components";
import { useToggle } from "../../components/hooks/useToggle";
import { validatePassword } from "../../util/common";
import { BiHide, BiShow } from "react-icons/bi";
import * as Api from "../../api";
import { showAlert, showSuccess } from "../../assets/alert";
import { useNavigate } from "react-router-dom";
const UserNewPwdandOut = ({ user }) => {
  console.log(user);
  const navigate = useNavigate();
  const { opened, onOpen, onClose } = useToggle();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [pwdCheck, setPwdCheck] = useState("");
  const isPasswordValid = validatePassword(newPassword);
  const isPasswordSame = newPassword === pwdCheck;
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isLeaving, setIsLeaving] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prevState) => !prevState);
  };

  const handlePwdChangeSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await Api.put("users/mypage/password", {
        currentPassword: currentPassword,
        newPassword: newPassword,
      });
      if (res.status === 200) {
        showSuccess("비밀번호가 변경되었습니다.");
        onClose();
      }
    } catch (err) {
      showAlert(err.response.data.message);
    }
  };

  const handleInputChange = (e) => {
    const inputText = e.target.value;
    setInputValue(inputText);
    setIsLeaving(user.name + "/탈퇴한다" === inputText);
  };

  const handleOutSubmit = async () => {
    try {
      const res = await Api.del("/users/mypage");

      if (res.status === 200) {
        localStorage.removeItem("userToken");
        showSuccess("탈퇴되었습니다.");
        navigate("/", { reaplace: true });
      }
    } catch (err) {
      showAlert(err.response.data.message);
    }
  };
  return (
    <>
      <S.ToggleButton style={{ textAlign: "center" }} onClick={() => onOpen()}>
        비밀번호 변경
      </S.ToggleButton>

      {opened && (
        <ModalOverlay>
          <S.Modal style={{ marginTop: "200px" }}>
            <S.Box>
              <S.Heading>지금 비밀번호</S.Heading>
              <S.Input
                name="currentPassword"
                value={currentPassword}
                onChange={(e) => {
                  setCurrentPassword(e.target.value);
                }}
              />
            </S.Box>
            <S.Box>
              <S.Heading>바꿀 비밀번호</S.Heading>
              <S.Input
                type={showPassword ? "text" : "password"}
                name="newPassword"
                value={newPassword}
                onChange={(e) => {
                  setNewPassword(e.target.value);
                }}
              />
              {showPassword ? (
                <BiHide
                  className="pswdIcon"
                  onClick={togglePasswordVisibility}
                />
              ) : (
                <BiShow
                  className="pswdIcon"
                  onClick={togglePasswordVisibility}
                />
              )}
            </S.Box>
            {!isPasswordValid && newPassword.length > 0 && (
              <S.ErrorBox>숫자, 문자, 특수문자 포함 8글자 이상</S.ErrorBox>
            )}
            <S.Box>
              <S.Heading>비밀번호 확인</S.Heading>
              <S.Input
                type={showConfirmPassword ? "text" : "password"}
                name="pwdCheck"
                value={pwdCheck}
                onChange={(e) => {
                  setPwdCheck(e.target.value);
                }}
              />
              {showConfirmPassword ? (
                <BiHide
                  className="pswdIcon"
                  onClick={toggleConfirmPasswordVisibility}
                />
              ) : (
                <BiShow
                  className="pswdIcon"
                  onClick={toggleConfirmPasswordVisibility}
                />
              )}
            </S.Box>
            {!isPasswordSame && isPasswordValid && (
              <S.ErrorBox>비밀번호가 다릅니다.</S.ErrorBox>
            )}
            <button onClick={handlePwdChangeSubmit}>정보 수정하기</button>
            <button onClick={onClose}>Close</button>

            <h2 style={{ color: "white" }}>회원탈퇴</h2>
            <S.Heading>이름/탈퇴한다를 입력해주세요.</S.Heading>
            <S.Box>
              <S.Input
                type="text"
                name="inputValue"
                value={inputValue}
                onChange={handleInputChange}
              />
            </S.Box>
            {isLeaving ? (
              <S.ErrorBox>정말 탈퇴하나요?</S.ErrorBox>
            ) : (
              <S.ErrorBox>이름/탈퇴한다를 입력해주세요.</S.ErrorBox>
            )}
            <button onClick={handleOutSubmit}>탈퇴하기</button>
          </S.Modal>
        </ModalOverlay>
      )}
    </>
  );
};

export default UserNewPwdandOut;
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

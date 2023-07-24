import styled from "styled-components";
function MainPage() {

  return (
    <>
      <MainContainer>
        <p>메인페이지</p>
      </MainContainer>
    </>
  );
}
const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center
  width: 90%;
  margin: 0 auto;
  position: relative;
  margin-top: 200px;
`;

export default MainPage;
import styled from "styled-components";

export const Main = styled.main`
  background-color: #24292f;
  color: #f7f9f8;
  display: grid;
  grid-template-columns: auto 1fr;
  padding-top: 90px;

  @media (max-width: 580px) {
    grid-template-columns: 1fr;
  }
`;

const headerHeight = "90px";

export const ContainerForUser = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 10px;
  box-shadow: 1px 0 1px rgba(126, 126, 126, 0.3);
  width: 380px;
  height: calc(100vh - ${headerHeight});
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ebc556;
    border-radius: 10px;
  }

  @media (max-width: 1000px) {
    width: 320px;
  }

  @media (max-width: 800px) {
    width: 230px;
  }


  @media (max-width: 580px) {
    display: none;
  }
`;

export const Search = styled.input`
  margin: 0 auto;
  width: 300px;
  border-radius: 100px;
  padding: 7px 20px;
  border: 2px solid #f7f9f8;
  background: #263238;
  grid-column: 2;
  grid-row: 1;
  justify-self: center;

  &::placeholder {
    color: #ebc556;
  }

  @media (max-width: 1000px) {
    width: 280px;
  }

  @media (max-width: 800px) {
    width: 200px;
  }
`;

export const ContainerListUser = styled.ul`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;

  @media (max-width: 1000px) {
    width: 280px;
  }

  @media (max-width: 800px) {
    width: 200px;
  }
`;

export const ContainerUserProfile = styled.li`
  width: 300px;
  display: flex;
  gap: 14px;
  align-items: center;

  @media (max-width: 1000px) {
    width: 280px;
  }

  @media (max-width: 800px) {
    width: 180px;
  }
`;

export const UserName = styled.span`
  font-weight: bold;

  @media (max-width: 800px) {
    font-size: 14px;
  }
`;

export const ContainerChat = styled.div`
`;

export const HeaderUser = styled.div`
  padding: 12px 20px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 1px 1px rgba(126, 126, 126, 0.3);
`;

export const DataUserSelected = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ContainerCall = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;

export const ImageCall = styled.img`
  cursor: pointer;
  width: 30px;
`

export const ContainerInput = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`

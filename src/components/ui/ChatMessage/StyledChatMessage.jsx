import styled from "styled-components";

const headerHeight = "165px";

export const ChatContainer = styled.div`
  width: 100%;
  height: calc(100vh - ${headerHeight});
  overflow: auto;
  position: relative;
`;

export const ChatBody = styled.div`
  padding: 10px;
  min-height: 73vh;
  color: #000;
  display: flex;
  flex-direction: column;
`;

export const MessageContainer = styled.div`
  max-width: 50%;
  background-color: lightgrey;
  margin-top: 10px;
  padding: 5px 10px;
  border-radius: 7px;
  align-self: start;
  unicode-bidi: isolate;
  width: 400px;

  &.message-mine {
    align-self: end;
    background-color: skyblue;
  }

  @media (max-width: 1000px) {
    width: 300px;
  }
`;

export const MessageText = styled.p`
  text-justify: distribute;
  display: block;
  font-size: .9375rem;
  line-height: 20px;
  text-align: left;
  word-wrap: break-word;
`;

export const ChatFooter = styled.div`
  width: 100%;
  padding: 10px 10px 0;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  position: sticky;
  bottom: 0;
  background-color: #24292f;
  z-index: 999;
`;

export const Input = styled.input`
  flex: 1;
  padding: 10px 20px;
  color: black;
`;

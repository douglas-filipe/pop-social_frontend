import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #061923;
  padding: 10px 10px;
  margin: 10px auto;
  border-radius: 10px;
  position: relative;

  .QuantityLikes{
    width: 150px;
    height: 10px;
    padding: 10px 0;
    display: flex;
    gap: 5px;
    color: white;
    svg{
      color: white;
      width: 15px;
      height: 15px;
      
    }
  }

  h1{
    padding: 10px 0;
    color: white;
    text-align: center;
  }

  p{
    color: white;
    padding: 10px 0;
  }

  .Image {
    width: 100%;
    img {
      width: 100%;
      overflow: hidden;
    }
  }

  .CardEmoticons{
    position: absolute;
    width: 250px;
    height: 60px;
    bottom: 50px;
  }

  .Reaction {
    cursor: pointer;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    color: #ffffffc9;
    border-top: 1px solid #ffffff32;
    border-bottom: 1px solid #ffffff32;
    padding: 5px 0;
    width: 90%;
    user-select: none; /* supported by Chrome and Opera */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    span {
      font-size: 18px;
    }
    svg {
      width: 20px;
      height: 20px;
    }
  }

  @media (min-width: 768px) {
    width: 700px;
  }
`;

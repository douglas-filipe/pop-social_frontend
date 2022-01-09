import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  background: #061923;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  font-family: Arial, Helvetica, sans-serif;
  justify-content: center;
  align-items: center;

  form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h1 {
    color: white;
    text-align: center;
    padding: 20px;
    font-size: 1.2rem;
    font-weight: bold;
  }

  textarea{
      resize: none;
      width: 240px;
      margin: auto;
      border-radius: 10px;
      padding: 10px;
  }

  input[type="file"]{
      display: none;
  }

  .File{
      color: white;
      display: flex;
      gap: 5px;
      justify-content: center;
      align-items: center;
      margin: 10px;
      svg{
          width: 35px;
          height: 35px;
      }
  }

  button{
      width: 100px;
      padding: 10px;
      background: #1b5cd4;
      color: white;
      border: none;
      border-radius: 10px;
      margin: 10px;
      font-weight: bold;
      cursor: pointer;
  }

  @media (min-width: 768px) {
    width: 700px;
  }



`;

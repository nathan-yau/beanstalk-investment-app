import styled from "styled-components";


export const PageConatiner = styled.div`
    margin: 3rem 1.5rem 1rem 1.5rem;
    display: flex;
    justify-content: center;
`

export const RegistrationContainer = styled.div`
    display: flex;
    width: max(50%, 300px)!important;
    background-color: rgba(255, 255, 255, 0.5);
    justify-content: center;
    flex-direction: column;
    // align-items: center;
    border-radius: 0.50em;
    border: 1px solid #ccc;
    padding: 1rem;
`;

export const RegistrationHeading = styled.h3`
    font-size: 1.5rem;
    font-weight: 600;
    text-align: center;
    :before{
        content: "Register";
        }
`

export const RegistrationButton = styled.button`
    background-color: #cfcfcf;
    border: none;
    color: white;
    font-weight: 600;
    padding: 0.5rem 0.5rem 0.5rem 0.5rem;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 1rem;
    margin: 0.5rem 0.5rem 0.5rem 0.5rem;
    border-radius: 0.5rem;
    cursor: pointer;
    :hover{
        background-color: #3e8e41;
    }
`

export const SignUpError = styled.span`
    color: #ff0000;
`;
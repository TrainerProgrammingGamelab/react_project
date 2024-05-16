import styled from 'styled-components';
import BgBenner from './img/image01.jpg';

// Benner
export const BennerStyle = styled.section`
    width: auto;
    min-height: 80vh;
    background-image: url(${BgBenner});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: grid;
    align-items: center;
    padding: 0 100px;
`;

export const ButtonStyle = styled.button`
    padding: 10px 40px;
    border-radius: 0.3rem;
    background: #3887BE;
    color: #FFFFFF;
    font-weight: 500;
    border: none;

    &:hover {
        cursor: pointer;
        background: #FFFFFF;
        color: #3887BE;
        border-color: #3887BE;
        border: 2px solid;
    }
`;

export const BennerText = styled.div`
    font-size: 3.4rem;
    color: #3887BE;
    text-transform: uppercase;
    letter-spacing: 1px;
`;

export const BennerImg = styled.div`
    font-size: 3.4rem;
    color: #3887BE;
    text-transform: uppercase;
    letter-spacing: 1px;
`;

// About
export const AboutStyle = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(17rem, auto));
    align-items: center;
    gap: 1.5rem;
    padding: 0 100px;
`;

export const AboutImg = styled.div`
    border-radius: 0.5rem;
`;

export const AboutHeading = styled.h2`
    font-size: 0.938rem;
    margin: 0.5rem 0 1.1rem;
`;

export const AboutText = styled.div`
    font-size: 0.938rem;
    margin: 0.5rem 0 1.1rem;
`;

// Produk

export const StyleRow = styled.div`
    margin: 50px 50px;
    padding: 50px;
    text-align: center;
    &:after {
        content: "";
        display: table;
        clear: both;
    }
`;

export const StyleCol = styled.div`
    float: left;
    width: 25%;
    margin: 50px 0 0 100px;
`;

export const StyleCard = styled.div`
    margin: 0 auto;
    align-items: center;
    border-radius: 16px;
    box-shadow: 0 30px 30px -25px rgba(#4133B7, .25);
    max-width: 300px;
    background-color: #fff;
    padding: 1.5rem;
    -webkit-box-shadow: 1px 0px 9px -1px rgba(0,0,0,0.36);
    -moz-box-shadow: 1px 0px 9px -1px rgba(0,0,0,0.36);
    box-shadow: 1px 0px 9px -1px rgba(0,0,0,0.36);
    .tag {
        display: inline-block;
        background-color: #f1eeff;
        color: var(--c-indigo);
        font-weight: 600;
        font-size: 0.875rem;
        padding: 0.5em 0.75em;
        line-height: 1;
        border-radius: 6px;
    }

    .title {
        font-size: 1.5rem;
        line-height: 1.25;
    }

    .details {
        display: flex;
        gap: 1rem;

        div {
            padding: .75em 1em;
            background-color: #f1eeff;
            border-radius: 8px;
            display: flex;
            flex-direction: column-reverse;
            gap: .125em;
            flex-basis: 50%;
        }

        dt {
            font-size: .875rem;
            color: var(--c-cold-purple);
        }

        dd {
            color: var(--c-indigo);
            font-weight: 600;
            font-size: 1.25rem;
        }
    }
`;

// Contact
export const ContactStyle = styled.div`
    display: flex;
    flex: 1;
    padding: 50px;

    .left{
        display: flex;
        flex-direction: column;

        .app-title {
            display: flex;
            flex-direction: column;
            position: relative;
            color: black;
            font-size: 26px;

            &:after {
                content: '';
                display: block;
                position: absolute;
                left: 0;
                bottom: -10px;
                width: 25px;
                height: 4px;
                background: black;
            }
        }

        .app-contact {
            margin-top: auto;
            font-size: 8px;
            color: black;
        }
    }

    .app-form-group {
        margin-bottom: 15px;
        
        .message {
            margin-top: 40px;
        }

        .app-form-control {
            width: 100%;
            padding: 10px 0;
            background: none;
            border: none;
            border-bottom: 1px solid #666;
            color: black;
            font-size: 14px;
            text-transform: uppercase;
            outline: none;
            transition: border-color .2s;
        }
    }
`;

// Testimoni
export const TestiStyle = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, auto));
    gap: 1.5rem;
    margin-top: 2rem;
    margin-bottom: 50px;
    padding: 0 100px;

    .box {
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
        padding: 20px;
        text-align: center;
        background-color: #ffffff;
        border-radius: 5px;
        border-top: 5px solid #3887BE;

        p {
            font-size: 0.938rem;
        }
        
        h2 {
            font-size: 1.2rem;
            font-weight: 600;
            margin: 0.5rem 0 0.5rem;
        }
    }
`;

export const TestiForm = styled.div`
    width: 500px;
    margin: 0 auto;
  
    label {
        display: block;
        margin-bottom: 10px;
    }
    
    input[type="text"],
    textarea {
        width: 100%;
        padding: 5px;
        margin-bottom: 10px;
    }
    
    input[type="submit"] {
        background-color: #4CAF50;
        color: white;
        padding: 10px 20px;
        border: none;
        cursor: pointer;
    }
`;

export const TestiH2 = styled.h2`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(17rem, auto));
    align-items: center;
    gap: 1.5rem;
    padding: 0 100px;
`;
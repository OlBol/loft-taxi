import React from 'react';
import styles from 'styled-components';
import bg from '../../assets/images/bg.png';
import Logo from '../shared/Logo';
import Heading from '../shared/Heading';
import Input from '../shared/Input';
import Submit from '../shared/Submit';

const Wrapper = styles.div`
    min-height: 100vh;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('${bg}');
    background-size: cover;
    background-position: center;
    
    @media (max-width: 800px) {
        flex-direction: column;
    }
`;

const FormContainer = styles.div`
    margin-left: 200px;
    width: 500px;
    padding: 60px 50px;
    background-color: #fff;
    
    @media (max-width: 800px) {
        margin-left: 0;
        margin-top: 20px;
    }
`;

const Text = styles.div`
    margin-bottom: 40px;
`;

const Button = styles.button`
    color: #1473e6;
    font-size: 16px;
    font-weight: 400;
    text-decoration: none;
`;

const Label = styles.label`
    margin-bottom: 8px;
    display: block;
    color: #747474;
    font-size: 15px;
    font-weight: 400;
`;

const Form = styles.form`
    display: flex;
    flex-direction: column;
`;

const LogIn = ({ setPage }) => {
    const submitForm = e => {
        e.preventDefault();
        setPage('map');
    };

    const showSignUpPage = () => setPage('signup');

    return (
        <>
            <Wrapper>
                <Logo />
                <FormContainer>
                    <Heading title="Войти" />
                    <Text>
                        Новый пользователь?&nbsp;
                        <Button onClick={showSignUpPage}>Зарегистрируйтесь</Button>
                    </Text>
                    <Form onSubmit={submitForm}>
                        <Label htmlFor="username">Имя пользователя*</Label>
                        <Input type="text" id="username" placeholder="Введите имя" />
                        <Label htmlFor="password">Пароль*</Label>
                        <Input type="password" id="password" placeholder="Введите пароль" />
                        <Submit name="Войти" />
                    </Form>
                </FormContainer>
            </Wrapper>
        </>
    );
};

export default LogIn;

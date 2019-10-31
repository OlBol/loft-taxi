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

class LogIn extends React.Component {
    state = { username: '', password: '' };

    submitForm = e => {
        e.preventDefault();
        this.props.setPage('map');
    };

    handleUsernameChange = e => {
        this.setState({ username: e.target.value });
    };

    handlePasswordChange = e => {
        this.setState({ password: e.target.value });
    };

    showSignUpPage = () => this.props.setPage('signup');

    render() {
        const { username, password } = this.state;

        return (
            <>
                <Wrapper>
                    <Logo colored="white" />
                    <FormContainer>
                        <Heading title="Войти" />
                        <Text>
                            Новый пользователь?&nbsp;
                            <Button onClick={this.showSignUpPage}>Зарегистрируйтесь</Button>
                        </Text>
                        <Form onSubmit={this.submitForm}>
                            <Label htmlFor="username">Имя пользователя*</Label>
                            <Input
                                type="text"
                                id="username"
                                value={username}
                                placeholder="Введите имя"
                                onChange={this.handleUsernameChange}
                            />
                            <Label htmlFor="password">Пароль*</Label>
                            <Input
                                type="password"
                                id="password"
                                value={password}
                                placeholder="Введите пароль"
                                onChange={this.handlePasswordChange}
                            />
                            <Submit name="Войти" />
                        </Form>
                    </FormContainer>
                </Wrapper>
            </>
        );
    }
}

export default LogIn;

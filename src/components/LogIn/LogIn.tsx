import React from 'react';
import styled from 'styled-components';
import bg from '../../assets/images/bg.png';
import Logo from '../shared/Logo';
import Heading from '../shared/Heading';
import Input from '../shared/Input';
import Submit from '../shared/Submit';

interface SampleProps {
    setPage: any;
}

class LogIn extends React.Component<SampleProps> {
    // constructor(props: SampleProps) {
    // super(props);
    // this.state = {username: '', password: ''};
    // }

    submitForm = (e: React.SyntheticEvent) => {
        e.preventDefault();
        this.props.setPage('map');
    };

    // handleUsernameChange = (e: React.SyntheticEvent) => {
    //     this.setState({ username: e.target.value });
    // };
    //
    // handlePasswordChange = (e: React.SyntheticEvent) => {
    //     this.setState({ password: e.target.value });
    // };

    showSignUpPage = () => this.props.setPage('signup');

    render() {
        // const { username, password } = this.state;

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
                                placeholder="Введите имя"
                                // value={username}
                                // onChange={this.handleUsernameChange}
                            />
                            <Label htmlFor="password">Пароль*</Label>
                            <Input
                                type="password"
                                id="password"
                                placeholder="Введите пароль"
                                // value={password}
                                // onChange={this.handlePasswordChange}
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

const Wrapper = styled.div`
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

const FormContainer = styled.div`
    margin-left: 200px;
    width: 500px;
    padding: 60px 50px;
    background-color: #fff;

    @media (max-width: 800px) {
        margin-left: 0;
        margin-top: 20px;
    }
`;

const Text = styled.div`
    margin-bottom: 40px;
`;

const Button = styled.button`
    color: #1473e6;
    font-size: 16px;
    font-weight: 400;
    text-decoration: none;
`;

const Label = styled.label`
    margin-bottom: 8px;
    display: block;
    color: #747474;
    font-size: 15px;
    font-weight: 400;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

import React from 'react';
import Logo from '../Logo';
import LogIn from '../LogIn';
import SignUp from '../SignUp';
import { AuthContext } from '../AuthContext';
import styled from 'styled-components';
import bg from '../../assets/images/bg.png';

interface AuthPageState {
    showLogIn: boolean;
    showSignUp: boolean;
}

class AuthPage extends React.Component {
    static contextType = AuthContext;

    state: AuthPageState = {
        showLogIn: true,
        showSignUp: false,
    };

    onSubmitForm = (e: React.SyntheticEvent) => {
        e.preventDefault();

        this.context.login();
    };

    onChangeToSignUp = () => {
        this.setState({
            showLogIn: false,
            showSignUp: true,
        });
    };

    onChangeToLogIn = () => {
        this.setState({
            showLogIn: true,
            showSignUp: false,
        });
    };

    render() {
        const { showLogIn, showSignUp } = this.state;
        return (
            <Wrapper data-testid="auth-page">
                <Logo colored="white" />
                {showLogIn && (
                    <LogIn
                        onSubmitForm={this.onSubmitForm}
                        onChangeToSignUp={this.onChangeToSignUp}
                    />
                )}
                {showSignUp && (
                    <SignUp
                        onSubmitForm={this.onSubmitForm}
                        onChangeToLogIn={this.onChangeToLogIn}
                    />
                )}
            </Wrapper>
        );
    }
}

export default AuthPage;

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

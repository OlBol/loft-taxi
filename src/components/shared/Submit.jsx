import React from 'react';
import styles from 'styled-components';

const StyledSubmit = styles.button`
    align-self: flex-end;
    padding: 15px 50px;
    font-size: 21px;
    font-weight: 400;
    border: 0;
    border-radius: 4px;
    background-color: #ffc617;
`;

const Submit = ({ name }) => {
    return (
        <>
            <StyledSubmit type="submit">{name}</StyledSubmit>
        </>
    );
};

export default Submit;

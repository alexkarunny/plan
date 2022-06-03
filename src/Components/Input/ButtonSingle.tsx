import React from 'react';

type PropsType = {
    addNewMessage: () => void
}

export const ButtonSingle = (props: PropsType) => {

    const onClickButtonHandler = () => {
        props.addNewMessage()
    }

    return (
        <button onClick={onClickButtonHandler}>+</button>
    );
};

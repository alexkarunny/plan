import React, {ChangeEvent, useState} from 'react';

type PropsType = {
    title: string
    addInputText: (text: string) => void
}

export const InputSingle = (props: PropsType) => {



    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.addInputText(e.currentTarget.value)
    }

    return (
        <input value={props.title} onChange={onChangeInputHandler}/>
    );
};

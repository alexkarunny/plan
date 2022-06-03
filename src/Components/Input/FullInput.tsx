import React, {ChangeEvent, useState} from 'react';

type PropsType = {
    addMessage: (newMessage: string) => void
}

export const FullInput = (props: PropsType) => {
    let [title, setTitle] = useState<string>('')

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const onClickButtonHandler = () => {
        props.addMessage(title)
        setTitle('')
    }

    return (
        <div>
            <input value={title} onChange={onChangeInputHandler}/>
            <button onClick={onClickButtonHandler}>Send</button>
        </div>
    );
};

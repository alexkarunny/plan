import {useState} from "react";
import {FullInput} from "./FullInput";
import {InputSingle} from "./InputSingle";
import {ButtonSingle} from "./ButtonSingle";


export const Input = () => {
    let [messages, setMessages] = useState<{ message: string }[]>([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])

    let [title, setTitle] = useState<string>('')

    const addMessage = (newMessage: string) => {
        let message = {message: newMessage}
        let newMessages = [
            message,
            ...messages,
        ]
        setMessages(newMessages)
    }

    const addInputText = (text: string) => {
        setTitle(text)
    }

    const addNewMessage = () => {
        addMessage(title)
        setTitle('')
    }

    return (
        <>
            <h2>Input</h2>
            <div>
                <FullInput addMessage={addMessage}/>
                <InputSingle title={title} addInputText={addInputText}/>
                <ButtonSingle addNewMessage={addNewMessage}/>
            </div>
            {
                messages.map((m, index) => <div key={index}>{m.message}</div>)
            }
        </>
    )
}
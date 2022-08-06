import React, {ChangeEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users:Array<UserType> // need to fix any
    addUserCallback: (name: string)=>void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    let [name, setName] = useState<string>('') // need to fix any
    let [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (event:ChangeEvent<HTMLInputElement>) => { // need to fix any
        let trimName = event.currentTarget.value.trim()

        if (trimName !== "") {
            setName(trimName)
            setError("")

        } else {
            setName("")
            setError("name is Require")

        }

    }
    const addUser = () => {
        if (name === "") {
            return
        }
        addUserCallback(name) ;
        alert(`Hello ${name} ! `) // need to fix
    }

    const totalUsers = users.length // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}


export default GreetingContainer



import {Client, Account, ID} from 'appwrite'
import {IRegisterUserData, ILoginUserData} from "../types";
import {v4 as uuid} from 'uuid'

const client = new Client()
    .setEndpoint('http://localhost/v1')
    .setProject('63e4e6d41d5ce1b1df9e')

const account = new Account(client)

export const createAccount = async ({email, password, name}: IRegisterUserData): Promise<boolean> => {
    try{
        if(email && password && name){
            const response = await account.create(uuid(), email, password, name)
            console.log(response)
            return true
        }
        return false
    }
    catch (e){
        console.log(e)
        return false
    }
}

export const loginAccount = async ({email, password}: ILoginUserData): Promise<boolean> => {
    try{
        if(email && password) {
            const response = await account.createEmailSession(email, password)
            console.log(response)
            return true
        }
        return false
    }
    catch (e){
        console.log(e)
        return false
    }
}


import { useState } from 'react';
import NewPasswordToken from '@/components/auth/NewPasswordToken';
import NewPasswordForm from '@/components/auth/NewPasswordForm';
import { ConfirmToken } from '@/types/index';

export default function NewPasswordView() {
  const [token, setToken] = useState<ConfirmToken['token']>('')
    const [isValidToken, setIsValidToken] = useState(false)


    return (
        <>
            <h1 className="text-5xl font-black text-white">Reset your password</h1>
            <p className="text-2xl font-light text-white mt-5">
                Enter the token to {''}
                <span className=" text-fuchsia-500 font-bold"> add a reset your password</span>
            </p>

            {!isValidToken ? 
              <NewPasswordToken 
                token={token} 
                setToken={setToken}
                setIsValidToken={setIsValidToken}
              /> : <NewPasswordForm token={token} />}
            
        </>
    )
}
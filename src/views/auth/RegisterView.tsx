import { useForm } from "react-hook-form";
import { UserRegistrationForm } from "@/types/index";
import ErrorMessage from "@/components/ErrorMessage";
import { Link } from "react-router-dom";

export default function RegisterView() {
    
    const initialValues: UserRegistrationForm = {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    }

    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm<UserRegistrationForm>({ defaultValues: initialValues });

    const password = watch('password');

    const handleRegister = (formData: UserRegistrationForm) => {}

    return (
        <>
        <h1 className="text-5xl font-black text-white">Create an account</h1>
        <p className="text-2xl font-light text-white mt-5">
            Fill out the form to {''}
            <span className=" text-fuchsia-500 font-bold"> create your account</span>
        </p>

        <form
            onSubmit={handleSubmit(handleRegister)}
            className="space-y-8 p-10  bg-white mt-10"
            noValidate
        >
            <div className="flex flex-col gap-5">
            <label
                className="font-normal text-2xl"
                htmlFor="email"
            >Email</label>
            <input
                id="email"
                type="email"
                placeholder="Email"
                className="w-full p-3  border-gray-300 border"
                {...register("email", {
                required: "The email is mandatory",
                pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Email is not valid",
                },
                })}
            />
            {errors.email && (
                <ErrorMessage>{errors.email.message}</ErrorMessage>
            )}
            </div>

            <div className="flex flex-col gap-5">
            <label
                className="font-normal text-2xl"
            >Name</label>
            <input
                type="name"
                placeholder="Your name"
                className="w-full p-3  border-gray-300 border"
                {...register("name", {
                required: "The username is mandatory",
                })}
            />
            {errors.name && (
                <ErrorMessage>{errors.name.message}</ErrorMessage>
            )}
            </div>

            <div className="flex flex-col gap-5">
            <label
                className="font-normal text-2xl"
            >Password</label>

            <input
                type="password"
                placeholder="Password"
                className="w-full p-3  border-gray-300 border"
                {...register("password", {
                required: "The password is mandatory",
                minLength: {
                    value: 8,
                    message: 'The Password must be at least 8 characters'
                }
                })}
            />
            {errors.password && (
                <ErrorMessage>{errors.password.message}</ErrorMessage>
            )}
            </div>

            <div className="flex flex-col gap-5">
            <label
                className="font-normal text-2xl"
            >Repeat password</label>

            <input
                id="password_confirmation"
                type="password"
                placeholder="Repeat password"
                className="w-full p-3  border-gray-300 border"
                {...register("password_confirmation", {
                required: "Repeat password is mandatory",
                validate: value => value === password || 'The passwords are not the same'
                })}
            />

            {errors.password_confirmation && (
                <ErrorMessage>{errors.password_confirmation.message}</ErrorMessage>
            )}
            </div>

            <input
            type="submit"
            value='Sign up'
            className="bg-fuchsia-600 hover:bg-fuchsia-700 w-full p-3  text-white font-black  text-xl cursor-pointer"
            />
        </form>
        <nav className="mt-10 flex flex-col space-y-4">
            <Link to={'/auth/login'} className="text-center text-gray-300 font-normal">
            Do you have an account? <span className='text-fuchsia-600 hover:text-fuchsia-700 transition-colors'> Login here</span> 
            </Link>
        </nav>
        </>
    )
}
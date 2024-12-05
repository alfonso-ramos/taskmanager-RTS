import { useForm } from "react-hook-form";
import { UserLoginForm } from "@/types/index";
import ErrorMessage from "@/components/ErrorMessage";
import { Link } from "react-router-dom";

export default function LoginView() {

  const initialValues: UserLoginForm = {
    email: '',
    password: '',
  }
  const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: initialValues })

  const handleLogin = (formData: UserLoginForm) => { }

  return (
    <>
      <form
        onSubmit={handleSubmit(handleLogin)}
        className="space-y-8 p-10 bg-white"
        noValidate
      >
        <div className="flex flex-col gap-5">
          <label
            className="font-normal text-2xl"
          >Email</label>

          <input
            id="email"
            type="email"
            placeholder="Enter your emaila"
            className="w-full p-3  border-gray-300 border"
            {...register("email", {
              required: "The email is mandatory",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Email in not valid",
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
          >Password</label>

          <input
            type="password"
            placeholder="Enter your password"
            className="w-full p-3  border-gray-300 border"
            {...register("password", {
              required: "The password is mandatory",
            })}
          />
          {errors.password && (
            <ErrorMessage>{errors.password.message}</ErrorMessage>
          )}
        </div>

        <input
          type="submit"
          value='Login'
          className="bg-fuchsia-600 hover:bg-fuchsia-700 w-full p-3  text-white font-black  text-xl cursor-pointer"
        />
      </form>
      <nav className="mt-10 flex flex-col space-y-4">
        <Link to={'/auth/register'} className="text-center text-gray-300 font-normal">
          Don't you have an account? <span className='text-fuchsia-600 hover:text-fuchsia-700 transition-colors'>Create an account here</span> 
        </Link>
      </nav>
    </>
  )
}
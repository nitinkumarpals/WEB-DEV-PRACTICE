import { signIn } from "@/app/auth"
export function SignIn() {
    return (
        <form
            action={async (formData) => {
                "use server"
                const res = await signIn("credentials", formData);
                global.console.log('This will be logged to the server console');
            }}
        >
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto">
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-sm p-2.5" placeholder="name@company.com" />
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Password</label>
                    <input type="password" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-sm p-2.5" placeholder="password" />
                </div>
                <button type="submit" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
                >
                    Submit</button>
                    
            </div>
        </form>
    )
}
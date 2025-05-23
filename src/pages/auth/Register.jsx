import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Link } from "react-router-dom"

export default function Register() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        terms: false,
    })

    const handleChange = (e) => {
        const { id, value, type, checked } = e.target
        setForm((prev) => ({
            ...prev,
            [id]: type === "checkbox" ? checked : value,
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        // Call your API here
        try {
            const res = await fetch("/api/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            })
            const data = await res.json()
            // handle response (e.g., show success or error)
            console.log(data)
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div className="relative flex items-center min-h-screen px-4 overflow-hidden">
            <img
                src="../../../src/assets/Alubijid.png"
                alt="alubijid campus"
                className="absolute inset-0 w-full h-full object-cover z-0"
            />
            <div className="absolute inset-0 bg-white/70 dark:bg-gray-900/70 z-10" />
            <div className="relative z-20 w-full max-w-md mx-auto space-y-4 border-2 rounded-lg p-6 bg-white dark:bg-gray-800 shadow-md">
                <div className="space-y-2 text-center">
                    <h1 className="text-3xl font-bold">Register Your Account</h1>
                    <p className="text-gray-500 dark:text-gray-400">Enter your details below to create your account</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Input id="name" type="text" placeholder="Full Name" className="w-full" required
                                value={form.name} onChange={handleChange} />
                        </div>
                        <div className="space-y-2">
                            <Input id="email" type="email" placeholder="m@example.com" className="w-full" required
                                value={form.email} onChange={handleChange} />
                        </div>
                        <div className="space-y-2">
                            <Input id="password" type="password" placeholder="Password" className="w-full" required
                                value={form.password} onChange={handleChange} />
                        </div>
                        <Button className="w-full" type="submit">Register</Button>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center space-x-2">
                            <Checkbox id="terms" required checked={form.terms} onChange={handleChange} />
                            <Label htmlFor="terms" className="text-sm">
                                I agree to the Terms and Conditions
                            </Label>
                        </div>
                    </div>
                    <div className="flex items-center justify-center mt-4">
                        <p className="text-sm underline dark:text-white-400">Already Have An Account?</p>
                        <Link to="/auth/login" className="ml-1 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                            Log in
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
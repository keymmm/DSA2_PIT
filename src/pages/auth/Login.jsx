import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Link, useNavigate } from "react-router-dom"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    try {
      // Replace with your actual API endpoint
      const response = await fetch("https://your-api-url.com/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      })
      if (!response.ok) {
        throw new Error("Invalid credentials")
      }
      // If login is successful, redirect or do something
      navigate("/dashboard") // Change to your desired route
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div className="relative flex items-center min-h-screen px-4 overflow-hidden">
      {/* Background Image */}
      <img
        src="../../../src/assets/Alubijid.png"
        alt="alubijid campus"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/70 dark:bg-gray-900/70 z-10" />
      {/* Login Form */}
      <div className="relative z-20 w-full max-w-md mx-auto space-y-4 border-2 rounded-lg p-6 bg-white dark:bg-gray-800 shadow-md">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Login</h1>
          <p className="text-gray-500 dark:text-gray-400">Enter your email below to login to your account</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="space-y-2">
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                className="w-full"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Input
                id="password"
                type="password"
                className="w-full"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button className="w-full" type="submit">Login</Button>
            {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          </div>
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center space-x-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember" className="text-sm">
                Remember me
              </Label>
            </div>
          </div>
          <div className="flex items-center justify-center mt-4">
            <p className="text-sm underline dark:text-white-400">Don't have an account? </p>
            <Link to="/auth/register" className="ml-1 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}
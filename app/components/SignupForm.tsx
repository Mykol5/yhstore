'use client';

import { useState } from "react";
import Link from "next/link";

export default function SignupForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const [passwordStrength, setPasswordStrength] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    special: false
  });

  const checkPasswordStrength = (password: string) => {
    setPasswordStrength({
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /[0-9]/.test(password),
      special: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic here
    console.log("Signup data:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    if (name === "password") {
      checkPasswordStrength(value);
    }
  };

  const getPasswordStrength = () => {
    const requirements = Object.values(passwordStrength);
    const met = requirements.filter(Boolean).length;
    const total = requirements.length;
    return { met, total };
  };

  const { met, total } = getPasswordStrength();

  return (
    <div className="min-h-screen bg-black flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="text-yellow-400 text-3xl font-bold tracking-wider mb-2">
            YH
          </div>
          <h2 className="mt-6 text-3xl font-bold text-white">
            Create Account
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            Join the YH community
          </p>
        </div>

        {/* Signup Form */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            {/* Name Fields */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  autoComplete="given-name"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black border border-yellow-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                  placeholder="First name"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  autoComplete="family-name"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black border border-yellow-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                  placeholder="Last name"
                />
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black border border-yellow-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                placeholder="Enter your email"
              />
            </div>

            {/* Password Field with Strength Indicator */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black border border-yellow-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                placeholder="Create a strong password"
              />
              
              {/* Password Strength Indicator */}
              {formData.password && (
                <div className="mt-3 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-400">Password Strength</span>
                    <span className={`font-medium ${
                      met === total ? 'text-green-400' : 
                      met >= 3 ? 'text-yellow-400' : 'text-red-400'
                    }`}>
                      {met}/{total}
                    </span>
                  </div>
                  
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-300 ${
                        met === total ? 'bg-green-500' : 
                        met >= 3 ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${(met / total) * 100}%` }}
                    />
                  </div>

                  {/* Password Requirements */}
                  <div className="space-y-1 mt-2">
                    <div className={`text-xs flex items-center gap-2 ${passwordStrength.length ? 'text-green-400' : 'text-gray-400'}`}>
                      <span>✓</span>
                      At least 8 characters
                    </div>
                    <div className={`text-xs flex items-center gap-2 ${passwordStrength.uppercase ? 'text-green-400' : 'text-gray-400'}`}>
                      <span>✓</span>
                      One uppercase letter
                    </div>
                    <div className={`text-xs flex items-center gap-2 ${passwordStrength.lowercase ? 'text-green-400' : 'text-gray-400'}`}>
                      <span>✓</span>
                      One lowercase letter
                    </div>
                    <div className={`text-xs flex items-center gap-2 ${passwordStrength.number ? 'text-green-400' : 'text-gray-400'}`}>
                      <span>✓</span>
                      One number
                    </div>
                    <div className={`text-xs flex items-center gap-2 ${passwordStrength.special ? 'text-green-400' : 'text-gray-400'}`}>
                      <span>✓</span>
                      One special character
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Terms and Conditions */}
          <div className="flex items-center">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              required
              className="h-4 w-4 text-yellow-500 focus:ring-yellow-500 border-yellow-500/30 rounded bg-black"
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-400">
              I agree to the{" "}
              <Link href="/terms" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                Terms and Conditions
              </Link>
            </label>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={met !== total}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-black bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transform transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              Create Account
            </button>
          </div>

          {/* Login Link */}
          <div className="text-center">
            <p className="text-sm text-gray-400">
              Already have an account?{" "}
              <Link href="/login" className="font-medium text-yellow-400 hover:text-yellow-300 transition-colors">
                Sign in
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
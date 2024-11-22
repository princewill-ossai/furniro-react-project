import React from 'react'
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className="flex flex-col py-7 items-center justify-center min-h-screen bg-gray-100">
  <img src={logo} alt="Logo" className="mb-6 w-50 h-20" />
  <form className="w-full max-w-sm bg-white rounded-lg shadow-md p-6">
    <h1 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
      Create an Account
    </h1>
    <p className="text-gray-600 text-sm mb-4">
      Registering for this site is easy. Just fill in the fields below, and
      we'll get a new account set up for you in no time.
    </p>
    <h3 className="text-lg font-medium text-gray-700 mb-3">
      Account Details
    </h3>
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Username<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Name<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email Address<span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Create Password<span className="text-red-500">*</span>
        </label>
        <input
          type="password"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Confirm Password<span className="text-red-500">*</span>
        </label>
        <input
          type="password"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
        />
      </div>
    </div>
    <div className="mt-6">
      <button
        type="submit"
        className="w-full px-4 py-2 text-white bg-[#a46609fa] rounded-md hover:bg-black focus:outline-none focus:ring focus:ring-blue-300"
      >
        Sign Up
      </button>
    </div>
  </form>
  <p>Already have an account?. <Link to={"/login"}>Login</Link></p>
</div>

  )
}

export default SignUp
'use client';

import { useState } from 'react';

import { useRouter } from 'next/navigation';

import {
  Lock,
  Mail,
} from 'lucide-react';

export default function LoginPage() {

  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {

    if (!email || !password) {

      alert('Please enter email and password');

      return;

    }

    /* Fake Auth Cookie */
    document.cookie = 'wms-auth=true; path=/';

    router.push('/dashboard/executive');

  };

  return (
    <div
      className="
        min-h-screen flex items-center justify-center
        bg-gradient-to-br from-gray-100 to-gray-200
        p-6
      "
    >

      <div
        className="
          bg-white rounded-3xl shadow-2xl
          w-full max-w-md p-8
        "
      >

        <div className="text-center mb-8">

          <h1 className="text-4xl font-bold text-gray-900">
            WMS Login
          </h1>

          <p className="text-gray-500 mt-3">
            Enterprise Wealth Management System
          </p>

        </div>

        <div className="space-y-5">

          {/* Email */}
          <div>

            <label className="text-sm font-medium text-gray-700">
              Email Address
            </label>

            <div className="relative mt-2">

              <Mail
                size={18}
                className="
                  absolute left-4 top-1/2
                  -translate-y-1/2 text-gray-400
                "
              />

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@wms.com"
                className="
                  w-full pl-11 pr-4 py-3
                  border border-gray-200
                  rounded-2xl
                  focus:outline-none
                  focus:ring-2 focus:ring-blue-500
                "
              />

            </div>

          </div>

          {/* Password */}
          <div>

            <label className="text-sm font-medium text-gray-700">
              Password
            </label>

            <div className="relative mt-2">

              <Lock
                size={18}
                className="
                  absolute left-4 top-1/2
                  -translate-y-1/2 text-gray-400
                "
              />

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="
                  w-full pl-11 pr-4 py-3
                  border border-gray-200
                  rounded-2xl
                  focus:outline-none
                  focus:ring-2 focus:ring-blue-500
                "
              />

            </div>

          </div>

          {/* Login Button */}
          <button
            onClick={handleLogin}
            className="
              w-full py-3 rounded-2xl
              bg-blue-600 text-white
              font-semibold
              hover:bg-blue-700
              transition
            "
          >
            Sign In
          </button>

        </div>

      </div>

    </div>
  );
}
import React, { useState, useEffect } from "react";

const Manager = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);
  const [visiblePasswords, setVisiblePasswords] = useState({}); // track visibility per password

  // Load saved passwords from localStorage
  useEffect(() => {
    const passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const savePassword = () => {
    if (!form.site || !form.username || !form.password) return;
    const newArray = [...passwordArray, form];
    setPasswordArray(newArray);
    localStorage.setItem("passwords", JSON.stringify(newArray));
    setForm({ site: "", username: "", password: "" }); // reset form
  };

  const togglePasswordVisibility = (index) => {
    setVisiblePasswords((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center px-4 py-6 bg-gray-100 space-y-6">
      {/* 🔹 Add Password Form */}
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Save Your Credentials
        </h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            savePassword();
          }}
          className="flex flex-col space-y-4 w-full"
        >
          {/* URL */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
            <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-0 sm:w-32">
              URL
            </label>
            <input
              value={form.site}
              onChange={handleChange}
              name="site"
              type="text"
              placeholder="https://example.com"
              className="input-style flex-1 w-full"
            />
          </div>

          {/* Username */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
            <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-0 sm:w-32">
              Username
            </label>
            <input
              value={form.username}
              onChange={handleChange}
              name="username"
              type="text"
              placeholder="Enter your username"
              className="input-style flex-1 w-full"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 relative">
            <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-0 sm:w-32">
              Password
            </label>
            <input
              value={form.password}
              onChange={handleChange}
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="input-style flex-1 w-full pr-10"
            />
            <img
              src={showPassword ? "/eye-open.svg" : "/eye-closed.svg"}
              alt="Toggle password visibility"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>

          <button
            type="submit"
            className="group btn-primary flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium"
          >
            <lord-icon
              src="https://cdn.lordicon.com/qwghbson.json"
              trigger="hover"
              colors="primary:#ffffff,secondary:#ffffff"
              className="w-6 h-6"
            ></lord-icon>
            <span>Add Password</span>
          </button>
        </form>
      </div>

      {/* 🔹 Stored Passwords List */}
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-md p-6 border border-gray-200">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Stored Passwords
        </h3>

        <div className="space-y-3">
          {passwordArray.length === 0 ? (
            <p className="text-gray-500">No passwords saved yet.</p>
          ) : (
            passwordArray.map((item, index) => (
              <div
                key={index}
                className="p-3 border rounded-lg bg-gray-50 flex flex-col md:flex-row md:items-center md:justify-between gap-2"
              >
                <div className="flex flex-col md:flex-row md:gap-4 w-full overflow-hidden">
                  <p className="font-medium text-gray-700 break-words md:w-1/4">{item.site}</p>
                  <p className="text-gray-500 break-words md:w-1/4">{item.username}</p>
                  <p className="text-gray-700 flex items-center gap-2 md:w-1/4">
                    {visiblePasswords[index] ? item.password : "••••••••"}
                    <img
                      src={visiblePasswords[index] ? "/eye-open.svg" : "/eye-closed.svg"}
                      alt="toggle"
                      className="w-5 h-5 cursor-pointer"
                      onClick={() => togglePasswordVisibility(index)}
                    />
                  </p>
                </div>

                <div className="flex gap-2 mt-2 md:mt-0">
                  <button
                    onClick={() => copyToClipboard(item.username)}
                    className="px-3 py-1 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                  >
                    Copy Username
                  </button>
                  <button
                    onClick={() => copyToClipboard(item.password)}
                    className="px-3 py-1 text-sm bg-green-500 text-white rounded-lg hover:bg-green-600"
                  >
                    Copy Password
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Manager;

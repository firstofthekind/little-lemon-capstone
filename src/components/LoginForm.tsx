const LoginForm = () => {
  return (
    <section className="min-vh-100 d-flex align-items-center justify-content-center bg-light px-3">
      <div
        className="shadow-lg p-5 rounded-4 bg-white"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <h1 className="text-center mb-4 fw-bold" style={{ color: "#495e57" }}>
          Welcome Back
        </h1>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label text-dark fw-semibold">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="form-label text-dark fw-semibold">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="btn w-100 fw-bold"
            style={{
              background: "#f4ce14",
              color: "#333333",
              border: "none",
            }}
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-center" style={{ color: "#a1a1aa" }}>
          Don’t have an account?{" "}
          <a href="#" className="fw-semibold" style={{ color: "#ee9972" }}>
            Sign Up
          </a>
        </p>
      </div>
    </section>
  )
}

export default LoginForm

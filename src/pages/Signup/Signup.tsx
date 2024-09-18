import { type FormEvent, Suspense, useId, useState } from "react";
import { Link } from "react-router-dom";

import InputWrapper from "components/Input/InputWrapper";
import InputText from "components/Input/InputText";
import PrimaryBtn from "components/Buttons/Primary/Primary";
import SvgIcon from "components/SvgIcon/SvgIcon";

import Logo from "assets/logo/logo-large.svg";

// CSS prefix: .signup-
import "./style.css";

type SignupProps = {
  login?: boolean;
  setIsLogin: (value: boolean) => void;
};

function Signup({ login, setIsLogin }: SignupProps) {
  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const isDisabled = login ? !email || !password : !name || !email || !password;

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (isDisabled) {
      alert("Please fill in all fields.");
      return;
    }

    if (!login && name.length < 2) {
      alert("Name must be at least 2 letters long.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return;
    }

    setIsLogin(true);
    window.localStorage.setItem("personal_finances_logged_in", "true");
  }

  return (
    <div className="signup">
      <aside className="signup-illust">
        <div className="signup-illust-img" />
        <Suspense>
          <Logo />
        </Suspense>
      </aside>

      <main className="signup-form-main">
        <form className="signup-form" onSubmit={onSubmit}>
          <h1 className="signup-form-label">{login ? "Login" : "Sign Up"}</h1>

          {!login && (
            <InputWrapper id={nameId} label="Name">
              <InputText
                id={nameId}
                value={name}
                placeholder="Enter your name"
                onChange={(e) => setName(e.target.value)}
                minLength={2}
              />
            </InputWrapper>
          )}

          <InputWrapper id={emailId} label="Email">
            <InputText
              id={emailId}
              value={email}
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
            />
          </InputWrapper>

          <InputWrapper
            id={passwordId}
            label="Create Password"
            helperText="Passwords must be at least 8 characters"
            icon={
              <SvgIcon
                path={showPassword ? "show-password" : "hide-password"}
              />
            }
            onClickIcon={() => setShowPassword(!showPassword)}
          >
            <InputText
              id={passwordId}
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? "text" : "password"}
              minLength={8}
            />
          </InputWrapper>

          <PrimaryBtn
            label={login ? "Login" : "Create Account"}
            isDisabled={isDisabled}
            type="submit"
          />
          <p className="signup-form-link-account">
            <span>
              {login
                ? "Need to create an account?"
                : "Already have an account?"}
            </span>
            <Link
              to={login ? "/signup" : "/login"}
              className="signup-form-link"
            >
              {login ? "Sign Up" : "Login"}
            </Link>
          </p>

          <p className="signup-form-note">
            😊 This is a demo, just fill in the fields and click the button 😊
          </p>
        </form>
      </main>
    </div>
  );
}

export default Signup;

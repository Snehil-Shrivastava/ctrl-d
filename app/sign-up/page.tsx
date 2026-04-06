"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import sandBg from "@/public/sand_bg.png";
import styles from "../sign-in/auth.module.css";

import logo from "@/public/ctrld-logo.svg";

export default function SignUpPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password !== confirm) return setError("Passwords do not match.");
    if (password.length < 8)
      return setError("Password must be at least 8 characters.");

    setLoading(true);

    // 🔧 Call your register API route here, e.g.:
    // const res = await fetch("/api/register", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ name, email, password }),
    // });
    // if (!res.ok) { setError("Email already in use."); setLoading(false); return; }

    // Then sign in immediately after creating the account
    const signInRes = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    setLoading(false);

    if (signInRes?.error) {
      setError("Account created but sign-in failed. Please sign in manually.");
    } else {
      router.push("/");
    }
  };

  return (
    <main
      className={`font-cal-sans relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0603]`}
    >
      <Image
        src={sandBg}
        alt=""
        fill
        priority
        style={{ objectFit: "cover", zIndex: 0 }}
      />

      <div className="card w-full max-w-120 m-8">
        <Image src={logo} alt="" className="w-15 mx-auto mb-3" />
        <h1 className={`text-center text-2xl mb-1`}>Create an account</h1>
        <p className={`font-outfit text-center mb-8 font-extralight`}>
          Start your journey
        </p>

        <form
          onSubmit={handleSubmit}
          className={`${styles.form} font-outfit flex flex-col gap-5`}
          autoComplete="off"
        >
          <div className={styles.field}>
            <span className={styles.fieldIcon}>
              <PersonIcon />
            </span>
            <input
              type="text"
              placeholder="Full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className={styles.input}
              autoComplete="off"
              style={{ paddingLeft: "1rem" }}
            />
          </div>

          <div className={styles.field}>
            <span className={styles.fieldIcon}>
              <EnvelopeIcon />
            </span>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={styles.input}
              autoComplete="off"
              style={{ paddingLeft: "1rem" }}
            />
          </div>

          <div className={styles.field}>
            <span className={styles.fieldIcon}>
              <LockIcon />
            </span>
            <input
              type={showPw ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className={styles.input}
              style={{ paddingRight: "3rem", paddingLeft: "1rem" }}
              autoComplete="new-password"
            />
            <button
              type="button"
              className={styles.eyeBtn}
              onClick={() => setShowPw((v) => !v)}
            >
              {showPw ? <EyeIcon /> : <EyeOffIcon />}
            </button>
          </div>

          <div className={styles.field}>
            <span className={styles.fieldIcon}>
              <LockIcon />
            </span>
            <input
              type={showPw ? "text" : "password"}
              placeholder="Confirm password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              required
              className={styles.input}
              style={{ paddingLeft: "1rem" }}
            />
          </div>

          {error && <p className={styles.error}>{error}</p>}

          <button type="submit" disabled={loading} className={styles.submitBtn}>
            {loading ? "Creating account…" : "Get Started"}
          </button>
        </form>

        <div className={styles.divider}>
          <span className={styles.dividerLine} />
          <span className={`text-xs font-extralight font-outfit`}>
            or sign up with
          </span>
          <span className={styles.dividerLine} />
        </div>

        <div className={styles.socialRow}>
          <SocialBtn
            label="Google"
            onClick={() => signIn("google", { callbackUrl: "/" })}
          >
            <GoogleSVG />
          </SocialBtn>
          <SocialBtn
            label="Facebook"
            onClick={() => signIn("facebook", { callbackUrl: "/" })}
          >
            <FacebookSVG />
          </SocialBtn>
          <SocialBtn
            label="Apple"
            onClick={() => signIn("apple", { callbackUrl: "/" })}
          >
            <AppleSVG />
          </SocialBtn>
        </div>

        <p className={styles.switchText}>
          Already have an account?{" "}
          <Link href="/sign-in" className={`${styles.switchLink} ml-1`}>
            Sign in
          </Link>
        </p>
      </div>
    </main>
  );
}

function SocialBtn({
  onClick,
  label,
  children,
}: {
  onClick: () => void;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <button onClick={onClick} aria-label={label} className={styles.socialBtn}>
      {children}
    </button>
  );
}
function PersonIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
    </svg>
  );
}
function EnvelopeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  );
}
function LockIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 8h-1V6A5 5 0 0 0 7 6v2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2zm-6 9a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm3.1-9H8.9V6a3.1 3.1 0 0 1 6.2 0v2z" />
    </svg>
  );
}
function EyeOffIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24M1 1l22 22" />
    </svg>
  );
}
function EyeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
function GoogleSVG() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}
function FacebookSVG() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="12" fill="#1877F2" />
      <path
        fill="#fff"
        d="M15.12 7.5h-1.87c-.22 0-.5.29-.5.68V9.5H15l-.31 2H12.75V18H10.5v-6.5H9V9.5h1.5V8.18C10.5 6.37 11.63 5 13.5 5H15.12v2.5z"
      />
    </svg>
  );
}
function AppleSVG() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

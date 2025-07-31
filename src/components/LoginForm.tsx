import { useState } from "react";
import { Link } from "react-router-dom";
import { app } from "firebaseApp";
import { toast } from "react-toastify";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const onChane = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        if (name === "email") {
            setEmail(value);

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!value?.match(emailRegex)) {
                setError("이메일 형식이 올바르지 않습니다.");
            } else {
                setError("");
            }
        } else if (name === "password") {
            setPassword(value);

            if (value.length < 8) {
                setError("비밀번호는 8자 이상으로 입력해주세요.");
            } else {
                setError("");
            }
        }
    };

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const auth = getAuth(app);
            await signInWithEmailAndPassword(auth, email, password);

            toast.success("로그인에 성공했습니다.");
        } catch (error: any) {
            toast.error(error?.code);
            console.log(error);
        }
    };

    return (
        <form onSubmit={onSubmit} className="form form--lg">
            <h1 className="form__title">로그인</h1>
            <div className="form__block">
                <label htmlFor="email">이메일</label>
                <input type="email" name="email" id="email" onChange={onChane} value={email} required />
            </div>
            <div className="form__block">
                <label htmlFor="password">비밀번호</label>
                <input type="password" name="password" id="password" onChange={onChane} value={password} required />
            </div>
            {error && error?.length > 0 && (
                <div className="form__block">
                    <div className="form__error">{error}</div>
                </div>
            )}
            <div className="form__block">
                계정이 없으신가요? <Link to="/signup" className="form__link">회원가입하기</Link>
            </div>
            <div className="form__block">
                <input
                    type="submit"
                    className="form__btn--submit"
                    value="로그인"
                    disabled={error?.length > 0}
                />
            </div>
        </form>
    );
}
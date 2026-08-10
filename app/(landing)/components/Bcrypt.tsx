"use client";

import { useState } from "react";
import bcryptjs from "bcryptjs";

export default function Bcrypt() {
    const [originalText, setOriginalText] = useState("");
    const [rounds, setRounds] = useState(6);
    const [hashedPassword, setHashedPassword] = useState("");

    async function hashPassword() {
        const hash = await bcryptjs.hash(originalText, rounds);
        setHashedPassword(hash);
    }

    return (
        <section className="content">
            <div className="text-center header">
                <h1>Hash a Password</h1>
                <p className="mb-0">Site is 100% offline.</p>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.npmjs.com/package/bcryptjs"
                    className="badge bg-white text-black"
                >
                    bcryptjs
                </a>
            </div>

            <input
                value={originalText}
                onChange={(event) => setOriginalText(event.target.value)}
                placeholder="Original Text"
                type="text"
                className="mb-2"
            />

            <div className="px-1 py-1 fw-bold small bg-black text-white w-100">Salt Rounds</div>
            <input
                aria-label="Salt rounds"
                value={rounds}
                onChange={(event) => setRounds(Number(event.target.value))}
                placeholder="Rounds"
                type="number"
                min={4}
                max={31}
                className="mb-2"
            />

            <button className="btn btn-primary w-100 mb-2" onClick={hashPassword}>
                Hash
            </button>

            <textarea
                data-testid="bcrypt-output"
                value={hashedPassword}
                onChange={(event) => setHashedPassword(event.target.value)}
                placeholder="Output"
                readOnly
            />

            <hr />
        </section>
    );
}
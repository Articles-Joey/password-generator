"use client"

import useStore from "@/components/useStore";
import { useEffect, useState } from "react";

import { Form } from "react-bootstrap"
import bcryptjs from "bcryptjs"

export default function Bcrypt() {

    const page = useStore(state => state.page);

    const [originalText, setOriginalText] = useState('');
    const [rounds, setRounds] = useState(6);

    const [hashedPassword, setHashedPassword] = useState('');

    function hashPassword() {

        console.log(rounds)

        bcryptjs.hash(originalText, rounds, function (err, hash) {
            // Store hash in your password DB.
            console.log(hash)
            setHashedPassword(hash)
        });

    }

    return (
        <section className="content">

            <div className="text-center header">
                <h1>Hash a Password</h1>
                <p className="mb-0">Site is 100% offline.</p>
                <a 
                    target="_blank"
                    href="https://www.npmjs.com/package/bcryptjs"
                    className="badge bg-white text-black"
                >
                    bcryptjs
                </a>
            </div>

            <input
                value={originalText}
                onChange={(e) => {
                    setOriginalText(e.target.value)
                }}
                placeholder="Original Text"
                type="text"
                className="mb-2"
            />

            <div className="px-1 py-1 fw-bold small bg-black text-white w-100">Salt Rounds</div>
            <input
                value={rounds}
                onChange={(e) => {
                    setRounds(+e.target.value)
                }}
                placeholder="Rounds"
                type="number"
                className="mb-2"
            />

            <button
                className="btn btn-primary w-100 mb-2"
                onClick={() => {
                    hashPassword()
                }}
            >
                Hash
            </button>

            <textarea
                value={hashedPassword}
                onChange={(e) => {
                    setHashedPassword(e.target.value)
                }}
                placeholder="Output"
                type="text"
            />

            <hr />

        </section>
    )

}
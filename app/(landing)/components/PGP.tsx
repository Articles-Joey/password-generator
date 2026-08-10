"use client";

import { useEffect, useState } from "react";
import CryptoJS from "crypto-js";

function createKey(): string {
    const randomBytes = new Uint8Array(32);
    window.crypto.getRandomValues(randomBytes);

    return Array.from(randomBytes, (byte) => byte.toString(16).padStart(2, "0")).join("");
}

export default function PGP() {
    const [message, setMessage] = useState("");
    const [encryptionKey, setEncryptionKey] = useState("");
    const [result, setResult] = useState("");

    function encryptMessage() {
        setResult(CryptoJS.AES.encrypt(message, encryptionKey).toString());
    }

    function decryptMessage() {
        const bytes = CryptoJS.AES.decrypt(message, encryptionKey);
        setResult(bytes.toString(CryptoJS.enc.Utf8));
    }

    function generateKey() {
        setEncryptionKey(createKey());
    }

    useEffect(() => {
        generateKey();
    }, []);

    return (
        <section className="content">
            <div className="text-center header">
                <h1>Encode and Decode PGP Data</h1>
                <p className="mb-0">Site is 100% offline.</p>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.npmjs.com/package/crypto-js"
                    className="badge bg-white text-black"
                >
                    crypto-js
                </a>
            </div>

            <textarea
                aria-label="Message"
                placeholder="Message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
            />
            <textarea
                aria-label="Encryption key"
                className="mb-2"
                placeholder="Encryption Key"
                value={encryptionKey}
                onChange={(event) => setEncryptionKey(event.target.value)}
            />

            <div className="d-flex justify-content-between w-100 mb-2">
                <button className="btn btn-primary" onClick={generateKey}>
                    Generate Key
                </button>

                <div>
                    <button className="btn btn-primary me-1" onClick={decryptMessage}>
                        Decrypt
                    </button>
                    <button className="btn btn-primary" onClick={encryptMessage}>
                        Encrypt
                    </button>
                </div>
            </div>

            <div className="card w-100">
                <div className="card-body">
                    <div>Result</div>
                    <div data-testid="pgp-result">{result}</div>
                </div>
            </div>
        </section>
    );
}
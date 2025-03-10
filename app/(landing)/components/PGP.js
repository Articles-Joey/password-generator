"use client"

import useStore from "@/components/useStore";
import { useEffect, useState } from "react";

import { Form } from "react-bootstrap"

import CryptoJS from "crypto-js";

export default function PGP() {

    const page = useStore(state => state.page);

    const [message, setEncryptMessage] = useState('');
    const [encryptKey, setEncryptKey] = useState('');

    const [encryptMessageResponse, setEncryptMessageResponse] = useState('');

    function encryptMessage() {
        var ciphertext = CryptoJS.AES.encrypt(message, encryptKey).toString();
        setEncryptMessageResponse(ciphertext)
    }

    function decryptMessage() {
        var bytes = CryptoJS.AES.decrypt(message, encryptKey);
        var originalText = bytes.toString(CryptoJS.enc.Utf8);
        setEncryptMessageResponse(originalText)
    }

    function generateKey() {
        setEncryptKey(window.crypto.getRandomValues(new BigUint64Array(4)).reduce(
            (prev, curr, index) => (
                !index ? prev : prev.toString(36)
            ) + (
                    index % 2 ? curr.toString(36).toUpperCase() : curr.toString(36)
                )
        ).split('').sort(() => 128 -
            window.crypto.getRandomValues(new Uint8Array(1))[0]
        ).join('')
        )
    }

    useEffect(() => {

        generateKey()

    }, []);

    return (
        <section className="content">

            <div className="text-center header">
                <h1>Encode and Decode PGP Data</h1>
                <p className="mb-0">Site is 100% offline.</p>
                <a 
                    target="_blank"
                    href="https://www.npmjs.com/package/crypto-js"
                    className="badge bg-white text-black"
                >
                    crypto-js
                </a>
            </div>

            <textarea
                className=""
                placeholder="Message"
                type="text"
                value={message}
                onChange={(e) => {
                    setEncryptMessage(e.target.value)
                }}
            />
            <textarea
                className="mb-2"
                placeholder="Encryption Key"
                type="text"
                value={encryptKey}
                onChange={() => {
                    setEncryptKey(e.target.value)
                }}
            />

            <div className="d-flex justify-content-between w-100 mb-2">

                <button
                    className="btn btn-primary"
                    onClick={() => {
                        generateKey()
                    }}
                >
                    Generate Key
                </button>

                <div>
                    <button
                        className="btn btn-primary me-1"
                        onClick={() => {
                            decryptMessage()
                        }}
                    >
                        Decrypt
                    </button>
                    <button
                        className="btn btn-primary"
                        onClick={() => {
                            encryptMessage()
                        }}
                    >
                        Encrypt
                    </button>
                </div>

            </div>

            <div className="card w-100">
                <div className="card-body">
                    <div>Result</div>
                    <div>{encryptMessageResponse}</div>
                </div>
            </div>

        </section>
    )

}
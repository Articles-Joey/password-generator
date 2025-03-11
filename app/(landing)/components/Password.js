"use client"

import useStore from "@/components/useStore";
import { useEffect, useState } from "react";

import { Form } from "react-bootstrap"

export default function Password() {

    const page = useStore(state => state.page);

    const [generatedPassword, setGeneratedPassword] = useState('');

    const [length, setLength] = useState(16);

    const [requirements, setRequirements] = useState({
        "Capital Letters": true,
        "Lowercase": true,
        "Numbers": true,
        "Symbols": true
    });

    function generatePassword() {
        console.log(length)

        const capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
        const numbers = "0123456789";
        const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";

        let allowedChars = "";
        if (requirements["Capital Letters"]) allowedChars += capitalLetters;
        if (requirements["Lowercase"]) allowedChars += lowercaseLetters;
        if (requirements["Numbers"]) allowedChars += numbers;
        if (requirements["Symbols"]) allowedChars += symbols;

        if (!allowedChars) {
            setGeneratedPassword(""); // If no requirements are selected, return an empty password
            return;
        }

        let password = "";

        // for (let i = 0; i < length; i++) {
        //     const randomIndex = Math.floor(Math.random() * allowedChars.length);
        //     password += allowedChars[randomIndex];
        // }

        const randomValues = new Uint32Array(length);
        window.crypto.getRandomValues(randomValues); // Generate secure random numbers

        for (let i = 0; i < length; i++) {
            const randomIndex = randomValues[i] % allowedChars.length; // Modulo to stay within allowedChars
            password += allowedChars[randomIndex];
        }

        setGeneratedPassword(password);
    }

    useEffect(() => {
        generatePassword()
    }, [])

    useEffect(() => {
        generatePassword()
    }, [length])

    useEffect(() => {
        generatePassword()
    }, [requirements])

    return (
        <section className="content">

            <div className="text-center header">
                <h1>Generate a Password</h1>
                <p className="mb-0">Site is 100% offline.</p>
                <a
                    target="_blank"
                    href="https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues"
                    className="badge bg-white text-black"
                >
                    crypto.getRandomValues()
                </a>
            </div>

            <div className="card w-100">
                <div className="card-body text-center">
                    <h4 className="mb-0">
                        {generatedPassword}
                    </h4>
                </div>
            </div>

            <div className="quick-controls">

                <button
                    className="btn btn-primary"
                    onClick={() => {
                        generatePassword()
                    }}
                >
                    <i className="fad fa-redo me-2"></i>
                    Generate
                </button>

                <button
                    className="btn btn-primary"
                    onClick={() => {
                        navigator.clipboard.writeText(generatedPassword);
                    }}
                >
                    <i className="fad fa-copy me-2"></i>
                    Copy
                </button>

            </div>

            <div className="card w-100">
                <div className="card-body">

                    <div className="fw-bold mb-2">
                        Personalize the password
                    </div>

                    <div>Password Length</div>

                    <div className="d-flex mb-3">

                        <input
                            style={{ width: '60px' }}
                            type="number"
                            value={length}
                            onChange={(e) => {
                                setLength(e.target.value)
                                // generatePassword()
                            }}
                        />

                        <div className="ms-2 flex-grow-1">
                            {/* <Form.Label>Length</Form.Label> */}
                            <Form.Range
                                onChange={(e) => {
                                    const inputValue = Number(e.target.value);
                                    const minInput = 0, maxInput = 100;
                                    const minOutput = 4, maxOutput = 64;

                                    const mappedValue = minOutput + ((inputValue - minInput) / (maxInput - minInput)) * (maxOutput - minOutput);

                                    console.log(mappedValue); // Outputs a value between 4 and 64
                                    setLength(mappedValue.toFixed(0))
                                    // generatePassword()
                                }}
                            />
                        </div>

                    </div>

                    <div>Password Requirements</div>

                    {Object.keys(requirements).map(item => {

                        const activeCount = Object.values(requirements).filter(value => value).length;
                        const isDisabled = activeCount === 1 && requirements[item];

                        return (
                            <div key={item}>
                                <Form.Check
                                    type="switch"
                                    id={`default-${item}`}
                                    label={`${item}`}
                                    disabled={isDisabled}
                                    // defaultChecked={true}
                                    checked={requirements?.[item]}
                                    onChange={(e) => {
                                        let requirementsCopy = { ...requirements }
                                        requirementsCopy[item] = !requirements?.[item]
                                        setRequirements(requirementsCopy)
                                        console.log("Test", e.target.value)
                                    }}
                                />
                            </div>
                        )
                    })}

                </div>
            </div>

        </section>
    )

}
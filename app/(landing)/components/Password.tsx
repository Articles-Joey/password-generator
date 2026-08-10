"use client";

import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";

type Requirement = "Capital Letters" | "Lowercase" | "Numbers" | "Symbols";
type Requirements = Record<Requirement, boolean>;

const defaultRequirements: Requirements = {
    "Capital Letters": true,
    Lowercase: true,
    Numbers: true,
    Symbols: true,
};

function createPassword(length: number, requirements: Requirements): string {
    const characterSets: Record<Requirement, string> = {
        "Capital Letters": "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        Lowercase: "abcdefghijklmnopqrstuvwxyz",
        Numbers: "0123456789",
        Symbols: "!@#$%^&*()_+[]{}|;:,.<>?",
    };

    const allowedCharacters = (Object.keys(characterSets) as Requirement[])
        .filter((requirement) => requirements[requirement])
        .map((requirement) => characterSets[requirement])
        .join("");

    if (!allowedCharacters || length <= 0) {
        return "";
    }

    const randomValues = new Uint32Array(length);
    window.crypto.getRandomValues(randomValues);

    return Array.from(randomValues, (value) =>
        allowedCharacters[value % allowedCharacters.length]
    ).join("");
}

export default function Password() {
    const [generatedPassword, setGeneratedPassword] = useState("");
    const [length, setLength] = useState(16);
    const [requirements, setRequirements] = useState<Requirements>(defaultRequirements);

    const generatePassword = () => {
        setGeneratedPassword(createPassword(length, requirements));
    };

    useEffect(() => {
        generatePassword();
    }, [length, requirements]);

    return (
        <section className="content">
            <div className="text-center header">
                <h1>Generate a Password</h1>
                <p className="mb-0">Site is 100% offline.</p>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues"
                    className="badge bg-white text-black"
                >
                    crypto.getRandomValues()
                </a>
            </div>

            <div className="card w-100">
                <div className="card-body text-center">
                    <h4 className="mb-0" data-testid="password-result">
                        {generatedPassword}
                    </h4>
                </div>
            </div>

            <div className="quick-controls">
                <button className="btn btn-primary" onClick={generatePassword}>
                    <i className="fad fa-redo me-2" aria-hidden="true"></i>
                    Generate
                </button>

                <button
                    className="btn btn-primary"
                    onClick={() => navigator.clipboard.writeText(generatedPassword)}
                >
                    <i className="fad fa-copy me-2" aria-hidden="true"></i>
                    Copy
                </button>
            </div>

            <div className="card w-100">
                <div className="card-body">
                    <div className="fw-bold mb-2">Personalize the password</div>
                    <div>Password Length</div>

                    <div className="d-flex mb-3">
                        <input
                            aria-label="Password length"
                            style={{ width: "60px" }}
                            type="number"
                            value={length}
                            onChange={(event) => setLength(Number(event.target.value))}
                        />

                        <div className="ms-2 flex-grow-1">
                            <Form.Range
                                aria-label="Password length slider"
                                min={4}
                                max={64}
                                value={length}
                                onChange={(event) => setLength(Number(event.target.value))}
                            />
                        </div>
                    </div>

                    <div>Password Requirements</div>

                    {(Object.keys(requirements) as Requirement[]).map((requirement) => {
                        const activeCount = Object.values(requirements).filter(Boolean).length;
                        const isDisabled = activeCount === 1 && requirements[requirement];

                        return (
                            <Form.Check
                                key={requirement}
                                type="switch"
                                id={`default-${requirement}`}
                                label={requirement}
                                disabled={isDisabled}
                                checked={requirements[requirement]}
                                onChange={() =>
                                    setRequirements((current) => ({
                                        ...current,
                                        [requirement]: !current[requirement],
                                    }))
                                }
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
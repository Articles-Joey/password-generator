import { motion } from "framer-motion";

export default function AnimatedSVG() {
    return (

        <svg
            clipRule="evenodd"
            fillRule="evenodd"
            imageRendering="optimizeQuality"
            shapeRendering="geometricPrecision"
            textRendering="geometricPrecision"
            viewBox="0 0 500 500"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <radialGradient fx="50%" fy="50%" id="id0">
                    <stop offset="0" stopColor="#76C1FF" />
                    <stop offset=".38" stopColor="#76C1FF" />
                    <stop offset=".588" stopColor="#279DFF" />
                    <stop offset="1" stopColor="#0076D8" />
                </radialGradient>
            </defs>

            <g id="Layer_x0020_1">
                <path
                    d="M130 245h39v-102c0-45 36-82 81-82s81 37 81 82v102h39v-102c0-66-54-120-120-120s-120 54-120 120v102z"
                    style={{ fill: "#434242" }}
                />

                <circle
                    cx="250"
                    cy="325"
                    r="155"
                    style={{ fill: "url(#id0)", stroke: "#434242", strokeWidth: "10" }}
                />
                <circle cx="250" cy="325" r="100" style={{ fill: "#EDEDED" }} />

                <path d="M250 325l50 87c-31 17-69 17-100 0l50-87z" style={{ fill: "#F1F1F2" }} />
                <path d="M250 325l-50-87c31-17 69-17 100 0l-50 87z" style={{ fill: "#F1F1F2" }} />
                <path d="M250 325l26 97c-17 4-35 4-52 0l26-97z" style={{ fill: "#F5F5F6" }} />
                <path d="M250 325l-26-97c17-4 35-4 52 0l-26 97z" style={{ fill: "#F5F5F6" }} />
                <path d="M250 325l13 99c-8 1-17 1-26 0l13-99z" style={{ fill: "#F9F9FA" }} />
                <path d="M250 325l-13-99c8-1 17-1 26 0l-13 99z" style={{ fill: "#F9F9FA" }} />

                <circle cx="250" cy="325" r="100" style={{ fill: "none", stroke: "#434242", strokeWidth: "10" }} />
                <circle cx="250" cy="325" r="45" style={{ fill: "#DDDEDE", stroke: "#434242", strokeWidth: "5" }} />

                {/* Rotating Dial Animation */}
                <g style={{
                    transform: "translate(250px,325px)"
                }}>
                    <motion.g
                        animate={{ rotate: [0, 30, -30, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <path
                            d="M-71 71l18-18m124-124l-18 18m-53-47v25m0 175v-25m71-4l-18-18m-124-124l18 18m153 53h-25m-175 0h25m-17 39l23-10m161-68l-23 10m-32-64l-9 23m-65 163l9-23m67 22l-10-23m-68-161l10 23m122 106l-23-9m-163-65l23 9"
                            style={{ fill: "none", stroke: "#434242", strokeWidth: "7", strokeLinecap: "round", }}
                        />
                    </motion.g>
                </g>

                <circle cx="250" cy="325" r="35" style={{ fill: "#C5C5C5" }} />
                <path d="M250 43c-37 0-71 20-89 51" style={{ fill: "none", stroke: "#EDEDED", strokeWidth: "15", strokeLinecap: "round" }} />
            </g>
        </svg>
    );
}
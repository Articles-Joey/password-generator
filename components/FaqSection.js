"use client"

import Accordion from 'react-bootstrap/Accordion';

const faqs = [
    {
        question: "",
        answer: ""
    },
]

function FaqSection() {
    return (
        <Accordion defaultActiveKey={0}>

            {faqs.map((item, item_i) => {
                return (
                    <Accordion.Item key={item.question} eventKey={item_i}>
                        <Accordion.Header>
                            {item.question}
                        </Accordion.Header>
                        <Accordion.Body>
                            {item.answer}
                        </Accordion.Body>
                    </Accordion.Item>
                )
            })}

        </Accordion>
    );
}

export default FaqSection;
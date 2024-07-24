// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    { text: "What mitigation for lead dust is required when demolishing a 50 year old building? ", value: "What mitigation for lead dust is required when demolishing a 50 year old building? " },
    { text: "What is known about the mental health impacts of living next to busy roadways and highways?", value: "What is known about the mental health impacts of living next to busy roadways and highways?" },
    { text: "What amount of proximity to trees is protective of physical and mental health?", value: "What amount of proximity to trees is protective of physical and mental health?" }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};

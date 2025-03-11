import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    // two states, one for each die
    //

    const [left, setRoll] = useState<number>(1);
    const [right, setRoll2] = useState<number>(2);

    function roll() {}

    return (
        <div>
            <Button onClick={d6}>Roll Left</Button>
            <span data-testid="left-die">Left Value: {left}</span>
            <Button>Roll Right</Button>
            <span data-testid="right-die">Right Value: {right}</span>
        </div>
    );
}

const precedence: { [key: string]: number } = {
    "+": 1,
    "-": 1,
    "*": 2,
    "/": 2,
    "%": 2,
    "^": 3,
    "**": 3,
};

/**
 * Evaluate a string calculation. e.g.
 * @param expression An expression in string form to be evaluated. (Accepted operations include: + - / × ÷ ^ and %)
 * @example
 * calculate("2 + 2") // 4
 * calcualte("5%10") // 5 % of 10 = 0.5
 */
export function calculate(expression: string): number {
    function applyOperator(operators: string[], values: number[]) {
        const operator = operators.pop();
        const right = values.pop() as number;
        const left = values.pop() as number;
        switch (operator) {
            case "+":
                values.push(left + right);
                break;
            case "-":
                values.push(left - right);
                break;
            case "*":
            case "×":
                values.push(left * right);
                break;
            case "/":
            case "÷":
                values.push(left / right);
                break;
            case "**":
            case "^":
                values.push(left ** right);
                break;
            case "%":
                values.push((left / 100) * right);
                break;
        }
    }

    const operators: string[] = [];
    const values: number[] = [];

    for (let i = 0; i < expression.length; i++) {
        const token = expression[i];
        if (token === " ") {
            continue;
        } else if (!isNaN(Number(token))) {
            let number = token;
            while (
                i + 1 < expression.length &&
                !isNaN(Number(expression[i + 1]))
            ) {
                number += expression[i + 1];
                i++;
            }
            values.push(parseFloat(number));
        } else if ("+-*/×÷%^".includes(token)) {
            while (
                operators.length > 0 &&
                operators[operators.length - 1] !== "(" &&
                precedence[token] <= precedence[operators[operators.length - 1]]
            ) {
                applyOperator(operators, values);
            }
            operators.push(token);
        } else if (token === "(") {
            operators.push(token);
        } else if (token === ")") {
            while (
                operators.length > 0 &&
                operators[operators.length - 1] !== "("
            ) {
                applyOperator(operators, values);
            }
            if (
                operators.length === 0 ||
                operators[operators.length - 1] !== "("
            ) {
                throw new Error("Invalid expression");
            }
            operators.pop(); // Remove the open parenthesis
        }
    }

    while (operators.length > 0) {
        if (
            operators[operators.length - 1] === "(" ||
            operators[operators.length - 1] === ")"
        ) {
            throw new Error("Invalid expression");
        }
        applyOperator(operators, values);
    }

    if (values.length !== 1 || operators.length !== 0) {
        throw new Error("Invalid expression");
    }

    return values[0];
}

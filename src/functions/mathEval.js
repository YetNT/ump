const precedence = {
    "+": 1,
    "-": 1,
    "*": 2,
    "/": 2,
    "%": 2,
    "^": 3,
    "**": 3,
};

module.exports = function calculate(expression) {
    function applyOperator(operators, values) {
        const operator = operators.pop();
        const right = values.pop();
        const left = values.pop();
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

    const operators = [];
    const values = [];

    for (let i = 0; i < expression.length; i++) {
        const token = expression[i];
        if (token === " ") {
            continue;
        } else if (!isNaN(token)) {
            let number = token;
            while (i + 1 < expression.length && !isNaN(expression[i + 1])) {
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
};

import fs from 'fs';

interface Qus {
    name: string,
    level: string,
}

type item = string

export const quiz: Record<item, Qus>[] = [
    {
        'Closure': {
            name: "Create Hello World Function",
            level: "Easy",
        }
    },
    {
        'Closure': {
            name: "Counter",
            level: "Easy",
        }
    },
    {
        'Closure': {
            name: "To Be Or Not To Be",
            level: "Easy",
        }
    },
    {
        'Closure': {
            name: "Counter II",
            level: "Easy",
        }
    },
    {
        'Basic Array Transformations': {
            name: "Apply Transform Over Each Element in Array",
            level: "Easy",
        }
    },
    {
        'Basic Array Transformations': {
            name: "Filter Elements from Array",
            level: "Easy",
        }
    },
    {
        'Basic Array Transformations': {
            name: "Array Reduce Transformation",
            level: "Easy",
        }
    },
    {
        'Function Transformations': {
            name: "Function Composition",
            level: "Easy",
        }
    },
    {
        'Function Transformations': {
            name: "Return Length of Arguments Passed",
            level: "Easy",
        }
    },
    {
        'Function Transformations': {
            name: "Allow One Function Call",
            level: "Easy",
        }
    },
    {
        'Function Transformations': {
            name: "Memoize",
            level: "Medium",
        }
    },
    {
        'Promises and Time': {
            name: "Add Two Promises",
            level: "Easy",
        }
    },
    {
        'Promises and Time': {
            name: "Sleep",
            level: "Easy",
        }
    },
    {
        'Promises and Time': {
            name: "Timeout Cancellation",
            level: "Easy",
        }
    },
    {
        'Promises and Time': {
            name: "Interval Cancellation",
            level: "Easy",
        }
    },
    {
        'Promises and Time': {
            name: "Promise Time Limit",
            level: "Medium",
        }
    },
    {
        'Promises and Time': {
            name: "Cache With Time Limit",
            level: "Medium",
        }
    },
    {
        'Promises and Time': {
            name: "Debounce",
            level: "Medium",
        }
    },
    {
        'Promises and Time': {
            name: "Execute Asynchronous Functions in Parallel",
            level: "Medium",
        }
    },
    {
        'JSON': {
            name: "Is Object Empty",
            level: "Easy",
        }
    },
    {
        'JSON': {
            name: "Chunk Array",
            level: "Easy",
        }
    },
    {
        'JSON': {
            name: "Array Prototype Last",
            level: "Easy",
        }
    },
    {
        'JSON': {
            name: "Group By",
            level: "Medium",
        }
    },
    {
        'JSON': {
            name: "Sort By",
            level: "Easy",
        }
    },
    {
        'JSON': {
            name: "Join Two Arrays by ID",
            level: "Medium",
        }
    },
    {
        'JSON': {
            name: "Flatten Deeply Nested Array",
            level: "Medium",
        }
    },
    {
        'JSON': {
            name: "Compact Object",
            level: "Medium",
        }
    },
    {
        'Classes': {
            name: "Event Emitter",
            level: "Medium",
        }
    },
    {
        'Classes': {
            name: "Array Wrapper",
            level: "Easy",
        }
    },
    {
        'Classes': {
            name: "Calculator with Method Chaining",
            level: "Easy",
        }
    }
];


function main(quiz: Record<string, Qus>[]) {
    const createdDirs = new Set<string>();

    for (const item of quiz) {
        const topic = Object.keys(item)[0];
        if (!topic) continue;

        // Create directory if we haven't tracked it yet
        if (!createdDirs.has(topic)) {
            if (!fs.existsSync(topic)) {
                fs.mkdirSync(topic);
                console.log(`Created directory: ${topic}`);
            }
            createdDirs.add(topic);
        }

        const questionData = item[topic]!;
        const fileName = questionData.name.replace(/\s/g, '-');
        const filePath = `${topic}/${fileName}.ts`;

        // Write the TypeScript file if it doesn't already exist
        if (!fs.existsSync(filePath)) {
            fs.writeFileSync(filePath, `// Problem: ${questionData.name} - ${questionData.level}\n\n`);
            console.log(`Created file: ${filePath}`);
        }
    }
    
    console.log("\nSetup complete! Categories found:", Array.from(createdDirs));
}

main(quiz);

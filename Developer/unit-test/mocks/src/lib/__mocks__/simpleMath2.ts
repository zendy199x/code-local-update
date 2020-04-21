export const sum = jest.fn((a: number, b: number): any => `I'm mocked!! ${a} + ${b}`);

export const prod = jest.fn((a: number, b: number): any => `I'm mocked!! ${a} * ${b}`);

export const divide = jest.fn((a: number, b: number): any => `I'm mocked!! ${a} / ${b}`);

'use server';

import fs from 'fs/promises';
import path from 'path';

const notesFilePath = path.join(__dirname, '../tasks/20-task.ts');

export async function readTask() {
  // const data = await fs.readFile(notesFilePath, 'utf-8');
  // return JSON.parse(data);

  return new Promise((resolve, resject) => {
    resolve({
      data: [
        {
          id: "6c84fb90-12c4-11e1-840d-7b25c5ee775a",
          name: "Valid Parentheses",
          level: "easy",
          subject: "Leetcode task",
          code: `
export const isValid = (s: string): boolean => {
  const stack: string[] = [];
  const brackets: Record<string, string> = {
    ')': '(',
    '}': '{',
    ']': '['
  };

  for (const char of s) {
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
    } else {
      if (stack.length === 0 || stack.pop() !== brackets[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
  }
          `,
          date: "2023-10-22T09:00:00",
          read: true,
          labels: ["string"],
        },
      ]
    });
  });
}
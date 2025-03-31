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
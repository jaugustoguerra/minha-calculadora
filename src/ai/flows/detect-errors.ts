// detect-errors.ts
'use server';
/**
 * @fileOverview Detects errors in a mathematical expression.
 *
 * - detectErrors - A function that detects errors in a mathematical expression.
 * - DetectErrorsInput - The input type for the detectErrors function.
 * - DetectErrorsOutput - The return type for the detectErrors function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const DetectErrorsInputSchema = z.object({
  expression: z.string().describe('The mathematical expression to evaluate.'),
});
export type DetectErrorsInput = z.infer<typeof DetectErrorsInputSchema>;

const DetectErrorsOutputSchema = z.object({
  hasError: z.boolean().describe('Whether the expression contains an error.'),
  errorMessage: z.string().describe('The error message if an error exists, otherwise null.'),
});
export type DetectErrorsOutput = z.infer<typeof DetectErrorsOutputSchema>;

export async function detectErrors(input: DetectErrorsInput): Promise<DetectErrorsOutput> {
  return detectErrorsFlow(input);
}

const detectErrorsPrompt = ai.definePrompt({
  name: 'detectErrorsPrompt',
  input: {
    schema: z.object({
      expression: z.string().describe('The mathematical expression to evaluate.'),
    }),
  },
  output: {
    schema: z.object({
      hasError: z.boolean().describe('Whether the expression contains an error.'),
      errorMessage: z.string().describe('The error message if an error exists, otherwise null.'),
    }),
  },
  prompt: `You are a calculator error detection AI.

You will receive a mathematical expression as input. Your task is to determine if the expression contains any errors, such as division by zero or invalid operations.

If an error is detected, set 'hasError' to true and provide a descriptive error message in 'errorMessage'. If no errors are found, set 'hasError' to false and set 'errorMessage' to null.

Expression: {{{expression}}}`,
});

const detectErrorsFlow = ai.defineFlow<
  typeof DetectErrorsInputSchema,
  typeof DetectErrorsOutputSchema
>({
  name: 'detectErrorsFlow',
  inputSchema: DetectErrorsInputSchema,
  outputSchema: DetectErrorsOutputSchema,
},
async input => {
  const {output} = await detectErrorsPrompt(input);
  return output!;
});

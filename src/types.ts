/*
Note: verbatimModuleSyntax option is enabled in tsconfig.json,
and ensures types are imported separately from runtime values.

import type { name } from "../type_file";
*/

export interface TriviaQuestion {
    type: string;
    difficulty: string;
    category: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
}

export interface FilteredItem {
    value: string;
    count: number;
}


export interface FilterQuestionsProps {
  activeFilter: string;
  onChange: (key: string) => void;
};
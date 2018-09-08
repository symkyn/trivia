export interface Question {
    id: string;
    question: string;
    animal: string;
    difficulty: number;
    options: {
        1: string;
        2: string;
        3: string;
        4: string;
    };
    correct_answer: number;
    date_entered: Date;
}
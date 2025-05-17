export interface Consult {
    id: number;
    patientId: number;
    date: string;
    type?: "evaluation" | "default"
}
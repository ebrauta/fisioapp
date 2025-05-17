export interface Consult {
    id: number;
    patientId: number;
    date: string;
    time: string;
    status: 'completed' | 'pending';
}
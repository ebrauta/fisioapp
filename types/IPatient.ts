export interface Patient {
    id: number;
    name: string;
    planId?: number;
    physiotherapistId: number
    finished?: boolean;
}
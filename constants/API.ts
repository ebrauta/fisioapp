import { Consult } from "@/types/IConsult";
import { HealthPlan } from "@/types/IHealthPlan";
import { Patient } from "@/types/IPatient";

export const HealthPlansData: HealthPlan[] = [
    { id: 1, name: "Unimed" },
    { id: 2, name: "Samp" },
    { id: 3, name: "Bradesco Empresarial" },
    { id: 4, name: "Particular" },
    { id: 5, name: "Mais Saúde" },
    { id: 6, name: "Vale" },
    { id: 7, name: "MedSênior" }
]

export const PatientsData: Patient[] = [
    { id: 1, name: "João da Silva", age: 30, gender: "M", planId: 1 },
    { id: 2, name: "Maria Oliveira", age: 25, gender: "F", planId: 4 },
    { id: 3, name: "Pedro Santos", age: 40, gender: "M", planId: 3 },
    { id: 4, name: "Ana Costa", age: 35, gender: "F", planId: 4 },
    { id: 5, name: "Lucas Almeida", age: 28, gender: "M", planId: 5 },
    { id: 6, name: "Fernanda Lima", age: 32, gender: "F", planId: 1},
    { id: 7, name: "Ricardo Pereira", age: 45, gender: "M", planId: 2 },
    { id: 8, name: "Juliana Rocha", age: 29, gender: "F", planId: 1 },
    { id: 9, name: "Gabriel Martins", age: 38, gender: "M", planId: 2 },
    { id: 10, name: "Larissa Ferreira", age: 27, gender: "F", planId: 1 },
]

export const ConsultsData: Consult[] = [
    { id: 1, patientId: 1, date: "2025-10-01", time: "09:00", status: "completed" },
    { id: 2, patientId: 1, date: "2025-10-15", time: "10:00", status: "completed" },
    { id: 3, patientId: 1, date: "2025-10-20", time: "11:00", status: "completed" },
    { id: 4, patientId: 1, date: "2025-10-25", time: "12:00", status: "completed" },
    { id: 5, patientId: 2, date: "2025-10-02", time: "09:00", status: "completed" },
    { id: 6, patientId: 2, date: "2025-10-16", time: "10:00", status: "completed" },
    { id: 7, patientId: 3, date: "2025-10-03", time: "11:00", status: "completed" },
    { id: 8, patientId: 3, date: "2025-10-17", time: "12:00", status: "completed" },
    { id: 9, patientId: 3, date: "2025-10-22", time: "13:00", status: "completed" },
    { id: 10, patientId: 4, date: "2025-10-04", time: "14:00", status: "completed" },
    { id: 11, patientId: 4, date: "2025-10-18", time: "15:00", status: "completed" },
    { id: 12, patientId: 5, date: "2025-10-05", time: "16:00", status: "completed" },
    { id: 13, patientId: 5, date: "2025-10-19", time: "17:00", status: "completed" },
    { id: 14, patientId: 6, date: "2025-10-06", time: "09:00", status: "completed" },
    { id: 15, patientId: 6, date: "2025-10-20", time: "10:00", status: "completed" },
    { id: 16, patientId: 7, date: "2025-10-07", time: "11:00", status: "completed" },
    { id: 17, patientId: 7, date: "2025-10-21", time: "12:00", status: "completed" },
    { id: 18, patientId: 8, date: "2025-10-08", time: "13:00", status: "completed" },
    { id: 19, patientId: 8, date: "2025-10-22", time: "14:00", status: "completed" },
    { id: 20, patientId: 9, date: "2025-10-09", time: "15:00", status: "completed" },
    { id: 21, patientId: 9, date: "2025-10-23", time: "16:00", status: "completed" },
    { id: 22, patientId: 10, date: "2025-10-10", time: "17:00", status: "completed" },
    { id: 23, patientId: 10, date: "2025-10-24", time: "09:00", status: "completed" },
    { id: 24, patientId: 10, date: "2025-10-25", time: "10:00", status: "completed" },
    { id: 25, patientId: 10, date: "2025-10-26", time: "11:00", status: "completed" }
]
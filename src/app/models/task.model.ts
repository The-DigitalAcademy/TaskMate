export interface Task {
    id: number | string;
    title: string;
    description: string;
    status: 'to do' | 'in progress' | 'done';
    priority: 'low' | 'medium' | 'high';
    dueDate: string;
}
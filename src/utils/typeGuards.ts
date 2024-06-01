export type TodoContent = string | { message: string; dueDate: Date };

export function isStringContent(content: any): content is string {
    return typeof content === 'string';
}

export function isDateContent(content: any): content is { message: string; dueDate: Date } {
    return content && typeof content.message === 'string' && content.dueDate instanceof Date;
}

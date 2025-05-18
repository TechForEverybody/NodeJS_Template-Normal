import { v4 as uuidv4 } from 'uuid';

export function generateUUID(): string {
    return uuidv4();
}
export function generateUUIDs(count: number): string[] {
    const uuids: string[] = [];
    for (let i = 0; i < count; i++) {
        uuids.push(generateUUID());
    }
    return uuids;
}
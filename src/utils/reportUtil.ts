export function chooseStatus(): string {
    const status = ['PROGRESS', 'DONE', 'ERROR'];

    return status[Math.floor(Math.random() * status.length)];
}

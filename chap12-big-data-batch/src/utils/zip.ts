export const zip = (keys: string[], values: any[]): object => {
    const makeObject = (key: string, value: any) => ({[key]: value});
    const mergeObject = (a: any[]) => a.reduce((accu, val) => ({...accu, ...val}), {});

    let tmp = keys.map((key: string, index: number) => [key, values[index]])
        .filter(a => a[0] && a[1])
        .map(a => makeObject(a[0], a[1]));
    return mergeObject(tmp);
}
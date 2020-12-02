export const getCachedRequest = async (key: string, req: Promise<any>) => {

    const unifiedKey = key.toLocaleLowerCase();

    try {
        const resp = await req;
        window.localStorage.setItem(unifiedKey, JSON.stringify(resp));
        return resp;
    }
    catch(e) {
        // I don't need to handle any other errors
        return JSON.parse(window.localStorage.getItem(unifiedKey) || '') ;
    }
}

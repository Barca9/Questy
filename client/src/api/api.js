export const api = (commonParams) => {

    const request = async (url, params = {}) => {
        const res = await fetch(url, { ...commonParams, ...params });

        const data = await res.json();

        return data;
    };

    const get = async (url, params) => {
        console.log('в API GET', url)
        const data = await request(url, {
            method: 'GET',
            ...params,
        });
        console.log(data)
        return data;
    };

    const post = async (url, params) => {
        const data = await request(url, {
            method: 'POST',
            ...params,
        });

        return data;
    };

    return {
        get,
        post,
    };
};

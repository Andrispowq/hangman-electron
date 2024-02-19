
async function connect(clientId) {
    let body = {
        "clientID": clientId,
        "apple": false
    }

    let result = await getRequestHTTPS("Connect", "POST", body);
    return JSON.parse(result);
}

async function getRequestHTTPS(endpoint, method, requestJson) {
    const queryUrlHttps = '192.168.100.170:6970';
    const url = `https://${queryUrlHttps}/${endpoint}`;

    try {
        const response = await fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestJson),
        });

        if (!response.ok) {
            throw new Error(`Invalid server response: ${response.status}`);
        }

        const data = await response.json();
        console.log("Response:", data);
        return data;
    } catch (error) {
        console.error("Error:", error.message);
        throw error;
    }
}

const contentful = require("contentful");
const client = contentful.createClient({
    // TODO: Move these values outside of codebase
    space: "3ojpvee4so22",
    accessToken: "OtlubS-wiZlTk-QbuFztoy06Q4d7vBCquq9cvkO9yNQ",
});

export const getProjects = () => {
    return client
        .getEntries({
            content_type: "project",
        })
        .then((entries) => entries)
        .catch();
};

export const getAdmin = () => {
    return client
        .getEntry("ZRMlNZAvbDQlDcjmKxfnV")
        .then((entry) => entry)
        .catch();
};

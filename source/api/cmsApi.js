const contentful = require('contentful');
const client = contentful.createClient({
    // TODO: Move these values outside of codebase
    space: '3ojpvee4so22',
    accessToken: 'OtlubS-wiZlTk-QbuFztoy06Q4d7vBCquq9cvkO9yNQ'
});

export default function getProjects() {
    return client
        .getEntries({
            content_type: 'project'
        })
        .then(entries => {
            return entries;
        })
        .catch();
}

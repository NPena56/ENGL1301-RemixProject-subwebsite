const express = require('express');
const app = express();
const axios = require('axios');

// ...

app.use(express.json());

app.post('/submit-response', async (req, res) => {
   const { text } = req.body; // Extract text from the request body
   
   try {
       // Code to interact with GitHub API using axios
       // Make a request to GitHub API to create a file
       // Replace this part with the logic you used in your front-end code
       
       res.status(200).json({ message: 'File created successfully!' });
   } catch (error) {
       console.error('Error:', error);
       res.status(500).json({ error: 'Failed to create file.' });
   }
});

const axios = require('axios');

const OWNER = 'NPena56';
const REPO = '1301RemixProject';
const PATH = 'responses/'; // Path within your repository where you want to save files

const createFileInGitHubRepo = async (text) => {
    const GITHUB_API_URL = `https://api.github.com/repos/${OWNER}/${REPO}/contents/${PATH}`;

    const authHeaders = {
        Authorization: `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`,
        'Content-Type': 'application/json',
    };

    try {
        const encodedContent = Buffer.from(text).toString('base64'); // Encode text to base64

        const response = await axios.put(
            GITHUB_API_URL,
            {
                message: 'Creating a new file via API',
                content: encodedContent,
            },
            {
                headers: authHeaders,
            }
        );

        console.log('File created:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error creating file:', error.response.data);
        throw error;
    }
};

// Usage:
// Call this function passing the 'text' you want to save in the file
createFileInGitHubRepo('This is the text content to be saved in the file.');

// ...

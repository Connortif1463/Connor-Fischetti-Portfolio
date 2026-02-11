import { useState, useEffect } from 'react';
import { Button } from "@mui/material";
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

const LANGUAGE_COLORS = {
    'JavaScript': '#ff9901',
    'TypeScript': '#2474ca',
    'Python': '#1740c5',
    'HTML': '#ff3300',
    'CSS': '#bb1dbb',
    'Java': '#946206',
    'C#': '#dfbc49',
    'PHP': '#777bb4',
    'Ruby': '#cc342d',
    'Go': '#00add8',
    'Rust': '#dea584',
    'Swift': '#fa7343',
    'C++': '#00599c',
    'C': '#555555',
    'Shell': '#89e051',
    'PowerShell': '#012456'
};

export default function LangLabel({ repoUrl, languages: manualLanguageNames }) {  // Add this parameter
    const [languages, setLanguages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // this is the option for non-public/non-github projects
        // allows the user to enter the languages themselves
        if (manualLanguageNames && manualLanguageNames.length > 0) {
            const langList = manualLanguageNames.map(name => ({
                name: name,
                color: LANGUAGE_COLORS[name] || '#6e5494' // defaults to github purple if fails
            }));
            setLanguages(langList);
            setLoading(false);
            return;
        }

        async function fetchRepoLanguages() {
            try {
                const apiUrl = repoUrl
                    .replace('github.com', 'api.github.com/repos')
                    .concat('/languages');

                const response = await fetch(apiUrl);
                const data = await response.json();

                const langList = Object.keys(data).map(lang => ({
                    name: lang,
                    color: LANGUAGE_COLORS[lang] || '#6e5494'  // Use the centralized colors
                }));

                setLanguages(langList);
            } catch (error) {
                console.error('Failed to fetch languages:', error);
                setLanguages([{ name: 'Error', color: '#ff0000' }]);
            } finally {
                setLoading(false);
            }
        }

        fetchRepoLanguages();
    }, [repoUrl, manualLanguageNames]);  // Add manualLanguageNames to dependency array

    if (loading) {
        return <CircularProgress size={24} />;
    }

    return (
        <Stack
            direction="row"
            flexWrap="wrap"
            justifyContent="center"
            spacing={1}
            useFlexGap
            sx={{ mt: 1, mb: 1, gap: '6px' }}
        >
            {languages.map((lang) => (
                <Button
                    key={lang.name}
                    variant="outlined"
                    size="small"
                    disabled
                    sx={{
                        borderColor: lang.color,
                        color: lang.color,
                        '&.Mui-disabled': {
                            borderColor: lang.color,
                            color: lang.color,
                            opacity: 0.6
                        },
                        '&:hover': {
                            borderColor: lang.color,
                            backgroundColor: `${lang.color}15`,
                            color: lang.color
                        },
                        fontSize: '0.75rem',
                        py: 0.5,
                        px: 1.5,
                        minWidth: 'auto',
                        fontWeight: 500
                    }}
                >
                    {lang.name}
                </Button>
            ))}
        </Stack>
    );
}
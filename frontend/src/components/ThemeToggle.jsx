import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { IconButton } from '@mui/material';

export default function ThemeToggle({ toggleTheme, isDarkMode }) {
    return (
        <IconButton
            onClick={toggleTheme}
            sx={{
                position: 'fixed',
                bottom: '20px',
                right: '20px',
                backgroundColor: isDarkMode ? '#333' : '#ddd',
                color: isDarkMode ? '#fff' : '#000',
                border: 'none',
                borderRadius: '50%',
                padding: '10px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            {isDarkMode ? <LightModeIcon fontSize='/small' /> : <DarkModeIcon fontSize='/small' />}
        </IconButton>
    );
}

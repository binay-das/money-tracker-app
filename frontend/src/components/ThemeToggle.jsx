import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export default function ThemeToggle({ toggleTheme, isDarkMode }) {
    return (
        <button
            onClick={toggleTheme}
            style={{
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
            {isDarkMode ? (
                <LightModeIcon style={{ fontSize: '50px' }} />
            ) : (
                <DarkModeIcon style={{ fontSize: '50px' }} />
            )}
        </button>
    );
}

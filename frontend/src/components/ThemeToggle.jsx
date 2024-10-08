import sun from '../assets/brightness.png';
import moon from '../assets/moon.png';

export default function ThemeToggle({ toggleTheme, isDarkMode }) {
    return (
        <button
            onClick={toggleTheme}
            style={{
                position: 'fixed',
                bottom: '20px',
                right: '20px',
                backgroundColor: isDarkMode ? '#555' : '#ddd',
                color: isDarkMode ? '#fff' : '#000',
                border: 'none',
                borderRadius: '50%',
                padding: '10px',
                cursor: 'pointer',
              }}
        >
            <img 
                src={isDarkMode ? sun : moon} 
                alt={isDarkMode ? 'Sun Icon' : 'Moon Icon'} 
                style={{ width: '50px', height: '50px' }}
            />
        </button>
    );
}

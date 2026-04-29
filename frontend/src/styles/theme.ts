export const theme = {
    colors: {
        primary: '#315daf',
        secondary: '#273d66',
        navbarBg: '#162e49',
        action: '#53a2fc',
        actionHover: '#418de0',
        pageBg: '#f8f9fa',
        card: '#ffffff',
        border: '#dddddd',
        textLight: '#ffffff',
        textDark: '#333333',
        textMuted: '#888888',
        textLabel: '#555555',
        success: '#2ecc71',
        danger: '#e74c3c',
        warning: '#f1c40f',
        info: '#3498db',
    },
    borderRadius: {
        sm: '6px',
        md: '8px', 
        lg: '12px', 
    },
    shadows: {
        main: '0 4px 15px rgba(0, 0, 0, 0.1)',
        login: '0 10px 25px rgba(0,0,0,0.2)',
    }
} as const;

export type ThemeType = typeof theme;
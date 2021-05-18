const API_URL = 'http://localhost:4000/v1';
export const URL = {
    TOURNAMENT: {
        LIST: `${API_URL}/tournaments`,
        CREATE: `${API_URL}/tournaments`,
    },
    FIXTURE: {
        LIST: (id) => `${API_URL}/tournaments/${id}/fixture`
    },
}

export const DEFAULT_VALUES = {
    TEAMS_CANT: 6
}

export const APP_ROUTES = {
    HOME: '/',
    FIXTURE: '/fixture'
}

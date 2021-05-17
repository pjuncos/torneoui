export const SHOW_ERROR = 'show_error';
export const HIDE_ERROR = 'hide_error';

export function showError(message) {
    return {
        type: SHOW_ERROR, payload: message
    }
}

export function hideError() {
    return {
        type: HIDE_ERROR,
    }
}

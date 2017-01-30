export const ACTION_NAVIGATE = 'Navigate';
export const ACTION_POP = 'Back';

export function push(route, args = {}) {
    return { type: ACTION_NAVIGATE, routeName: route, ...args };
}

export function pop() {
    return { type: ACTION_POP };
}

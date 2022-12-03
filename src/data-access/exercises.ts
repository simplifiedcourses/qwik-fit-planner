import { Exercise } from '~/types/exercise';

export async function addExercise(exercise: Exercise, cleanup?: (callback: () => void) => void): Promise<Exercise> {
    const abortController = new AbortController();
    if (cleanup) {
        cleanup(() => abortController.abort('cleanup'));
    }
    const res = await fetch(`http://localhost:3000/exercises`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(exercise),
        signal: abortController.signal,
    });
    return res.json();
}


export async function updateExercise(exercise: Exercise, cleanup?: (callback: () => void) => void): Promise<Exercise> {
    const abortController = new AbortController();
    if (cleanup) {
        cleanup(() => abortController.abort('cleanup'));
    }
    const res = await fetch(`http://localhost:3000/exercises/${exercise.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(exercise),
        signal: abortController.signal,
    });
    return res.json();
}


export async function deleteExercise(id: number, cleanup?: (callback: () => void) => void): Promise<void> {
    const abortController = new AbortController();
    if (cleanup) {
        cleanup(() => abortController.abort('cleanup'));
    }
    const res = await fetch(`http://localhost:3000/exercises/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        signal: abortController.signal,
    });
    return res.json();
}


export async function getExercises(cleanup?: (callback: () => void) => void): Promise<Exercise[]> {
    const abortController = new AbortController();
    if (cleanup) {
        cleanup(() => abortController.abort('cleanup'));
    }
    const res = await fetch(`http://localhost:3000/exercises`, {
        method: 'GET',
        signal: abortController.signal,
    });
    return res.json();
}

export async function getExercise(id: number, cleanup?: (callback: () => void) => void): Promise<Exercise> {
    const abortController = new AbortController();
    if (cleanup) {
        cleanup(() => abortController.abort('cleanup'));
    }
    const res = await fetch(`http://localhost:3000/exercises/${id}`, {
        method: 'GET',
        signal: abortController.signal,
    });
    return res.json();
}

import { component$, useClientEffect$, useMount$, useStore, useStylesScoped$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';
import ButtonLink from '../../components/button-link/button-link';
import { getExercises } from '~/data-access/exercises';
import { Exercise } from '~/types/exercise';
import Card from '~/components/card/card';

type State = {
    data: Exercise[]
}
export default component$(() => {
    const state = useStore<State>({
        data: []
    });
    useMount$(async () => {
        const resp = await getExercises()
        state.data = resp;
    })
    return (
        <>
            <div class="flex justify-between">
                <h1 class="text-4xl">Exercises</h1>
                <ButtonLink href="/exercises/add">Add</ButtonLink>
            </div>
            <div class="flex mt-4 flex-wrap justify-between">
                {state.data.map(exercise =>
                    <Card class="flex flex-col m-1 w-56" key={exercise.id}>
                        <h3 class="text-xl">{exercise.name}</h3>
                        <span class="flex-1">{exercise.description}</span>
                        <ButtonLink class="mt-4" href={`/exercises/${exercise.id}`}>
                            Detail
                        </ButtonLink>
                    </Card>)}
            </div>
        </>
    );
});

export const head: DocumentHead = {
    title: 'Exercises',
};

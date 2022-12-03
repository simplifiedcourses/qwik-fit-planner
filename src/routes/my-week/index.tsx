import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './my-week.scss?inline';
import { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
    useStylesScoped$(styles);
    return (
        <>
            <h1>My week</h1>
        </>
    );
});

export const head: DocumentHead = {
    title: 'My week',
};

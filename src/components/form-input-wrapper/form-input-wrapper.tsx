import { component$, Slot } from '@builder.io/qwik';

export default component$(() => {
    return (
        <div class="pb-4">
            <Slot/>
        </div>
    );
});

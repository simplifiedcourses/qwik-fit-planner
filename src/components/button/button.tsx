import { component$, PropFunction, QwikMouseEvent, Slot } from '@builder.io/qwik';

export type ButtonProps = {
    class?: string;
    onClick$?: PropFunction<(event: QwikMouseEvent) => Promise<any>|void>;
    'preventdefault:click'?: boolean;
}
export default component$((props: ButtonProps) => {
    return (
        <button
            {...props}
            class={
                `
                hover:bg-teal-700
                py-3 
                px-5 
                bg-teal-500
                rounded-lg
                text-enter
                text-white
                ${props.class}
                `
            }>
            <Slot/>
        </button>
    );
});

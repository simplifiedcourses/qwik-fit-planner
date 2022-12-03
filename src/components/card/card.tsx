import { component$, Slot } from '@builder.io/qwik';

type CardProps = {
    class?: string
}
export default component$((props: CardProps) => {
    return (
        <div class={`
            flex
            bg-teal-100
            rounded-xl
            w-auto 
            h-auto
            py-4
            px-4
            ${props.class} 
            `}>
            <Slot/>
        </div>
    );
});

import { component$, Slot } from '@builder.io/qwik';
import { Link, LinkProps } from '@builder.io/qwik-city';

export default component$((props: LinkProps) => {
    return (
        <Link {...props} class={
            `
                hover:bg-teal-700
                py-3 px-5 
                bg-teal-500
                rounded-lg
                text-enter
                text-white
                ${props.class}
   `
        }>
            <Slot/>
        </Link>
    );
});

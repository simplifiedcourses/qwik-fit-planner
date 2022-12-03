import { component$, PropFunction } from '@builder.io/qwik';

export type InputTextProps = {
    onInput$?: PropFunction<(event: Event) => any>;
    id?: string;
    placeholder?: string;
    value?: string;
    required?: boolean
}
export default component$((props: InputTextProps) => {
    return (
        <input type="text" {...props}
               class="
               bg-gray-50
               border
               border-gray-300
               text-gray-900
               text-sm rounded-lg
               focus:ring-blue-500
               focus:border-blue-500
               block
               w-full
               p-2.5"
        />
    );
});

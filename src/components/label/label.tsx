import { component$, Slot } from '@builder.io/qwik';

export type LabelProps = {
    for?: string;
}
export default component$((props: LabelProps) => {
    return (
        <label {...props} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            <Slot/>
        </label>
    );
});

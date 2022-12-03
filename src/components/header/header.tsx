import { component$, useClientEffect$, useStore, useStylesScoped$ } from '@builder.io/qwik';
import styles from './header.scss?inline';
import { Link, useLocation } from '@builder.io/qwik-city';
import { format } from 'date-fns';

export default component$(() => {
    const { pathname } = useLocation();
    useStylesScoped$(styles);
    const state = useStore({
        time: new Date()
    });

    useClientEffect$(({cleanup}) => {
        const internal = setInterval(() => state.time = new Date(), 1000);
        cleanup(() => clearInterval(internal));
    });
    return (
        <header class="p-4 border-b-8 border-teal-700 px-4 flex justify-between items-center">
            <div class="logo">
                <Link href="/">
                    Fit planner
                </Link>
            </div>
            <ul class="flex list-none items-center">
                <li class="flex px-2">
                    <Link
                        class={{
                            'font-bold': pathname.indexOf('/my-week/') > -1,
                        }}
                        href="/my-week">
                        My week
                    </Link>
                </li>
                <li class="flex px-2">
                    <Link
                        class={{
                            'font-bold': pathname.indexOf('/exercises/') > -1,
                        }}
                        href="/exercises">
                        Exercises
                    </Link>
                </li>
                <li class="flex">
                    {format(state.time.getTime(), 'hh:mm:ss')}
                </li>
            </ul>
        </header>
    );
});

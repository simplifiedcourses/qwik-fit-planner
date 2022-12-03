import { component$, Slot } from '@builder.io/qwik';
import Header from '../components/header/header';

export default component$(() => {
    return (
        <>
            <main>
                <Header/>
                <section class="p-4">
                    <Slot/>
                </section>
            </main>
            <footer class="flex flex-col items-center">
                <a href="https://simplified.courses" target="_blank">
                    Made with ♡ by simplified.courses in Qwik
                </a>
                <img class="w-28 mt-4" src="/simplified-logo.png" alt=""/>
            </footer>
        </>
    );
});

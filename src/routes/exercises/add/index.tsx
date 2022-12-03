import { component$, useStore, useStylesScoped$ } from '@builder.io/qwik';
import { DocumentHead, useNavigate } from '@builder.io/qwik-city';
import Button from '../../../components/button/button';
import InputText from '~/components/input-text/input-text';
import Label from '~/components/label/label';
import Textarea from '~/components/textarea/textarea';
import FormInputWrapper from '~/components/form-input-wrapper/form-input-wrapper';
import { Exercise } from '~/types/exercise';
import { addExercise } from '~/data-access/exercises';

export async function save(state: Exercise, nav: { path: string }): Promise<void> {
    await addExercise(state);
    nav.path = '/exercises';
}

export default component$(() => {
    const nav = useNavigate();
    const state = useStore<Exercise>({
        name: '',
        description: ''
    });

    return (
        <>
            <h1 className="text-4xl">
                Add Exercise
                {state.name && <span>: {state.name}</span>}
            </h1>
            <form>
                <div className="mb-6">
                    <FormInputWrapper>
                        <Label for="name">
                            Name
                        </Label>
                        <InputText id="name" required
                                   onInput$={(e) => state.name = (e?.target as HTMLInputElement)?.value}
                                   placeholder="Enter the name" value={state.name}/>
                    </FormInputWrapper>
                    <FormInputWrapper>
                        <Label for="description">
                            Description
                        </Label>
                        <Textarea id="description" required
                                  onInput$={(e) => state.description = (e?.target as HTMLTextAreaElement)?.value}
                                  placeholder="Enter the description"></Textarea>
                    </FormInputWrapper>
                </div>
                <Button preventdefault:click onClick$={() => save(state, nav)}>Save</Button>
            </form>
        </>
    );
});

export const head: DocumentHead = {
    title: 'Add exercise',
};

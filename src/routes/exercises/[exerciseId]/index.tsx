import { Exercise } from '~/types/exercise';
import { component$, useMount$, useStore } from '@builder.io/qwik';
import { DocumentHead, useLocation, useNavigate } from '@builder.io/qwik-city';
import FormInputWrapper from '~/components/form-input-wrapper/form-input-wrapper';
import Label from '~/components/label/label';
import InputText from '~/components/input-text/input-text';
import Textarea from '~/components/textarea/textarea';
import Button from '~/components/button/button';
import { deleteExercise, getExercise, updateExercise } from '~/data-access/exercises';

export async function save(state: Exercise, nav: { path: string }): Promise<void> {
    await updateExercise(state);
    nav.path = '/exercises';
}

export async function remove(id: number, nav: { path: string }): Promise<void> {
    await deleteExercise(id);
    nav.path = '/exercises';
}

type State = {
    data: Exercise
}

export const onGet:RequestHandler = ({params}) => {
    return getExercise(params.exerciseId)
}


export default component$(() => {
    const location = useLocation();
    const nav = useNavigate();
    const state = useStore<State>({
        data: {
            name: '',
            description: ''
        }

    }, {recursive: true});
    const endPoint = useEndpoint<typeof onGet>();
    return (
        <Resource value={endpoint} onResultEquals={(state) => 
            <>
                <div class="flex justify-between">
                    <h1 className="text-4xl">
                        Edit Exercise
                        {state.data.name && <span>: {state.data.name}</span>}
                    </h1>
                    <Button onClick$={() => remove(Number(location.params.exerciseId), nav)}>Delete</Button>
                </div>
                <form>
                    <div className="mb-6">
                        <FormInputWrapper>
                            <Label for="name">
                                Name
                            </Label>
                            <InputText id="name" required
                                    onInput$={(e) => state.data.name = (e?.target as HTMLInputElement)?.value}
                                    placeholder="Enter the name" value={state.data.name}/>
                        </FormInputWrapper>
                        <FormInputWrapper>
                            <Label for="description">
                                Description
                            </Label>
                            <Textarea id="description" required
                                    value={state.data.description}
                                    onInput$={(e) => state.data.description = (e?.target as HTMLTextAreaElement)?.value}
                                    placeholder="Enter the description"></Textarea>
                        </FormInputWrapper>
                    </div>
                    <Button preventdefault:click onClick$={() => save(state.data, nav)}>Save</Button>
                </form>
            </>
        }/>
    );
});

export const head: DocumentHead = {
    title: 'Edit exercise',
};

<template>
    <div>
        <h1>New Word</h1>
        <word-form @createOrUpdate="onCreateOrUpdate"></word-form>
    </div>
</template>

<script>
import WordForm from '../components/WordForm.vue';
import { api } from '../helpers/helpers';

export default {
    name: 'new-word',
    components: {
        'word-form': WordForm
    },
    methods: {
        onCreateOrUpdate: async function(word) {
            const res = await api.createWord(word);
            this.flash('Word created', 'Success');
            this.$router.push(`/words/${res._id}`);
        }
    }
};
</script>

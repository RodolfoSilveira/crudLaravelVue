<template>
<div>
    <b-form @submit="onSubmit">
        <b-form-group
            id="nome"
            label="Nome"
            label-for="nome"
            description="Digite nome do produto."
        >
            <b-form-input
            id="nome"
            type="text"
            required
            placeholder="Nome"
            ></b-form-input>
        </b-form-group>

        <b-form-group id="descricao" label="Qual sua descrição:" label-for="descricao">
            <b-form-input
            id="descricao"
            type="text"
            required
            placeholder="descrição"
            ></b-form-input>
        </b-form-group>

        <b-form-group id="valor" label="Preço:" label-for="valor">
            <b-form-input
            id="valor"
            type="number"
            required
            ></b-form-input>
        </b-form-group>

        <b-form-group id="imagem" label="Escolha uma foto:" label-for="imagem">
            <b-form-file
            id="imagem"
            v-model="file"
            placeholder="Escolha uma imagem..."
            drop-placeholder="Large sua imagem aqui..."
            accept="image/jpeg"
            ></b-form-file>
            <div class="mt-3">Imagem: {{ file ? file.name : '' }}</div>
        </b-form-group>

        <b-button type="submit" variant="primary">Cadastrar</b-button>
        <b-button type="reset" variant="danger">Cancelar</b-button>
        </b-form>
    </div>
</template>

<script>

export default {
}
</script>

<style>
.custom-file-input:lang(en) ~ .custom-file-label::after {
    content: 'Escolher...';
}
</style>

<template>
    <v-app>
        <h1 class="mx-auto">Drum Machine</h1>
        <v-content class="mx-auto mt-5">
            <v-flex class="d-flex flex-row mx-auto">

            <bank-one v-if="sharedState.bank === true"/>
            <bank-two v-if="sharedState.bank === false"/>
            <Menu/>
            </v-flex>

        </v-content>

    </v-app>
</template>

<script>
    import bankOne from "./components/BankOne";
    import BankTwo from "./components/BankTwo";
    import Menu from "./components/Menu";
    import {store} from "./store";

    export default {
        name: 'App',
        data() {
            return {
                sharedState: store.state
            }
        },
        components: {
            Menu,
            BankTwo,
            bankOne
        },
    };
</script>

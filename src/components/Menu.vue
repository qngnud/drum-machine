<template>
    <v-card width="300px">
        <v-card-title class="purple white--text">
            <span class="headline">Menu</span>
        </v-card-title>
        <v-list-item>
            <v-switch v-model="sharedState.power" color="purple" @toggle="changePower" :label="`Power`">Power</v-switch>
        </v-list-item>
        <v-list-item>
            <v-switch v-model="sharedState.bank" color="purple" @toggle="changeBank" :label="`Bank`">Power</v-switch>
        </v-list-item>
        <v-list-item>
            <v-slider
                    v-model="sharedState.volume"
                    color="purple darken-4"
                    min="0"
                    max="10"
                    label="Volume"
            />
        </v-list-item>
    </v-card>
</template>

<script>
    import { store} from '../store'
    export default {
        name: "Menu",
        data(){
            return{
                sharedState: store.state
            }
        },
        methods:{
            changePower(){
                store.changePower(this.sharedState.power)
            },
            changeBank(){
                store.changeBank(this.sharedState.bank)
            },
            changeVolume(){
                store.changeVolume(this.sharedState.volume)
            }
        }
    }
</script>

<style scoped>

</style>
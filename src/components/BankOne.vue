<template>
        <v-card width="250px">
            <v-flex class="d-flex flex-row justify-space-around flex-wrap pa-5">
                <v-btn class="mb-5"
                       v-for="item in bankOne"
                       :key="item.keyCode"
                       fab
                       dark
                       color="purple"
                       @click="playSound(item.url)"
                >
                    <span class="white--text"> {{item.keyTrigger}}</span>
                </v-btn>
            </v-flex>
        </v-card>
</template>

<script>
    import {store} from "../store";

    export default {
        name: "bank-one",
        data() {
            return {
                bankOne: [{
                    keyCode: 81,
                    keyTrigger: 'Q',
                    id: 'Heater-1',
                    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
                }, {
                    keyCode: 87,
                    keyTrigger: 'W',
                    id: 'Heater-2',
                    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
                }, {
                    keyCode: 69,
                    keyTrigger: 'E',
                    id: 'Heater-3',
                    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
                }, {
                    keyCode: 65,
                    keyTrigger: 'A',
                    id: 'Heater-4',
                    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
                }, {
                    keyCode: 83,
                    keyTrigger: 'S',
                    id: 'Clap',
                    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
                }, {
                    keyCode: 68,
                    keyTrigger: 'D',
                    id: 'Open-HH',
                    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
                }, {
                    keyCode: 90,
                    keyTrigger: 'Z',
                    id: "Kick-n'-Hat",
                    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
                }, {
                    keyCode: 88,
                    keyTrigger: 'X',
                    id: 'Kick',
                    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
                }, {
                    keyCode: 67,
                    keyTrigger: 'C',
                    id: 'Closed-HH',
                    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
                },
                ],
                sharedState: store.state
            }
        },
        methods: {
            playSound(url){
                if(url && this.sharedState.power === true){
                    let audio = new Audio(url);
                    audio.volume = this.sharedState.volume / 10;
                    audio.play()
                }
            }
        }
    }
</script>

<style scoped>

</style>
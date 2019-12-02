<template>
        <v-card width="250px">
            <v-flex class="d-flex flex-row justify-space-around flex-wrap pa-5">
                <v-btn class="mb-5"
                       v-for="item in backTwo"
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
    import { store} from "../store";

    export default {
        name: "BankTwo",
        data(){
            return{
                backTwo: [{
                    keyCode: 81,
                    keyTrigger: 'Q',
                    id: 'Chord-1',
                    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
                }, {
                    keyCode: 87,
                    keyTrigger: 'W',
                    id: 'Chord-2',
                    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
                }, {
                    keyCode: 69,
                    keyTrigger: 'E',
                    id: 'Chord-3',
                    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
                }, {
                    keyCode: 65,
                    keyTrigger: 'A',
                    id: 'Shaker',
                    url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
                }, {
                    keyCode: 83,
                    keyTrigger: 'S',
                    id: 'Open-HH',
                    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
                }, {
                    keyCode: 68,
                    keyTrigger: 'D',
                    id: 'Closed-HH',
                    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
                }, {
                    keyCode: 90,
                    keyTrigger: 'Z',
                    id: 'Punchy-Kick',
                    url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
                }, {
                    keyCode: 88,
                    keyTrigger: 'X',
                    id: 'Side-Stick',
                    url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
                }, {
                    keyCode: 67,
                    keyTrigger: 'C',
                    id: 'Snare',
                    url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
                }],
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
export const store = {
    state: {
        power: true,
        volume: 5,
        bank: true
    },
    changePower(value){
        this.state.power = value !== true;
    },
    changeBank(value){
        this.state.bank = value !== true;
    },
    changeVolume(value) {
        this.state.volume = value
    }
};
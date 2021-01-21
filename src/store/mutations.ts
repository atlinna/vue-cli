import { State } from './state'

export default{
    // add(state: State, payload: any) {
    //     payload ? (state.total += payload) : state.total++;
    // },
    updateDate(state:State,payload:any){
        state.globalDate = new Date()
    }
}
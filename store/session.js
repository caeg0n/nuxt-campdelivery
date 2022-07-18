//import axios from 'axios'

export const state = () => ({
  device_uuid: {},
  capacitor_coodinates:{}
})

export const actions = {
  setUUID({ commit },uuid) {
    commit('setUUID',uuid)
  },

  setCapacitorCoordinates({ commit },coodinates) {
    commit('setCapacitorCoordinates',coodinates)
  },
}

export const mutations = {

  setUUID(state, uuid) {
    state.device_uuid = uuid
  },

  setCapacitorCoordinates(state, coordinates) {
    state.capacitor_coordinates = coordinates
  },

}

export const getters = {
  // myGetter(state) {
  //   return state.counter + 1000
  // },
}

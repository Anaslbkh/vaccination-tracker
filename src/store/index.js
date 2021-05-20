import { createStore } from 'vuex'

export default createStore({
  state: {
    worldData: [],
    countryData: []

  },
  mutations: {
    getWorldData() {
      this.state.worldData = []
      fetch("https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/vaccinations.json").then(data => data.json()).then(data => {
        data.forEach(country => {
          this.state.worldData.push([country.country, country.data[country.data.length - 1].total_vaccinations])
        })
      })


    },

    async dataByCountry(state, { country }) {
      console.dir(country)
      state.countryData = []
      // require csvtojson
      //var csv = require("csvtojson");


      const request = require('request')
      const csv = require('csvtojson')

      csv()
        .fromStream(request.get(`https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/country_data/${country}.csv`))
        .subscribe((json) => {
          return new Promise((resolve, reject) => {
            // long operation for each json e.g. transform / write into database.
            // console.log(json)
            state.countryData.push(json);
            resolve(() => { return this.state.countryData })


            reject(() => { return })
          })

        });
      console.log(this.state)
    }
  },
  actions: {
    getWorldData({ commit }) {
      commit("getWorldData")
    },
    async dataByCountry({ commit }, country) {
      console.log(country)
      await commit("dataByCountry", { country })
      return this.state.countryData
    }
  },
  modules: {
  }
})

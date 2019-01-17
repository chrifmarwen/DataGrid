const AbstractServiceProvider = require('./AbstractServiceProvider')
const { actions } = require('../routes/configuration')
const { HeapSort } = require('../helper/sortHelper/heapSort')

class Data extends AbstractServiceProvider {

  constructor() {
    super()
    this.getData = this.getData.bind(this)
    this.on(actions.GET_DATA, this.getData)
  }

  getData({ offset, pageLength, columns }) {
    let data = require('../../data.json')
    let sorter = new HeapSort()
    data = sorter.sort(data, columns)

    data.filter((item, index) => (index + 1 >= offset && index + 1 <= offset + pageLength))
      .sort((a, b) => {

      })
    this.emit(actions.GET_DATA + '_DONE', null, ['test,', 'bravo'])
  }
}

module.exports = Data

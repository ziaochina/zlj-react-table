import pkgJson from './package.json'
import { actionMixin, registerComponent } from 'maka'
import ReactTable from "react-table"
import './style.less'

const name = pkgJson.name

registerComponent('ReactTable', ReactTable)

const state = {
    data: {
        list: [{
            name: 'name1',
            description: 'description1'
        },{
            name: 'name2',
            description: 'description2'
        },{
            name: 'name3',
            description: 'description3'
        }]
    }
}

@actionMixin('base')
class action {
    constructor(option) {
        Object.assign(this, option.mixins)
    }
}

const view = {
    component: 'div',
    className: 'zlj-react-table',
    children: [{
        component: 'ReactTable',
        data: '{{data.list}}',
        columns: [{
            Header: 'Name',
            accessor: 'name'
        },{
            Header: 'Description',
            accessor: 'description'
        }]
    }]
}

export {
    name,
    state,
    action,
    view
}
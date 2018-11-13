
zlj-react-table application for registering the react-table component

## Usage
Your application can use react-table components by add zlj-react-table dependency.

1. Add dependency
```bash
$ maka add zlj-react-table
```

2. Modify the view
```javascript
const view = {
    component: 'div',
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
```

3. Modify the index.html
```html
<script>
    window.main = function (maka) {
        maka.load(['zlj-react-table']).then(()=>{
            maka.render('yourApp','app')
        })
    }
<script>
```

## Download and run

1. Download
2. Decompress
3. Enter decompress directory
4. Run
```bash
$ yarn install
$ yarn start
```

## License

MIT


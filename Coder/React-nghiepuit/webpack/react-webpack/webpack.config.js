const path = require('path');

module.exports = {
    entry : {
        bundle : './src/index.js'
    },
    output : {
        path : path.join(__dirname, 'dist'),
        filename : 'bundle.js'
    },
    mudule : {
        rules : [
            {
                use : 'babel-loader',
                text: /\.js$/,
                exclude : '/node_modules'
            },
            use : [
                'style-loader',
                'css-loader'
            ],
            test : /\.css$/
        ]
    }
}
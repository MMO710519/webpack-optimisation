//webpackの設定ファイル。SplitChunksPluginを利用していない

const path=require('path');

module.exports={
  mode:'production',
  //エントリーポイントの設定
  entry:{
    app:'./src/js/app.js',
    app2:'./src/js/app2.js',
    app3:'./src/js/app3.js'
  },
  output:{
    filename:'[name].bundle.js',
    path:path.resolve(__dirname,'public/js')
  }
};

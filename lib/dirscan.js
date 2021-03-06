var path = require('path');
var walk = require('walkdir');

module.exports = dirscan;

/**
 Return a list of file paths that match the extentions
 param in the dir and any sub dirs.
*/
function dirscan(dir,exts,depth){
  function match(e){
    if(!exts)
      return true;
    return exts.indexOf(path.extname(e).substr(1)) !== -1;
  }
  return walk.sync(dir,{"follow_symlinks" : true,max_depth : depth}).filter(match);
}
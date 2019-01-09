var trimDirectory = function(data){
  var path = data.split('\\');
  return path.slice(0, path.length-1).join("\\");
}

module.exports = {
  trimDirectory
}

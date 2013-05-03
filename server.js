var fs = require('fs');
var avro = require('./build/Release/avro');
var Buffer = require('buffer').Buffer;

//simple file read case
avro.onerror = function(error){
  console.log(error);
}

avro.onschema = function(schema){
  console.log(schema);
}

avro.ondatum = function(datum){
  console.log(datum);
}

//avro.setSchema("cpx.json");

avro.decode("test.bi");


//console.log(avro.getSchema());

/*
fs.open("test.bin", 'r', function(status, fd) {
  fs.fstat(fd,function(err, stats){
    var i=0
    var s=stats.size
    var buffer = new Buffer(100);

    console.log('.'+"test.bin"+' '+s);
    for(i=0;i<s;){
      var readbytes = fs.readSync(fd,buffer,0,buffer.length,i);
      avro.decodeAppend(buffer.slice(0,readbytes));
      console.log(avro.decode().length);
      i=i+buffer.length;
    }
    //console.log(addon.decode().length);

    fs.close(fd)
  })
});
console.log("Calling Addon end");
*/
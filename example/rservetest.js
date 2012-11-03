process.stdin
    .pipe(require('../lib/rserve').connect('localhost', 6311))
    .pipe(process.stdout);
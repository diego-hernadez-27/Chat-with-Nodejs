const http = require('./app');

const port = 5000;

http.listen(port, () => {
    console.log('Server corriendo en el puerto', port);
});
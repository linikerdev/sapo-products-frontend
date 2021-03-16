import http from '../config/http';

const allProducts = (filter) => http.get(`/product/${filter}`);


// exemplo
// const createServiceCurso = (data) => http.post('/curso/create', data);

export {
    allProducts,
}


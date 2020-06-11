export const link = {
    baseaddress: 'http://localhost:3000/api/v1'
};

export const createProduct = {
    apiUrl: link.baseaddress + '/product'
};

export const fetchProducts = {
    apiUrl: link.baseaddress + '/product'
};

export const fetchProduct = {
    apiUrl: link.baseaddress + '/product/{id}'
};

import axios from "axios";

let callbackFunction = null;

const instance = axios.create({
    baseURL: 'http://fcbc.site',
});

instance.setCallbackFunction = function(callback) {
    callbackFunction = callback;
};

instance.interceptors.response.use(
    response => response,
    error => {
        let errorMessage = 'An error occurred';

        if (error.response.status === 400) {
            errorMessage = 'Bad request. Please check your request data.';
        } else if (error.response.status === 401) {
            errorMessage = 'Unauthorized. Please log in to access this resource.';
        } else if (error.response.status === 403) {
            errorMessage = 'Доступ запрещен.';
        } else if (error.response.status === 404) {
            errorMessage = 'Ничего не найдено.';
        } else if (error.response.status === 422) {
            errorMessage = 'Что-то вы заполнили не так.';
        } else if (error.response.status === 429) {
            errorMessage = 'Попробуйте позже.';
        }

        if (callbackFunction) {
            callbackFunction('error', errorMessage);
        }

        return Promise.reject(error);
    }
);

export default instance;

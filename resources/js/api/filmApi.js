import axios from "@/axios/AxiosWrapper.js";

export const filmApi = {
    search: (value, callback) => {
        axios.get(route("film.search", value)).then((res) => {
            return callback(res);
        });
    },
};

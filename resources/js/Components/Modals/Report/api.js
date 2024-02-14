export const sendReport = (form, callback) => {
    axios.post(route('report.store'), form)
        .catch((res) => {
            console.log(res);
        })
        .then((res) => {
            if(res.status === 200) callback();
        })
}

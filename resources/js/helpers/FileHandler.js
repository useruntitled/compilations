export const handleFile = (file, callback) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        return callback(reader.result);
    };
};

export const toFormData = (key, file) => {
    const formData = new FormData();
    formData.append(key, file);
    return formData;
};

export const handleFile = (file, callback) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        return callback(reader.result);
    };
}

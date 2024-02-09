<template>
    <p class="text-sm">Выберите изображение подборки</p>
    <div class="p-5">
        <div
            v-if="!imageIsUploaded"
            class="border-2 py-10 border border-slate-200 border-dashed rounded-xl p-1 text-center"
            @dragover.prevent=""
            @drop.prevent="onDrop($event)"
        >
            <div class="my-2">
                <p>Перетащите изображение сюда</p>
                <p class="text-sm text-slate-700">Или нажмите на кнопку</p>
            </div>
            <input
                @dragenter.prevent="showDropzone = 1"
                @change="handleFilepond($event)"
                ref="file"
                type="file"
                accept="image/png, image/jpeg"
                class="p-2 px-0 mx-0 text-sm text-slate-800 file:mr-4 ring-0 focus:ring-0 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-sky-50 file:text-sky-700 hover:file:bg-sky-100 file:cursor-pointer"
                placeholder="Описание подборки"
                :required="false"
            />
            <button
                @click.prevent="onPaste($event)"
                class="py-2 px-4 border rounded-xl text-sm hover:bg-neutral-50 text-slate-800 bg-white"
            >
                Вставить из буфера
            </button>
        </div>
        <div v-else class="border">
            <button
                @click.prevent="removeImage()"
                class="absolute text-red-700 cursor-pointer text-lg"
            >
                ✘
            </button>
            <img
                class="mx-auto"
                :src="uploadedImage"
                style="min-width: 200px"
                alt=""
            />
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            imageIsUploaded: false,
            uploadedImage: null,
            imageToSend: null,
        };
    },
    emits: ["getImage"],
    methods: {
        onDrop(e) {
            const file = e.dataTransfer.files[0];
            console.log(file);
            this.processImage(file);
        },
        onPaste(e) {
            const secureContext = window.isSecureContext;
            if (secureContext == false) {
                console.log(`Error: window.isSecureContext = ${secureContext}`);

                // trick with hidden textarea/contenteditable div is fixed.
                return;
            }

            let file = e.clipboardData.items[0];
            this.processImage(file);
        },
        handleFilepond(e) {
            const file = e.target.files[0];
            this.processImage(file);
        },
        processImage(file) {
            this.imageToSend = file;
            let reader = new FileReader();
            reader.onload = (e) => {
                this.saveImage(e.target.result);
            };
            reader.readAsDataURL(file);
        },
        saveImage(file) {
            this.imageIsUploaded = true;
            this.uploadedImage = file;
            this.$emit("getImage", this.imageToSend);
        },
        removeImage() {
            this.imageIsUploaded = false;
        },
    },
};
</script>

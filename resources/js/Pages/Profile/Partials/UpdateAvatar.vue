<template>
    <div>
        <h2 class="text-lg font-medium text-gray-900">Изображение профиля</h2>
        <p class="mt-1 text-sm text-gray-600">Выбрать аватар вашего профиля.</p>
        <div class="my-5">
            <img
                v-lazy="
                    route('image.crop', [
                        $page.props.auth.user.avatar,
                        '100x100',
                    ])
                "
                style="height: 100px; width: 100px"
                alt=""
            />
            <input
                @input="form.avatar = $event.target.files[0]"
                type="file"
                accept="image/png, image/jpeg"
                class="p-2 text-sm text-slate-800 w-full file:mr-4 ring-0 focus:ring-0 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indiigo-50 file:text-indiigo-700 hover:file:bg-indiigo-100 file:cursor-pointer"
                placeholder="Описание подборки"
                :required="false"
            />
        </div>
    </div>
</template>
<script>
export default {};
</script>

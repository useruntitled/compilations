<?php

namespace App\Http\Requests\Bookmark;

use App\Models\Bookmark;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Validator;

class StoreBookmarkRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'post_id' => 'required|exists:posts,id',
        ];
    }

    public function after(): array
    {
        return [
            function (Validator $validator) {
                $bookmark = Bookmark::where('user_id', auth()->user()->id)
                    ->where('post_id', $this->post_id)
                    ->first();
                if ($bookmark != null) {
                    $validator->errors()->add(
                        'post_id',
                        'The bookmark already exists!',
                    );
                }
            },
        ];
    }
}

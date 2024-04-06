<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreCommentRequest extends FormRequest
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
            'text' => 'min:0|max:2000',
            'image' => [
                'nullable',
                function ($attribute, $value, $fail) {
                    if ($value !== null && $value instanceof \Illuminate\Http\UploadedFile) {
                        $this->validateImageType($attribute, $value, $fail);
                    }
                },
                'max:20480',
            ],
        ];
    }

    protected function validateImageType($attribute, $value, $fail)
    {
        if (!in_array($value->getClientOriginalExtension(), ['jpeg', 'jpg', 'png', 'webp'])) {
            $fail("The $attribute must be a file of type: jpeg, jpg, png, webp.");
        }
    }
}

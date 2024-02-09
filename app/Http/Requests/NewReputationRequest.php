<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class NewReputationRequest extends FormRequest
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
            'reputation_to_type' => 'required',
            'reputation_to_id' => 'required',
            'action' => 'required',
        ];
    }
}

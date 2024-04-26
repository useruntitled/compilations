<?php

namespace App\Http\Requests\Reputation;

use App\Models\Reputation;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Validator;

class StoreReputationRequest extends FormRequest
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
            'type' => ['required', Rule::in(['post', 'comment', 'Post', ' Comment'])],
            'action' => ['required', Rule::in(['up', 'down'])],
            'id' => 'required',
        ];
    }

    public function after(): array
    {
        return [
            function (Validator $validator) {
                $validator->after(function ($validator) {
                    $reputation = Reputation::where('user_id', auth()->user()->id)
                        ->where('reputation_to_type', getModel($this->type))
                        ->where('reputation_to_id', $this->id)
                        ->first();

                    if ($reputation) {
                        $validator->errors()->add('reputation', 'The reputation already exists.');
                    }
                });
            },
        ];
    }
}

<?php

namespace App\Http\Requests\Auth;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules;

class RegisterRequest extends FormRequest
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
            'email' => function($attribute, $value, $fail) {
                $user = User::where('email', $value)->first();
                if($user &&  $user->hasVerifiedEmail()) {
                    $fail('Почта уже используется');
                }
            },
            'name' => 'required|string|max:255',
            'username' => 'required|string|max:20',
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ];
    }
}

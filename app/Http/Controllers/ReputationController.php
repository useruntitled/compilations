<?php

namespace App\Http\Controllers;

use App\Http\Requests\NewReputationRequest;
use App\Models\Reputation;
use Illuminate\Database\Eloquent\Relations\Relation;
use Illuminate\Support\Facades\Auth;

class ReputationController extends Controller
{
    public function index(NewReputationRequest $request)
    {
        $request['reputation_to_type'] = str_contains($request->reputation_to_type, 'App\\Models\\') ?
            $request->reputation_to_type : Relation::getMorphedModel($request->reputation_to_type);

        $reputation = Reputation::where('reputation_to_type', $request->reputation_to_type)
            ->where('reputation_to_id', $request->reputation_to_id)
            ->where('user_id', Auth::user()->id)->first();
        if ($reputation != null) {
            $reputation = $this->patch($reputation, $request);
        } else {
            $reputation = $this->store($request);
        }

        return $reputation->reputation_to->reputation;
    }

    public function patch($reputation, $request)
    {
        if ($request->action == $reputation->action) {
            Reputation::destroy($reputation->id);
            $reputation['action'] = null;

            return $reputation;
        } else {
            $reputation['action'] = $request->action;
            $reputation->save();

            return $reputation;
        }
    }

    public function store($request)
    {
        $reputation = Reputation::create([
            'reputation_to_type' => $request->reputation_to_type,
            'reputation_to_id' => $request->reputation_to_id,
            'action' => $request->action,
            'user_id' => Auth::user()->id,
        ]);

        return $reputation;
    }
}

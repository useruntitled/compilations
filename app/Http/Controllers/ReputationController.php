<?php

namespace App\Http\Controllers;

use App\Http\Requests\Reputation\DestroyReputationRequest;
use App\Http\Requests\Reputation\StoreReputationRequest;
use App\Http\Requests\Reputation\UpdateReputationRequest;
use App\Models\Reputation;

class ReputationController extends Controller
{
    public function store(StoreReputationRequest $request)
    {
        Reputation::create([
            'user_id' => auth()->user()->id,
            'action' => $request->action,
            'reputation_to_type' => getModel($request->type),
            'reputation_to_id' => $request->id,
        ]);

        return response()->json('', 201);
    }

    public function update(UpdateReputationRequest $request)
    {
        $reputation = Reputation::where('reputation_to_type', getModel($request->type))
            ->where('reputation_to_id', $request->id)
            ->where('user_id', auth()->user()->id)->firstOrFail();
        $reputation->update([
            'action' => $request->action,
        ]);

        return response()->json('', 200);
    }

    public function destroy(DestroyReputationRequest $request)
    {
        $reputation = Reputation::where('reputation_to_type', getModel($request->type))
            ->where('reputation_to_id', $request->id)
            ->where('user_id', auth()->user()->id)
            ->firstOrFail();
        $reputation->delete();

        return response()->json('', 204);
    }
}

<?php
namespace App\Traits;

use App\Models\Reputation;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Support\Facades\Auth;

trait HasReputation
{
    protected $classname;

    public function __construct()
    {
        $this->classname = __CLASS__;
    }

    public function reputation(): MorphMany
    {
        return $this->morphMany(Reputation::class,'reputation_to');
    }

    // public function getIsUserOwnReputationAttribute()
    // {
    //     return $this->reputation?->reputation_to_id == Auth::user()->id;
    // }

    public function getRepAttribute()
    {   
        $pluses = $this->reputation ?
        $this->reputation->where('action','up')
        ->where('reputation_to_type',$this->classname)->count() : 0;
        $minuses = $this->reputation ?
        $this->reputation->where('action','down')
        ->where('reputation_to_type',$this->classname)->count() : 0;

        
        $user_action = Auth::user() ? $this->getUserActionReputation() : null;
        return [
            'up' => $pluses,
            'down' => $minuses,
            'action' => $user_action ?? null,
            'reputation_to_id' => $this->id,
        ];
    }

    protected function getUserActionReputation()
    {
        $rep = $this->reputation ? $this->reputation->where('user_id',Auth::user()->id)
        ->where('reputation_to_type',$this->classname)->first() : null;
        if($rep != null) {
            return $rep->action;
        } 
        return null;
    }
    
    
}


?>
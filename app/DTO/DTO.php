<?php

namespace App\DTO;

class DTO
{
    public function except($attribute)
    {
        $objectVars = get_object_vars($this);
        unset($objectVars[$attribute]);

        foreach ($objectVars as $key => $value) {
            $this->$key = $value;
        }

        return $objectVars;
    }

    public function toJson()
    {
        return json_encode(get_object_vars($this));
    }
}

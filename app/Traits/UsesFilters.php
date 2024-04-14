<?php

namespace App\Traits;

trait UsesFilters
{
    public function setFilter($builder)
    {
        $filter = request('filter');

        if ($filter != null) {
            return $builder->$filter();
        }

        return $builder;
    }
}

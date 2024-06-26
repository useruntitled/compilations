<?php

namespace App\Enums;

enum UserRole: string
{
    const ADMIN = 'admin';

    const MODER = 'moder';

    const CREATOR = 'creator';

    const USER = 'user';

    const SERVICE_DELETED_ACCOUNT = 'deleted';
}

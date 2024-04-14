<?php

namespace App\Enums;

enum CommentText: string
{
    const DELETED_TEXT = 'Комментарий удалён';

    const DECLINED_TEXT = 'Комментарий удалён модератором';
}

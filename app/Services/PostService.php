<?php

namespace App\Services;

use App\Http\Resources\Post\PostFeedResource;
use App\Http\Resources\Post\ShortPostFeedResource;
use App\Queries\Post\DraftedPostsQuery;
use App\Queries\Post\MostCommentedPostsQuery;
use App\Queries\Post\NewPostsQuery;
use App\Queries\Post\PopularPostsQuery;
use App\Queries\Post\RandomPostsQuery;

class PostService
{
    public function getPopular(?int $page = 1)
    {
        $posts = PopularPostsQuery::get($page);

        return PostFeedResource::collection($posts);
    }

    public function getMostCommented(?int $page = 1)
    {
        $posts = MostCommentedPostsQuery::get($page);

        return ShortPostFeedResource::collection($posts);
    }

    public function getNew(?int $page = 1)
    {
        $posts = NewPostsQuery::get($page);

        return PostFeedResource::collection($posts);
    }

    public function getDrafts(?int $page = 1)
    {
        $posts = DraftedPostsQuery::get($page);

        return PostFeedResource::collection($posts);
    }

    public function getRandom(?int $page, ?int $postId)
    {
        $posts = RandomPostsQuery::get($page, $postId);

        return PostFeedResource::collection($posts);
    }
}

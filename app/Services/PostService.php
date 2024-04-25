<?php

namespace App\Services;

use App\Http\Resources\Post\PostFeedResource;
use App\Http\Resources\Post\ShortPostFeedResource;
use App\Jobs\PostIncrementViewJob;
use App\Jobs\PostIncrementVisitJob;
use App\Models\Post;
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

        $this->incrementView($posts);

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

        $this->incrementView($posts);

        return PostFeedResource::collection($posts);
    }

    public function getDrafts(?int $page = 1)
    {
        return DraftedPostsQuery::get($page);
    }

    public function getRandom(?int $page, ?int $postId)
    {
        $posts = RandomPostsQuery::get($page, $postId);

        $this->incrementView($posts);

        return PostFeedResource::collection($posts);
    }

    public function incrementView($posts): void
    {
        dispatch(new PostIncrementViewJob($posts));
    }

    public function incrementVisit(Post $post): void
    {
        dispatch(new PostIncrementVisitJob($post));
    }
}

<?php

namespace App\Providers;

use App\Events\CommentCreatedEvent;
use App\Events\CommentDeletedEvent;
use App\Events\NotificationCreated;
use App\Events\ReplyCreatedEvent;
use App\Events\ReplyDeletedEvent;
use App\Events\ReputationDeletedEvent;
use App\Events\ReputationPutEvent;
use App\Listeners\CommentCreatedListener;
use App\Listeners\CommentDeletedListener;
use App\Listeners\ReplyCreatedListener;
use App\Listeners\ReplyDeletedListener;
use App\Listeners\ReputationDeletedListener;
use App\Listeners\ReputationPutListener;
use App\Models\Comment;
use App\Models\CommentReputation;
use App\Models\Post;
use App\Models\Reply;
use App\Models\ReplyReputation;
use App\Models\Reputation;
use App\Models\User;
use App\Observers\CommentObserver;
use App\Observers\CommentReputationObserver;
use App\Observers\PostObserver;
use App\Observers\ReplyObserver;
use App\Observers\ReplyReputationObserver;
use App\Observers\ReputationObserver;
use App\Observers\UserObserver;
use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Event;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event to listener mappings for the application.
     *
     * @var array<class-string, array<int, class-string>>
     */
    protected $listen = [
        Registered::class => [
            SendEmailVerificationNotification::class,
        ],
        ReputationPutEvent::class => [
                ReputationPutListener::class,
        ],
        ReputationDeletedEvent::class => [
            ReputationDeletedListener::class,
        ],
        CommentCreatedEvent::class => [
            CommentCreatedListener::class,
        ],
        CommentDeletedEvent::class => [
            CommentDeletedListener::class,
        ],
        // ReplyCreatedEvent::class => [
        //     ReplyCreatedListener::class,
        // ],
        // ReplyDeletedEvent::class => [
        //     ReplyDeletedListener::class,
        // ],
    ];
    protected $observers = [
        Post::class => [PostObserver::class],
        User::class => [UserObserver::class],
        Comment::class => [CommentObserver::class],
        // Reply::class => [ReplyObserver::class],
        Reputation::class => [ReputationObserver::class],
    ];

    /**
     * Register any events for your application.
     */
    public function boot(): void
    {
        //
    }

    /**
     * Determine if events and listeners should be automatically discovered.
     */
    public function shouldDiscoverEvents(): bool
    {
        return false;
    }
}

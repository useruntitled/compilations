<?php

namespace App\Providers;

use App\Events\CommentCreatedEvent;
use App\Events\CommentDeclinedEvent;
use App\Events\CommentDeletedEvent;
use App\Events\PostDeclinedEvent;
use App\Events\ReputationCreatedEvent;
use App\Events\ReputationDeletedEvent;
use App\Events\ReputationUpdatedEvent;
use App\Listeners\DeleteReplyNotifications;
use App\Listeners\DeleteReputationNotifications;
use App\Listeners\DepersonalizeCommentAuthor;
use App\Listeners\ForceDeleteDeletedParent;
use App\Listeners\SendCommentUpNotification;
use App\Listeners\SendCommentWasDeclinedNotification;
use App\Listeners\SendPostUpNotification;
use App\Listeners\SendPostWasCommentedNotification;
use App\Listeners\SendPostWasDeclinedNotification;
use App\Listeners\SendReplyNotification;
use App\Listeners\UpdateReputationNotifications;
use App\Models\Comment;
use App\Models\Media;
use App\Models\Post;
use App\Models\Reputation;
use App\Models\User;
use App\Observers\CommentObserver;
use App\Observers\MediaObserver;
use App\Observers\PostObserver;
use App\Observers\ReputationObserver;
use App\Observers\UserObserver;
use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

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
        ReputationCreatedEvent::class => [
            SendPostUpNotification::class,
            SendCommentUpNotification::class,
        ],
        ReputationUpdatedEvent::class => [
            UpdateReputationNotifications::class,
        ],
        ReputationDeletedEvent::class => [
            DeleteReputationNotifications::class,
        ],
        CommentCreatedEvent::class => [
            SendReplyNotification::class,
            SendPostWasCommentedNotification::class,
        ],
        CommentDeletedEvent::class => [
            DeleteReplyNotifications::class,
            ForceDeleteDeletedParent::class,
            DepersonalizeCommentAuthor::class,
        ],
        CommentDeclinedEvent::class => [
            SendCommentWasDeclinedNotification::class,
            DepersonalizeCommentAuthor::class,
        ],
        PostDeclinedEvent::class => [
            SendPostWasDeclinedNotification::class,
        ],
        \SocialiteProviders\Manager\SocialiteWasCalled::class => [
            // ... other providers
            \SocialiteProviders\Yandex\YandexExtendSocialite::class.'@handle',
            \SocialiteProviders\Google\GoogleExtendSocialite::class.'@handle',
            \SocialiteProviders\VKontakte\VKontakteExtendSocialite::class.'@handle',
        ],

    ];

    protected $observers = [
        Post::class => [PostObserver::class],
        User::class => [UserObserver::class],
        Comment::class => [CommentObserver::class],
        // Reply::class => [ReplyObserver::class],
        Reputation::class => [ReputationObserver::class],
        Media::class => [MediaObserver::class],
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
